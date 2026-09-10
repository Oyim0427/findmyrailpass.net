import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const project = process.cwd();
const outputDir = `${project}/outputs/01a05c2f-3564-7ea2-a9f8-294cf6beb74d`;
const outputFile = `${outputDir}/directory-review-2026-09-09.xlsx`;
const previewDir = `${outputDir}/previews`;

async function readJson(relative) {
  return JSON.parse(await fs.readFile(`${project}/${relative}`, 'utf8'));
}

function parseDirectory(source) {
  const marker = 'export const DOMESTIC_DIRECTORY_PASSES: DomesticDirectoryPass[] = ';
  return JSON.parse(source.slice(source.indexOf(marker) + marker.length, source.lastIndexOf(';')));
}

const [review, research, links, history, syncReport, candidatesPayload, directorySource] = await Promise.all([
  readJson('reports/directory-publication-review.json'),
  readJson('data/directory-source-research.json'),
  readJson('reports/directory-link-health.json'),
  readJson('data/directory-publication-history.json'),
  readJson('reports/biglobe-directory-sync.json'),
  readJson('reports/directory-candidates.json'),
  fs.readFile(`${project}/src/data/domesticPassDirectory.ts`, 'utf8'),
]);

const published = parseDirectory(directorySource);
const candidates = candidatesPayload.candidates;
const passById = new Map(candidates.map(pass => [pass.id, pass]));
const publishedById = new Map(published.map(pass => [pass.id, pass]));
const linkByUrl = new Map(links.results.map(item => [item.url, item]));
const issues = new Map();

function addIssue(pass, label, details = {}) {
  if (!pass) return;
  const current = issues.get(pass.id) || { pass, labels: new Set(), ...details };
  current.labels.add(label);
  Object.assign(current, Object.fromEntries(Object.entries(details).filter(([, value]) => value !== undefined)));
  issues.set(pass.id, current);
}

for (const pass of candidates) {
  if (pass.status === 'needs-review') addIssue(pass, '销售日期待确认');
  if (!pass.officialSourceKind) addIssue(pass, '未确认官方详情页');
  if (pass.officialSourceKind === 'operator-overview') addIssue(pass, '仅有运营方总览');
  const health = linkByUrl.get(pass.relatedUrl);
  if (health && !health.reachable) addIssue(pass, '坏链接', { health });
}

for (const [id, item] of Object.entries(research.passes || {})) {
  if (item.status === 'unresolved') addIssue(passById.get(id) || publishedById.get(id), '来源未确定', { research: item });
  if (item.status === 'broken') addIssue(passById.get(id) || publishedById.get(id), '原链接异常', { research: item });
}
for (const pass of review.pendingApproval || []) addIssue(pass, '待确认上线');

const issueRows = [...issues.values()]
  .sort((a, b) => a.pass.region.localeCompare(b.pass.region, 'ja') || a.pass.company.localeCompare(b.pass.company, 'ja') || a.pass.name.localeCompare(b.pass.name, 'ja'))
  .map(({ pass, labels, research: sourceItem = research.passes?.[pass.id], health = linkByUrl.get(pass.relatedUrl) }) => [
    [...labels].join('、'), pass.id, pass.name, pass.company, pass.region, pass.status, pass.salesPeriod,
    pass.endDate || '', pass.officialSourceKind || '', pass.relatedUrl || sourceItem?.originalUrl || '',
    health?.status ?? sourceItem?.httpStatus ?? '', sourceItem?.suggestedUrl || '', sourceItem?.query || '',
    sourceItem?.note || (labels.has('坏链接') ? health?.error || `HTTP ${health?.status}` : ''),
  ]);

const offlineRows = (history.events || []).map(event => [
  event.snapshotDate || '', event.id, event.name, event.company, event.region, event.salesPeriod,
  event.endDate || '', event.reason, event.relatedUrl || '',
]);

const workbook = Workbook.create();
const summary = workbook.worksheets.add('检查概要');
const issuesSheet = workbook.worksheets.add('未确定与坏链接');
const offlineSheet = workbook.worksheets.add('自动下线记录');
const dark = '#173C34';
const green = '#00745A';
const pale = '#E9F5F1';
const orange = '#C95322';
const border = '#D7E3DF';
const text = '#20312D';

