// Deploy as a Google Apps Script web app: execute as owner, accessible to anyone.
// Keep the spreadsheet itself restricted to its owner/editors.
const FEEDBACK_SHEET_ID = '1RyUBfL-IX252v2MhCtusw_r3xVZimKNv2Nh3RmC2Mgw';
const FEEDBACK_HEADERS = [
  '接收时间', '券 ID', '券名', '详情页路径', '页面语言', '问题类型', '错误说明', '参考链接', '处理状态',
];
const FEEDBACK_TYPES = ['price', 'period', 'coverage', 'eligibility', 'link', 'other'];

function safeCell(value, limit) {
  const text = String(value || '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, limit);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function feedbackPage(message) {
  return HtmlService.createHtmlOutput(
    '<!doctype html><html lang="zh"><meta charset="utf-8"><title>周游券纠错反馈</title>' +
    '<body style="font:16px/1.6 system-ui,sans-serif;max-width:34rem;margin:4rem auto;padding:1rem">' +
    '<h1>周游券纠错反馈</h1><p>' + message + '</p><p>现在可以关闭此页面。</p></body></html>'
  );
}

function doGet() {
  return feedbackPage('反馈接收入口已就绪。请从周游券详情页提交反馈。');
}

function doPost(e) {
  const fields = e && e.parameter ? e.parameter : {};
  if (fields.website) return feedbackPage('反馈已收到。');

  const passId = safeCell(fields.passId, 100);
  const passName = safeCell(fields.passName, 200);
  const pagePath = safeCell(fields.pagePath, 250);
  const locale = safeCell(fields.locale, 2);
  const issueType = safeCell(fields.issueType, 30);
  const details = safeCell(fields.details, 2000);
  const sourceUrl = safeCell(fields.sourceUrl, 500);
  if (!passId || !passName || !/^\/(zh|en|ja)\/(passlist|directory)\/[^/?#]+\/?$/.test(pagePath) ||
      !['zh', 'en', 'ja'].includes(locale) || !FEEDBACK_TYPES.includes(issueType) ||
      details.length < 10 || (sourceUrl && !/^https?:\/\//i.test(sourceUrl))) {
    return feedbackPage('反馈内容不完整或格式不正确，请返回详情页修改后重试。');
  }

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const sheet = SpreadsheetApp.openById(FEEDBACK_SHEET_ID).getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(FEEDBACK_HEADERS);
    sheet.appendRow([new Date(), passId, passName, pagePath, locale, issueType, details, sourceUrl, '待处理']);
    return feedbackPage('反馈已记录。感谢您帮助我们修正票券资料。');
  } catch (error) {
    console.error(error);
    return feedbackPage('暂时无法记录反馈，请稍后重试。');
  } finally {
    try { lock.releaseLock(); } catch (_) { /* No lock was acquired. */ }
  }
}
