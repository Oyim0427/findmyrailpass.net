import fs from 'node:fs';
import http from 'node:http';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import {
  PUBLICATION_REVIEW_FILE,
  PUBLICATION_HISTORY_FILE,
  readPublicationState,
  readSourceResearch,
  writePublicationState,
} from './lib/directory-publication.mjs';

const HOST = '127.0.0.1';
const PORT = Number(process.env.DIRECTORY_REVIEW_PORT || 4173);
const token = crypto.randomBytes(24).toString('hex');

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function renderPage(message = '') {
  const review = readJson(PUBLICATION_REVIEW_FILE, { counts: {}, pendingApproval: [], autoOffline: [] });
  const research = readSourceResearch();
  const linkHealth = readJson('reports/directory-link-health.json', { unreachable: 0, results: [] });
  const history = readJson(PUBLICATION_HISTORY_FILE, { events: [] });
  const problemSources = Object.entries(research.passes || {}).filter(([, value]) => value.status !== 'verified');
  const rows = review.pendingApproval.map(pass => `
    <tr>
      <td><input type="checkbox" name="pass" value="${escapeHtml(pass.id)}"></td>
      <td><strong>${escapeHtml(pass.name)}</strong><br><small>${escapeHtml(pass.id)}</small></td>
      <td>${escapeHtml(pass.company)}</td><td>${escapeHtml(pass.region)}</td>
      <td>${escapeHtml(pass.salesPeriod)}</td><td>${escapeHtml(pass.reviewReason)}</td>
      <td>${pass.relatedUrl ? `<a href="${escapeHtml(pass.relatedUrl)}" target="_blank" rel="noreferrer">来源</a>` : '无'}</td>
    </tr>`).join('');
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>周游券上线确认</title><style>
  :root{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#182437;background:#f4f8f7}body{margin:0}.wrap{max-width:1180px;margin:36px auto;padding:0 22px}h1{font-size:30px;margin:0 0 8px}.sub{color:#637083;margin-bottom:24px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.card{background:#fff;border:1px solid #dce6e3;border-radius:16px;padding:18px;box-shadow:0 8px 24px #16352b0d}.n{font-size:28px;font-weight:750;color:#006c54}.warning .n{color:#b4471f}section{margin-top:22px}.tablebox{overflow:auto;background:#fff;border:1px solid #dce6e3;border-radius:16px}table{border-collapse:collapse;width:100%;min-width:900px}th,td{text-align:left;padding:13px;border-bottom:1px solid #e7eeec}th{background:#eef6f3;font-size:14px}small{color:#7b8795}button{margin-top:16px;background:#006c54;color:white;border:0;border-radius:12px;padding:13px 20px;font-size:16px;font-weight:700;cursor:pointer}button:disabled{opacity:.55}.message{padding:12px 16px;border-radius:12px;background:#e5f6ef;color:#065a47;margin:16px 0}.empty{padding:28px;text-align:center;color:#637083}a{color:#006c80}@media(max-width:760px){.stats{grid-template-columns:1fr 1fr}}
  </style></head><body><main class="wrap"><h1>周游券上线确认</h1><p class="sub">仅能从本机打开。过期券自动下线；新券或销售期变化必须在这里确认。</p>
  ${message ? `<div class="message">${escapeHtml(message)}</div>` : ''}
  <div class="stats"><div class="card"><div>当前发布</div><div class="n">${review.counts.published || 0}</div></div><div class="card warning"><div>待确认上线</div><div class="n">${review.counts.pendingApproval || 0}</div></div><div class="card"><div>本次自动下线</div><div class="n">${review.counts.autoOffline || 0}</div></div><div class="card warning"><div>质量原因隐藏</div><div class="n">${review.counts.hiddenByQuality ?? (problemSources.length + (linkHealth.unreachable || 0))}</div></div></div>
  <section><h2>待确认上线</h2><form id="approval"><div class="tablebox">${rows ? `<table><thead><tr><th>选</th><th>券</th><th>运营方</th><th>地区</th><th>销售期</th><th>原因</th><th>来源</th></tr></thead><tbody>${rows}</tbody></table>` : '<div class="empty">目前没有待确认的新券或新销售期。</div>'}</div>${rows ? '<button type="submit">批准所选并更新本地网站</button>' : ''}</form></section>
  <section><h2>自动下线记录</h2><div class="tablebox">${history.events?.length ? `<table><thead><tr><th>券</th><th>运营方</th><th>截止日</th><th>原因</th></tr></thead><tbody>${history.events.slice().reverse().map(pass => `<tr><td>${escapeHtml(pass.name)}</td><td>${escapeHtml(pass.company)}</td><td>${escapeHtml(pass.endDate || '—')}</td><td>${escapeHtml(pass.reason)}</td></tr>`).join('')}</tbody></table>` : '<div class="empty">还没有自动下线记录。</div>'}</div></section>
  <script>document.querySelector('#approval')?.addEventListener('submit',async event=>{event.preventDefault();const ids=[...document.querySelectorAll('input[name=pass]:checked')].map(i=>i.value);if(!ids.length)return alert('请先选择要批准的券');const button=event.currentTarget.querySelector('button');button.disabled=true;button.textContent='正在更新…';const response=await fetch('/api/approve',{method:'POST',headers:{'content-type':'application/json','x-review-token':'${token}'},body:JSON.stringify({ids})});const result=await response.json();if(!response.ok){alert(result.error||'更新失败');button.disabled=false;button.textContent='批准所选并更新本地网站';return}location.href='/?message='+encodeURIComponent('已批准 '+result.approved+' 条，并完成本地目录更新');});</script>
  </main></body></html>`;
}

function send(res, status, body, contentType = 'text/html; charset=utf-8') {
  res.writeHead(status, { 'content-type': contentType, 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${HOST}:${PORT}`);
  if (req.method === 'GET' && url.pathname === '/') {
    send(res, 200, renderPage(url.searchParams.get('message') || ''));
    return;
  }
  if (req.method === 'POST' && url.pathname === '/api/approve') {
    if (req.headers['x-review-token'] !== token) {
      send(res, 403, JSON.stringify({ error: '无效的本机审核令牌' }), 'application/json');
      return;
    }
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 100_000) req.destroy();
    });
    req.on('end', () => {
      try {
        const requested = new Set(JSON.parse(raw).ids || []);
        const review = readJson(PUBLICATION_REVIEW_FILE, { pendingApproval: [] });
        const selected = review.pendingApproval.filter(pass => requested.has(pass.id));
        const state = readPublicationState();
        const approvedAt = new Date().toISOString();
        for (const pass of selected) {
          state.approvals[pass.id] = {
            fingerprint: pass.approvalFingerprint,
            approvedAt,
            approvedBy: 'local-admin-confirmation',
          };
        }
        writePublicationState(state);
        const sync = spawnSync(process.execPath, ['scripts/sync-biglobe-directory.mjs'], { encoding: 'utf8' });
        if (sync.status !== 0) throw new Error(sync.stderr || sync.stdout || '目录同步失败');
        send(res, 200, JSON.stringify({ approved: selected.length }), 'application/json');
      } catch (error) {
        send(res, 500, JSON.stringify({ error: error instanceof Error ? error.message : String(error) }), 'application/json');
      }
    });
    return;
  }
  send(res, 404, 'Not found', 'text/plain; charset=utf-8');
});

server.listen(PORT, HOST, () => {
  console.log(`Local directory review: http://${HOST}:${PORT}`);
  console.log('This page only listens on the local computer. Stop it with Ctrl+C.');
});