function titleBlock(sheet, title, subtitle, endColumn) {
  sheet.showGridLines = false;
  sheet.getRange(`A1:${endColumn}1`).format.fill = dark;
  sheet.getRange('A1').values = [[title]];
  sheet.getRange('A1').format.font = { bold: true, color: '#FFFFFF', size: 20 };
  sheet.getRange(`A1:${endColumn}1`).format.rowHeight = 38;
  sheet.getRange('A2').values = [[subtitle]];
  sheet.getRange(`A2:${endColumn}2`).format.fill = pale;
  sheet.getRange(`A2:${endColumn}2`).format.font = { color: '#46655D', italic: true };
  sheet.getRange(`A2:${endColumn}2`).format.rowHeight = 25;
}

function headerStyle(range) {
  range.format.fill = green;
  range.format.font = { bold: true, color: '#FFFFFF' };
  range.format.verticalAlignment = 'center';
  range.format.wrapText = true;
  range.format.rowHeight = 32;
}

titleBlock(summary, '目录上线检查概要', `检查日期：${review.snapshotDate}`, 'D');
summary.getRange('B2').values = [[`来源核验：${research.checkedAt.slice(0, 10)}`]];
summary.getRange('A4:B13').values = [
  ['指标', '件数'], ['当前已发布周游券', published.length], ['待确认上线', review.counts.pendingApproval || 0],
  ['累计自动下线记录', offlineRows.length], ['官网精确产品页', published.filter(pass => pass.officialSourceKind === 'exact-product').length],
  ['仅有运营方总览', published.filter(pass => pass.officialSourceKind === 'operator-overview').length],
  ['未确认来源', candidates.filter(pass => !pass.officialSourceKind).length], ['销售日期待确认', candidates.filter(pass => pass.status === 'needs-review').length],
  ['本次坏链接（URL）', links.unreachable], ['本表问题券（去重）', issueRows.length],
];
headerStyle(summary.getRange('A4:B4'));
summary.getRange('A5:B13').format.borders = { preset: 'all', style: 'thin', color: border };
summary.getRange('B5:B13').format.numberFormat = '#,##0';
summary.getRange('A15:D20').values = [
  ['处理规则', '执行方式', '结果', '备注'],
  ['到期下线', '每日按销售截止日与官方结束信息检查', '自动', '不需要人工批准'],
  ['新券上线', 'ID＋销售期指纹变化时进入待确认', '人工确认后发布', '旧批准不会沿用到新销售期'],
  ['来源核验', '官网正文核对券名/运营方，并记录检索词', '分级', '无法确认的券留在问题表'],
  ['坏链处理', 'HTTP检查＋已知官方替代URL', '修复或列入表格', '机器无法访问但浏览器可访问的页面也保留提示'],
  ['公开管理页', '不提供', '安全', '审核页仅监听127.0.0.1本机地址'],
];
headerStyle(summary.getRange('A15:D15'));
summary.getRange('A16:D20').format.borders = { preset: 'all', style: 'thin', color: border };
summary.getRange('A1:D20').format.font = { name: 'Aptos', color: text };
summary.getRange('A1').format.font = { name: 'Aptos Display', bold: true, color: '#FFFFFF', size: 20 };
summary.getRange('A4:B4').format.font = { bold: true, color: '#FFFFFF' };
summary.getRange('A15:D15').format.font = { bold: true, color: '#FFFFFF' };
summary.getRange('A1:D20').format.wrapText = true;
summary.getRange('A1:D20').format.verticalAlignment = 'center';
summary.getRange('A1:A20').format.columnWidth = 27;
summary.getRange('B1:B20').format.columnWidth = 31;
summary.getRange('C1:C20').format.columnWidth = 25;
summary.getRange('D1:D20').format.columnWidth = 42;
summary.freezePanes.freezeRows(4);

titleBlock(issuesSheet, '未确定来源・坏链接・日期待确认', `共 ${issueRows.length} 张问题券；每行可按“问题类型”和“检索词”继续人工核对。`, 'N');
const issueHeaders = ['问题类型', 'ID', '券名', '运营方', '地区', '目录状态', '销售期', '截止日', '来源等级', '当前URL', 'HTTP', '检索候补URL', '已执行检索词', '核验备注'];
issuesSheet.getRange('A4:N4').values = [issueHeaders];
headerStyle(issuesSheet.getRange('A4:N4'));
if (issueRows.length) issuesSheet.getRange(`A5:N${issueRows.length + 4}`).values = issueRows;
issuesSheet.getRange(`A4:N${issueRows.length + 4}`).format.borders = { preset: 'all', style: 'thin', color: border };
issuesSheet.getRange(`A5:N${issueRows.length + 4}`).format.wrapText = true;
issuesSheet.getRange(`A5:N${issueRows.length + 4}`).format.verticalAlignment = 'top';
issuesSheet.getRange('A:A').format.columnWidth = 24;
issuesSheet.getRange('B:B').format.columnWidth = 17;
issuesSheet.getRange('C:C').format.columnWidth = 36;
issuesSheet.getRange('D:D').format.columnWidth = 26;
issuesSheet.getRange('E:F').format.columnWidth = 15;
issuesSheet.getRange('G:G').format.columnWidth = 25;
issuesSheet.getRange('H:I').format.columnWidth = 17;
issuesSheet.getRange('J:J').format.columnWidth = 48;
issuesSheet.getRange('K:K').format.columnWidth = 10;
issuesSheet.getRange('L:L').format.columnWidth = 48;
issuesSheet.getRange('M:M').format.columnWidth = 42;
issuesSheet.getRange('N:N').format.columnWidth = 58;
issuesSheet.getRange(`A5:A${issueRows.length + 4}`).conditionalFormats.add('containsText', { text: '坏链接', format: { fill: '#FCE7DF', font: { color: orange, bold: true } } });
issuesSheet.freezePanes.freezeRows(4);
issuesSheet.freezePanes.freezeColumns(2);

titleBlock(offlineSheet, '自动下线记录', `累计 ${offlineRows.length} 张；按截止日期或官方结束信息自动从公开目录移除。`, 'I');
offlineSheet.getRange('A4:I4').values = [['检查日', 'ID', '券名', '运营方', '地区', '原销售期', '结束日', '下线原因', '原来源URL']];
headerStyle(offlineSheet.getRange('A4:I4'));
if (offlineRows.length) offlineSheet.getRange(`A5:I${offlineRows.length + 4}`).values = offlineRows;
offlineSheet.getRange(`A4:I${offlineRows.length + 4}`).format.borders = { preset: 'all', style: 'thin', color: border };
offlineSheet.getRange(`A5:I${offlineRows.length + 4}`).format.wrapText = true;
offlineSheet.getRange('A:B').format.columnWidth = 18;
offlineSheet.getRange('C:C').format.columnWidth = 42;
offlineSheet.getRange('D:D').format.columnWidth = 27;
offlineSheet.getRange('E:E').format.columnWidth = 15;
offlineSheet.getRange('F:F').format.columnWidth = 26;
offlineSheet.getRange('G:H').format.columnWidth = 20;
offlineSheet.getRange('I:I').format.columnWidth = 52;
offlineSheet.freezePanes.freezeRows(4);

await fs.mkdir(previewDir, { recursive: true });
for (const [sheetName, range] of [['检查概要', 'A1:D20'], ['未确定与坏链接', 'A1:N24'], ['自动下线记录', 'A1:I12']]) {
  const preview = await workbook.render({ sheetName, range, scale: 1.2, format: 'png' });
  await fs.writeFile(`${previewDir}/${sheetName}.png`, new Uint8Array(await preview.arrayBuffer()));
}
for (const [sheetName, range] of [['检查概要', 'A1:D20'], ['未确定与坏链接', 'A1:N12'], ['自动下线记录', 'A1:I13']]) {
  const check = await workbook.inspect({ kind: 'table', range: `${sheetName}!${range}`, include: 'values,formulas', tableMaxRows: 20, tableMaxCols: 14, maxChars: 6000 });
  console.log(check.ndjson);
}
const errors = await workbook.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!', options: { useRegex: true, maxResults: 300 }, summary: 'final formula error scan' });
console.log(errors.ndjson);

await fs.mkdir(outputDir, { recursive: true });
const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputFile);
console.log(JSON.stringify({ outputFile, previewDir, issueRows: issueRows.length, offlineRows: offlineRows.length, published: published.length, syncReport }, null, 2));
