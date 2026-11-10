/* ============================================================
   English Master · 英语五项全能学习
   纯前端实现：localStorage 数据留存 / Web Speech API 语音 / Tesseract OCR
   ============================================================ */
'use strict';

/* ---------------- 基础工具 ---------------- */
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[r[i], r[j]] = [r[j], r[i]]; } return r; };
const todayStr = (d) => { const t = d || new Date(); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
const fmtTime = ts => { if (!ts) return ''; const d = new Date(ts); return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; };

let toastTimer = null;
function toast(msg, ms) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), ms || 2200);
}

/* ---------------- 数据持久化 ---------------- */
const STORE_KEY = 'ela_state_v1';
const DEFAULT_STATE = () => ({
  settings: { pushCount: 5, pushInterval: 30, autoPush: false, levels: ['CET4', 'CET6', 'IELTS'], rate: 1, loop: 1, hideZh: false },
  words: { pushed: {}, custom: [], lastPushAt: 0 },
  listening: { done: {} },            // id -> {modes:{extensive:{score,at},intensive:{at},dictation:{best,at}}, wrong:[qIdx]}
  grammar: { done: {}, wrongByTopic: {}, wrongList: [] }, // id -> {best,at}; wrongList: {id,exIdx,at}
  speaking: { done: {}, sent: {} },   // id -> {best,at}; sent: "id:idx" -> best score
  reading: { done: {}, vocab: [] },   // id -> {best,at}; vocab: {word,zh,from,at}
  activity: { days: {} },             // 'YYYY-MM-DD' -> 操作次数
  createdAt: Date.now()
});
let S = load();
function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return DEFAULT_STATE();
    const s = JSON.parse(raw);
    const merged = Object.assign(DEFAULT_STATE(), s);
    merged.settings = Object.assign(DEFAULT_STATE().settings, s.settings || {});
    return merged;
  } catch (e) { return DEFAULT_STATE(); }
}
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* 容量满时静默 */ } }
function logActivity(n) {
  const k = todayStr();
  S.activity.days[k] = (S.activity.days[k] || 0) + (n || 1);
  save(); updateStreak();
}
function streakDays() {
  let n = 0; const d = new Date();
  // 今天未学习则从昨天起算，保持连续天数不断签显示
  if (!S.activity.days[todayStr(d)]) d.setDate(d.getDate() - 1);
  while (S.activity.days[todayStr(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function updateStreak() { const el = $('#streak-num'); if (el) el.textContent = streakDays(); }

/* ---------------- 语音合成 TTS ---------------- */
let playToken = 0, voices = [];
function loadVoices() { try { voices = speechSynthesis.getVoices() || []; } catch (e) { voices = []; } }
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function pickVoice() {
  if (!voices.length) loadVoices();
  return voices.find(v => /en[-_]US/i.test(v.lang) && /Google|Microsoft|Natural/i.test(v.name))
    || voices.find(v => /en[-_]US/i.test(v.lang))
    || voices.find(v => /^en/i.test(v.lang)) || null;
}
function speak(text, opts) {
  opts = opts || {};
  if (!('speechSynthesis' in window)) { toast('当前浏览器不支持语音合成'); return; }
  stopSpeak();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = opts.rate || S.settings.rate || 1; u.pitch = 1;
  const v = pickVoice(); if (v) u.voice = v;
  if (opts.onend) u.onend = opts.onend;
  if (opts.onerr) u.onerror = opts.onerr;
  else u.onerror = (e) => {
    const err = (e && e.error) || '';
    if (err && err !== 'interrupted' && err !== 'canceled' && err !== 'not-allowed')
      toast('语音播放失败：请检查设备音量，建议使用 Chrome/Edge/Safari 浏览器');
  };
  speechSynthesis.speak(u);
}
// 顺序朗读多句（精听/泛听整篇/磨耳朵），opts.loop: 循环次数，'inf'=无限循环
function speakSeq(items, opts) {
  opts = opts || {};
  stopSpeak();
  const token = ++playToken; let i = 0, round = 1;
  const totalRounds = opts.loop === 'inf' ? Infinity : Math.max(1, opts.loop || 1);
  const next = () => {
    if (token !== playToken) return;
    if (i >= items.length) {
      round++;
      if (round > totalRounds) { opts.onDone && opts.onDone(); return; }
      i = 0;
      if (opts.onRound) opts.onRound(round, totalRounds);
      setTimeout(next, 800); return;
    }
    opts.onIndex && opts.onIndex(i);
    const u = new SpeechSynthesisUtterance(items[i]);
    u.lang = 'en-US'; u.rate = opts.rate || S.settings.rate || 1;
    const v = pickVoice(); if (v) u.voice = v;
    u.onend = () => { if (token !== playToken) return; i++; setTimeout(next, 380); };
    u.onerror = () => { if (token !== playToken) return; i++; setTimeout(next, 250); };
    speechSynthesis.speak(u);
  };
  next();
}
function stopSpeak() { playToken++; try { speechSynthesis.cancel(); } catch (e) { } }

/* ---------------- 文本相似度（听写/口语评测） ---------------- */
function normText(t) {
  return String(t || '').toLowerCase().replace(/[^a-z0-9'\s]/g, ' ').replace(/\s+/g, ' ').trim();
}
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}
function similarity(a, b) {
  a = normText(a); b = normText(b);
  if (!a && !b) return 0;
  const dist = levenshtein(a, b);
  return Math.max(0, Math.round((1 - dist / Math.max(a.length, b.length)) * 100));
}
// 听写逐词对比
function wordDiff(target, input) {
  const tw = normText(target).split(' '), iw = normText(input).split(' ');
  return tw.map((w, i) => ({ w, ok: iw[i] === w }));
}

/* ---------------- 语音识别（口语跟读评测） ---------------- */
const SRClass = window.SpeechRecognition || window.webkitSpeechRecognition || null;
function recognizeOnce(onResult, onErr) {
  if (!SRClass) { onErr({ error: 'unsupported' }); return null; }
  try {
    const r = new SRClass();
    r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 1;
    r.onresult = e => onResult(e.results[0][0].transcript);
    r.onerror = e => onErr(e);
    r.onend = () => { };
    r.start();
    return r;
  } catch (e) { onErr({ error: 'start-failed' }); return null; }
}

/* ============================================================
   路由
   ============================================================ */
const VIEWS = {
  dashboard: { title: '学习总览', sub: '五维学习画像', render: renderDashboard },
  words: { title: '单词学习', sub: '定时推送 · 拍图识词 · 掌握度追踪', render: renderWords },
  listening: { title: '听力训练', sub: '三档分级 · 精听 / 泛听 / 听写', render: renderListening },
  grammar: { title: '语法学习', sub: '层级进阶 · 智能错题本', render: renderGrammar },
  speaking: { title: '口语练习', sub: '跟读对比 · AI 发音评测', render: renderSpeaking },
  reading: { title: '阅读训练', sub: '阶梯阅读 · 生词自动提取', render: renderReading },
  report: { title: '薄弱项报告', sub: '智能总结 · 数据洞察', render: renderReport }
};
function route() {
  stopSpeak();
  ambientPlaying = false;
  const hash = location.hash.replace('#/', '') || 'dashboard';
  const [view, param] = hash.split('/');
  const v = VIEWS[view] || VIEWS.dashboard;
  $('#view-title').textContent = v.title;
  $('#view-subtitle').textContent = v.sub;
  $$('#tabbar .tab').forEach(t => t.classList.toggle('active', t.dataset.view === view));
  v.render(param);
  window.scrollTo(0, 0);
  save();
}
window.addEventListener('hashchange', route);

/* ============================================================
   视图一：学习总览 Dashboard
   ============================================================ */
function renderDashboard() {
  const wb = window.WORD_BANK || [];
  const pushedCnt = Object.keys(S.words.pushed).length;
  const masteredCnt = Object.values(S.words.pushed).filter(w => w.result === 'known').length + S.words.custom.filter(c => c.mastered).length;
  const weakCnt = Object.values(S.words.pushed).filter(w => w.result && w.result !== 'known').length;
  const lisDone = Object.keys(S.listening.done).length;
  const graDone = Object.keys(S.grammar.done).length;
  const graAcc = grammarAccuracy();
  const spkDone = Object.keys(S.speaking.done).length;
  const rdDone = Object.keys(S.reading.done).length;
  const rdAcc = moduleAccuracy(S.reading.done);

  const donut = donutSVG(masteredCnt, Math.max(masteredCnt + weakCnt, 1), '单词掌握');
  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title">📊 今日学习</div>
      <div class="stat-grid cols3">
        <div class="stat-box"><div class="num">${(S.activity.days[todayStr()] || 0)}</div><div class="lab">今日操作</div></div>
        <div class="stat-box"><div class="num">${streakDays()}</div><div class="lab">连续天数</div></div>
        <div class="stat-box"><div class="num">${Object.keys(S.activity.days).length}</div><div class="lab">累计学习天</div></div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">📖 单词掌握度 <a class="link" href="#/words">去学习 ›</a></div>
      <div class="donut-wrap">
        ${donut}
        <div style="flex:1;min-width:150px">
          <div class="ratio-bars">
            ${ratioBar('已掌握', masteredCnt, Math.max(wb.length, 1), 'green')}
            ${ratioBar('薄弱/待巩固', weakCnt, Math.max(wb.length, 1), 'orange')}
            ${ratioBar('未推送', Math.max(wb.length - pushedCnt, 0), Math.max(wb.length, 1), '')}
          </div>
          <div class="muted mt8">词库共 ${wb.length} 词 · 已推送 ${pushedCnt} 词（严格去重）</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">📈 五维能力进度</div>
      ${ratioRowBig('📖 单词', masteredCnt, Math.max(wb.length, 1), 'green')}
      ${ratioRowBig('🎧 听力', lisDone, Math.max((window.LISTENING_BANK || []).length, 1), '')}
      ${ratioRowBig('✏️ 语法', graDone, Math.max((window.GRAMMAR_BANK || []).length, 1), 'orange')}
      ${ratioRowBig('🎤 口语', spkDone, Math.max((window.SPEAKING_BANK || []).length, 1), 'green')}
      ${ratioRowBig('📚 阅读', rdDone, Math.max((window.READING_BANK || []).length, 1), 'orange')}
    </div>

    <div class="card">
      <div class="card-title">🎯 练习正确率</div>
      <div class="stat-grid cols3">
        <div class="stat-box"><div class="num">${grammarAccuracy() == null ? '--' : grammarAccuracy() + '%'}</div><div class="lab">语法练习</div></div>
        <div class="stat-box"><div class="num">${rdAcc == null ? '--' : rdAcc + '%'}</div><div class="lab">阅读理解</div></div>
        <div class="stat-box"><div class="num">${dictationAvg() == null ? '--' : dictationAvg() + '%'}</div><div class="lab">听力听写</div></div>
      </div>
    </div>

    ${dataLibCard()}
  `;
}
function dataLibCard() {
  const ok = window.WORD_BANK_READY && window.LISTENING_BANK_READY && window.GRAMMAR_BANK_READY && window.SPEAKING_BANK_READY && window.READING_BANK_READY;
  if (ok) return '';
  return `<div class="card"><div class="muted">⚠️ 部分题库数据未加载完成，请确认 js/data-*.js 文件均存在。</div></div>`;
}
function ratioBar(label, val, total, color) {
  const pct = Math.min(100, Math.round(val / total * 100));
  return `<div class="ratio-row"><span class="nm">${esc(label)}</span><div class="pbar ${color}"><div style="width:${pct}%"></div></div><span class="val">${val}</span></div>`;
}
function ratioRowBig(label, done, total, color) {
  const pct = Math.min(100, Math.round(done / total * 100));
  return `<div class="ratio-row"><span class="nm" style="width:64px">${label}</span><div class="pbar ${color}"><div style="width:${pct}%"></div></div><span class="val">${done}/${total}</span></div>`;
}
function donutSVG(done, total, label) {
  const pct = Math.min(1, done / total);
  const R = 46, C = 2 * Math.PI * R;
  return `<div class="donut">
    <svg width="110" height="110" viewBox="0 0 110 110">
      <circle cx="55" cy="55" r="${R}" fill="none" stroke="#edf0f7" stroke-width="12"/>
      <circle cx="55" cy="55" r="${R}" fill="none" stroke="#18a058" stroke-width="12" stroke-linecap="round"
        stroke-dasharray="${(C * pct).toFixed(1)} ${C.toFixed(1)}"/>
    </svg>
    <div class="center"><b>${done}</b><span>${esc(label)}</span></div>
  </div>`;
}
function moduleAccuracy(doneMap) {
  const vals = Object.values(doneMap).filter(d => d.best != null).map(d => d.best);
  if (!vals.length) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}
function grammarAccuracy() { return moduleAccuracy(S.grammar.done); }
function dictationAvg() {
  const vals = Object.values(S.listening.done).map(d => d.modes && d.modes.dictation && d.modes.dictation.best).filter(v => v != null);
  if (!vals.length) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

/* ============================================================
   视图二：单词学习
   ============================================================ */
let ocrBusy = false;
function renderWords() {
  const st = S.settings;
  const lvChips = ['CET4', 'CET6', 'IELTS'].map(l =>
    `<span class="chip ${st.levels.includes(l) ? 'active' : ''}" data-lv="${l}">${l}</span>`).join('');
  const batch = (S.words.queue || []).map(w => w).filter(Boolean);
  const weakList = Object.entries(S.words.pushed).filter(([, v]) => v.result && v.result !== 'known');
  const masteredCnt = Object.values(S.words.pushed).filter(w => w.result === 'known').length + S.words.custom.filter(c => c.mastered).length;

  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title">⚙️ 推送设置</div>
      <label class="field"><span class="lab">选词范围（可多选，四六级 → 雅思 6-7 分）</span>
        <div class="chips" id="lv-chips">${lvChips}</div></label>
      <div style="display:flex;gap:10px">
        <label class="field" style="flex:1"><span class="lab">每次推送数量 n</span>
          <input type="number" id="set-count" min="1" max="50" value="${st.pushCount}"></label>
        <label class="field" style="flex:1"><span class="lab">定时推送间隔（分钟）</span>
          <input type="number" id="set-interval" min="1" max="720" value="${st.pushInterval}"></label>
      </div>
      <div class="btn-row">
        <button class="btn" id="btn-push-now">立即推送</button>
        <button class="btn ${st.autoPush ? 'danger' : 'success'}" id="btn-auto">${st.autoPush ? '⏹ 停止定时推送' : '▶ 启动定时推送'}</button>
      </div>
      <div class="muted mt8" id="push-status"></div>
    </div>

    <div id="words-batch-area">${batch.length ? wordBatchHTML() : `
      <div class="card"><div class="empty"><div class="icon">📭</div>
        <p>暂无待学单词<br>点击「立即推送」，系统将从未学过的词库中<br>严格去重后推送 ${st.pushCount} 个新单词</p></div></div>`}
    </div>

    <div class="card">
      <div class="card-title">🔁 薄弱词复习（待巩固 ${weakList.length} 个）</div>
      ${weakList.length ? `<p class="muted mb8">标记为「模糊 / 不认识」的单词会进入复习队列，可反复巩固直至掌握。</p>
        <button class="btn secondary block" id="btn-review">开始复习薄弱词</button>`
        : `<p class="muted">暂无薄弱词。新推送的单词标记「模糊/不认识」后会出现在这里。</p>`}
    </div>

    <div class="card">
      <div class="card-title">📥 批量导入单词</div>
      <p class="muted mb8">粘贴含单词的文章/词表文本，或导入 .txt 文件，系统自动提取单词条目、过滤常见虚词并去重，勾选确认后加入我的生词本。</p>
      <textarea id="import-text" rows="3" placeholder="粘贴英文文本，例如课文、新闻、词表……"></textarea>
      <input type="file" id="import-file" accept=".txt,text/plain" style="display:none">
      <div class="btn-row mt8">
        <button class="btn secondary" id="btn-import-parse">🔍 解析提取</button>
        <button class="btn ghost" id="btn-import-file">📄 导入 .txt 文件</button>
      </div>
      <div id="import-area" class="mt12"></div>
    </div>

    <div class="card">
      <div class="card-title">📷 拍图识别单词</div>
      <p class="muted mb8">拍摄或选择含英文单词的图片，识别后勾选确认，即可加入学习列表。</p>
      <input type="file" id="ocr-file" accept="image/*" capture="environment" style="display:none">
      <div class="btn-row">
        <button class="btn secondary" id="btn-ocr">📷 拍照 / 选图识别</button>
      </div>
      <div id="ocr-area" class="mt12"></div>
    </div>

    <div class="card">
      <div class="card-title">🗂 我的生词本（拍图/导入 · ${S.words.custom.length}）</div>
      ${S.words.custom.length ? customWordsHTML() : '<p class="muted">暂无拍图添加的生词。</p>'}
    </div>

    <div class="card">
      <div class="card-title">📊 掌握度统计</div>
      <div class="stat-grid cols3">
        <div class="stat-box"><div class="num" style="color:var(--success)">${masteredCnt}</div><div class="lab">已掌握</div></div>
        <div class="stat-box"><div class="num" style="color:var(--warn)">${weakList.length}</div><div class="lab">薄弱/待巩固</div></div>
        <div class="stat-box"><div class="num">${(window.WORD_BANK || []).length - Object.keys(S.words.pushed).length}</div><div class="lab">词库剩余未推送</div></div>
      </div>
      <details class="fold mt12"><summary>查看薄弱词清单</summary><div class="fold-body">
        ${weakList.length ? weakList.map(([w]) => `<span class="badge orange" style="margin:2px">${esc(w)}</span>`).join(' ') : '暂无'}
      </div></details>
    </div>
  `;

  // ---- 事件绑定 ----
  $$('#lv-chips .chip').forEach(c => c.onclick = () => {
    const l = c.dataset.lv;
    const i = S.settings.levels.indexOf(l);
    if (i >= 0) S.settings.levels.splice(i, 1); else S.settings.levels.push(l);
    if (!S.settings.levels.length) S.settings.levels = ['CET4'];
    c.classList.toggle('active'); save();
  });
  $('#btn-push-now').onclick = () => { pushWords(true); };
  $('#btn-auto').onclick = () => {
    S.settings.autoPush = !S.settings.autoPush;
    if (S.settings.autoPush) { S.words.lastPushAt = Date.now(); toast(`定时推送已启动：每 ${S.settings.pushInterval} 分钟推送 ${S.settings.pushCount} 个新词`); }
    else toast('定时推送已停止');
    save(); renderWords();
  };
  const reviewBtn = $('#btn-review');
  if (reviewBtn) reviewBtn.onclick = () => {
    const area = $('#words-batch-area');
    const weak = Object.entries(S.words.pushed).filter(([, v]) => v.result && v.result !== 'known');
    if (!weak.length) return;
    area.innerHTML = `<div class="section-label">🔁 薄弱词复习模式</div>` + shuffle(weak).slice(0, 10).map(([w]) => wordCardHTML(w, 'review')).join('');
    bindWordCards(area);
    window.scrollTo(0, 0);
  };
  $('#btn-ocr').onclick = () => $('#ocr-file').click();
  $('#ocr-file').onchange = e => { if (e.target.files[0]) runOCR(e.target.files[0]); };
  bindCustomWords();

  // 批量导入
  $('#btn-import-file').onclick = () => $('#import-file').click();
  $('#import-file').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => { $('#import-text').value = String(rd.result || '').slice(0, 30000); $('#btn-import-parse').click(); };
    rd.readAsText(f);
  };
  $('#btn-import-parse').onclick = renderImportPreview;

  const c = $('#set-count'), iv = $('#set-interval');
  c.onchange = () => { S.settings.pushCount = Math.max(1, Math.min(50, +c.value || 5)); c.value = S.settings.pushCount; save(); };
  iv.onchange = () => { S.settings.pushInterval = Math.max(1, Math.min(720, +iv.value || 30)); iv.value = S.settings.pushInterval; save(); };
  updatePushStatus();
}
function updatePushStatus() {
  const el = $('#push-status'); if (!el) return;
  el.textContent = S.settings.autoPush
    ? `✅ 定时推送运行中 · 上次推送：${S.words.lastPushAt ? fmtTime(S.words.lastPushAt) : '尚未推送'}`
    : '定时推送未启动，可点击「立即推送」手动获取新词。';
}
function pushWords(manual) {
  const n = S.settings.pushCount;
  const pool = (window.WORD_BANK || []).filter(w => S.settings.levels.includes(w.level) && !S.words.pushed[w.word]);
  if (!pool.length) {
    toast('🎉 当前选词范围已全部推送完毕！可切换难度范围或进入「薄弱词复习」'); return;
  }
  const picked = shuffle(pool).slice(0, Math.min(n, pool.length));
  picked.forEach(w => { S.words.pushed[w.word] = { at: Date.now(), level: w.level, result: null, times: 0 }; });
  S.words.queue = picked.map(w => w.word);
  S.words.lastPushAt = Date.now();
  save(); logActivity();
  if (manual) { renderWords(); toast(`已推送 ${picked.length} 个新单词（严格去重）`); window.scrollTo(0, 0); }
  else {
    toast(`📢 定时任务已推送 ${picked.length} 个新单词！`);
    if (location.hash.startsWith('#/words')) renderWords();
  }
}
// 定时推送 tick（每 20 秒检查一次）
setInterval(() => {
  if (!S.settings.autoPush) return;
  if (Date.now() - (S.words.lastPushAt || 0) >= S.settings.pushInterval * 60000) pushWords(false);
}, 20000);

function wordBatchHTML() {
  return `<div class="section-label">📬 本次推送（${S.words.queue.length} 词）</div>` +
    S.words.queue.map(w => wordCardHTML(w, 'batch')).join('') +
    `<button class="btn ghost block mb8" onclick="finishBatch()">学完本组，清空推送队列</button>`;
}
function finishBatch() { S.words.queue = []; save(); renderWords(); toast('本组学习完成 ✅'); }
window.finishBatch = finishBatch;

function wordCardHTML(word, ctx) {
  const item = (window.WORD_BANK || []).find(w => w.word === word);
  if (!item) return '';
  const rec = S.words.pushed[word] || {};
  return `<div class="word-card" data-word="${esc(word)}" data-ctx="${ctx}">
    <div class="word-head">
      <span class="w">${esc(item.word)}</span>
      <span class="pos">${esc(item.pos)}</span>
      <span class="badge ${item.level === 'CET4' ? 'green' : item.level === 'CET6' ? 'blue' : 'orange'}">${item.level}</span>
      <span style="flex:1"></span>
      <button class="speak-btn" data-speak-all="${esc(item.word)}" title="朗读单词和全部例句">▶</button>
      <button class="speak-btn" data-speak="${esc(item.word)}" data-accent="uk" title="英式发音">🇬🇧</button>
      <button class="speak-btn" data-speak="${esc(item.word)}" data-accent="us" title="美式发音">🇺🇸</button>
    </div>
    <div class="phon">英 ${esc(item.uk)} ｜ 美 ${esc(item.us)}</div>
    <div class="defs"><div class="zh-def">${esc(item.zh)}</div><div class="muted">${esc(item.en)}</div></div>
    <div class="section-label" style="margin:10px 0 6px">真实场景例句</div>
    ${item.examples.map((ex, i) => `<div class="example">
      <div class="en">${i + 1}. ${esc(ex.en)} <button class="speak-btn" style="width:24px;height:24px;font-size:11px;vertical-align:middle" data-speak="${esc(ex.en)}" data-accent="us">🔊</button></div>
      <div class="zh">${esc(ex.zh)}</div></div>`).join('')}
    <div class="memory-tip">💡 <b>${esc(item.memory.type)}记忆</b>：${esc(item.memory.text)}</div>
    ${(item.forms || item.syn || item.ant || item.collocs) ? `<details class="fold mt8"><summary>🔗 关联知识点（延伸形态 / 近义 / 反义 / 搭配）</summary><div class="fold-body">
      ${item.forms && item.forms.length ? `<p class="mb8"><b>延伸形态：</b>${item.forms.map(esc).join('；')}</p>` : ''}
      ${item.syn && item.syn.length ? `<p class="mb8"><b>近义词：</b>${item.syn.map(s => `<span class="badge blue" style="margin:2px">${esc(s)}</span>`).join(' ')}</p>` : ''}
      ${item.ant && item.ant.length ? `<p class="mb8"><b>反义词：</b>${item.ant.map(s => `<span class="badge red" style="margin:2px">${esc(s)}</span>`).join(' ')}</p>` : ''}
      ${item.collocs && item.collocs.length ? `<p class="mb8"><b>常用搭配：</b>${item.collocs.map(c => `<span class="badge green" style="margin:2px">${esc(c)}</span>`).join(' ')}</p>` : ''}
    </div></details>` : ''}
    <div class="word-actions">
      <button class="btn success" data-mark="known">${ctx === 'review' ? '✅ 已掌握' : '😊 认识'}</button>
      <button class="btn warn" data-mark="fuzzy">🤔 模糊</button>
      <button class="btn danger" data-mark="unknown">❌ 不认识</button>
    </div>
  </div>`;
}
function bindWordCards(scope) {
  $$('[data-speak]', scope).forEach(b => b.onclick = () => {
    const text = b.dataset.speak;
    if (b.dataset.accent === 'uk') speakUK(text); else speak(text);
  });
  $$('[data-speak-all]', scope).forEach(b => b.onclick = () => {
    const item = (window.WORD_BANK || []).find(w => w.word === b.dataset.speakAll);
    if (!item) return;
    speak(item.word + '. ' + item.examples.map(e => e.en).join(' '), { rate: 0.95 });
  });
  $$('[data-mark]', scope).forEach(b => b.onclick = () => {
    const card = b.closest('.word-card');
    const word = card.dataset.word, ctx = card.dataset.ctx, mark = b.dataset.mark;
    if (!S.words.pushed[word]) S.words.pushed[word] = { at: Date.now(), level: '', result: null, times: 0 };
    const rec = S.words.pushed[word];
    rec.result = mark; rec.times = (rec.times || 0) + 1;
    if (mark === 'known') { rec.masteredAt = Date.now(); }
    save(); logActivity();
    card.style.opacity = '.45';
    card.querySelector('.word-actions').innerHTML = mark === 'known'
      ? '<span class="badge green">已掌握 🎉</span>'
      : `<span class="badge orange">${mark === 'fuzzy' ? '已加入待巩固' : '已加入薄弱清单'}</span>`;
    if (ctx === 'batch') {
      S.words.queue = S.words.queue.filter(w => w !== word); save();
    }
    toast(mark === 'known' ? `「${word}」已标记掌握` : `「${word}」已进入复习队列`);
  });
}
// 英式发音：优先选择 en-GB 音色
function speakUK(text) {
  if (!('speechSynthesis' in window)) return toast('当前浏览器不支持语音合成');
  stopSpeak();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB'; u.rate = S.settings.rate || 1;
  if (!voices.length) loadVoices();
  const v = voices.find(v => /en[-_]GB/i.test(v.lang)) || pickVoice();
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

function customWordsHTML() {
  return S.words.custom.map((c, i) => {
    const bankItem = (window.WORD_BANK || []).find(w => w.word.toLowerCase() === c.word.toLowerCase());
    return `<div class="ocr-result-word" data-i="${i}">
      <b style="min-width:90px">${esc(c.word)}</b>
      ${c.mastered ? '<span class="badge green">已掌握</span>'
        : bankItem ? `<span class="badge blue">${bankItem.level}</span> <span class="muted" style="flex:1">${esc(bankItem.zh)}</span>`
          : '<span class="muted" style="flex:1">自定义生词</span>'}
      ${c.mastered ? '' : `<button class="btn sm success" data-custom-master="${i}">掌握</button>`}
      <button class="btn sm ghost" data-custom-del="${i}">删除</button>
    </div>`;
  }).join('');
}
function bindCustomWords() {
  $$('[data-custom-master]').forEach(b => b.onclick = () => {
    S.words.custom[+b.dataset.customMaster].mastered = true; save(); logActivity(); renderWords();
  });
  $$('[data-custom-del]').forEach(b => b.onclick = () => {
    S.words.custom.splice(+b.dataset.customDel, 1); save(); renderWords();
  });
}

/* ---------------- 批量导入：解析预览 + 确认加入 ---------------- */
function renderImportPreview() {
  const area = $('#import-area');
  const raw = $('#import-text').value;
  const words = extractWords(raw).slice(0, 100);
  if (!words.length) { area.innerHTML = '<p class="muted">未从文本中提取到有效单词条目，请检查内容。</p>'; return; }
  area.innerHTML = `<p class="muted mb8">共提取 <b>${words.length}</b> 个候选单词（已过滤虚词并去重），确认要导入的词条：</p>` +
    words.map(w => {
      const dup = S.words.custom.some(c => c.word === w) || !!S.words.pushed[w];
      const inBank = (window.WORD_BANK || []).some(b => b.word.toLowerCase() === w);
      return `<div class="ocr-result-word">
        <input type="checkbox" ${dup ? '' : 'checked'} data-imp-w="${esc(w)}" ${dup ? 'disabled' : ''}>
        <b>${esc(w)}</b>
        ${dup ? '<span class="badge gray">已在学习列表（自动去重）</span>' : inBank ? '<span class="badge blue">词库命中</span>' : '<span class="badge orange">新词</span>'}
      </div>`;
    }).join('') +
    `<div class="btn-row mt8"><button class="btn" id="import-confirm">✅ 确认导入生词本</button></div>`;
  $('#import-confirm', area).onclick = () => {
    const sel = $$('input[data-imp-w]:checked', area).map(cb => cb.dataset.impW);
    if (!sel.length) return toast('请先勾选要导入的单词');
    const before = S.words.custom.length;
    sel.forEach(w => { if (!S.words.custom.some(c => c.word === w)) S.words.custom.push({ word: w, at: Date.now(), mastered: false, from: '导入' }); });
    save(); logActivity();
    toast(`已导入 ${S.words.custom.length - before} 个生词（重复项已自动跳过）`);
    renderWords();
  };
}

/* ---------------- 拍图识词 OCR（Tesseract.js 懒加载） ---------------- */
const STOPWORDS = new Set(['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'any', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'man', 'men', 'put', 'say', 'she', 'too', 'use', 'that', 'this', 'with', 'from', 'they', 'have', 'will', 'been', 'were', 'their', 'would', 'there', 'what', 'about', 'which', 'when', 'your', 'said', 'each', 'over', 'into', 'them', 'then', 'than', 'some', 'time', 'very', 'when', 'come', 'here', 'just', 'like', 'make', 'many', 'more', 'only', 'such', 'take', 'also', 'back', 'after', 'because', 'before', 'could', 'other', 'people', 'these', 'those', 'where', 'which', 'while', 'being', 'every', 'first', 'great', 'group', 'house', 'large', 'little', 'point', 'right', 'small', 'still', 'under', 'water', 'world', 'years', 'years']);
// 从任意英文文本中提取候选单词条目（去重 + 停用词过滤）
function extractWords(text) {
  return [...new Set((String(text || '').match(/[a-zA-Z][a-zA-Z'-]{2,}/g) || []).map(w => w.toLowerCase()))]
    .filter(w => !STOPWORDS.has(w));
}
function loadTesseract() {
  return new Promise((res, rej) => {
    if (window.Tesseract) return res();
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
    s.onload = res; s.onerror = () => rej(new Error('OCR 引擎加载失败，请检查网络'));
    document.head.appendChild(s);
  });
}
async function runOCR(file) {
  const area = $('#ocr-area');
  if (ocrBusy) return;
  ocrBusy = true;
  area.innerHTML = '<p class="muted">⏳ 正在加载识别引擎并识别图片，首次使用需数秒……</p>';
  try {
    await loadTesseract();
    const imgUrl = await new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(file); });
    const ret = await Tesseract.recognize(imgUrl, 'eng');
    const text = ret.data.text || '';
    const words = extractWords(text).slice(0, 30);
    if (!words.length) { area.innerHTML = '<p class="muted">未识别到英文单词，请换一张更清晰的图片重试。</p>'; return; }
    area.innerHTML = `<p class="muted mb8">识别到 ${words.length} 个候选单词，勾选后确认加入：</p>` +
      words.map((w, i) => {
        const inBank = (window.WORD_BANK || []).some(b => b.word.toLowerCase() === w);
        const dup = S.words.custom.some(c => c.word === w) || !!S.words.pushed[w];
        return `<div class="ocr-result-word">
          <input type="checkbox" checked data-ocr-w="${esc(w)}" ${dup ? 'disabled' : ''}>
          <b>${esc(w)}</b>
          ${dup ? '<span class="badge gray">已在学习列表（自动去重）</span>' : inBank ? '<span class="badge blue">词库命中</span>' : ''}
        </div>`;
      }).join('') +
      `<div class="btn-row mt8"><button class="btn" id="ocr-confirm">✅ 确认加入学习列表</button></div>`;
    $('#ocr-confirm', area).onclick = () => {
      const sel = $$('input[data-ocr-w]:checked', area).map(cb => cb.dataset.ocrW);
      if (!sel.length) return toast('请先勾选单词');
      const before = S.words.custom.length;
      sel.forEach(w => { if (!S.words.custom.some(c => c.word === w)) S.words.custom.push({ word: w, at: Date.now(), mastered: false }); });
      save(); logActivity(); toast(`已加入 ${S.words.custom.length - before} 个生词（已自动去重）`);
      renderWords();
    };
  } catch (e) {
    area.innerHTML = `<p class="muted">❌ ${esc(e.message || '识别失败，请重试')}</p>`;
  } finally { ocrBusy = false; }
}

/* ============================================================
   视图三：听力训练
   ============================================================ */
let lisFilter = { level: 0, scene: '' }; // 0=全部
let ambientPlaying = false;
function updateMediaSession(title) {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({ title: title || '磨耳朵播放中', artist: 'English Master', album: '英语听力磨耳朵' });
    navigator.mediaSession.setActionHandler('stop', () => stopAmbient());
  } catch (e) { }
}
function startAmbient(items) {
  if (!items || !items.length) return toast('当前筛选条件下没有素材');
  const lines = [];
  items.forEach(it => it.lines.forEach(l => lines.push(l.en)));
  ambientPlaying = true;
  speakSeq(lines, {
    rate: S.settings.rate || 1, loop: S.settings.loop === 1 ? 'inf' : S.settings.loop,
    onIndex: i => updateMediaSession(`磨耳朵中 · ${items.length} 篇素材连播`),
    onDone: () => { ambientPlaying = false; toast('本轮磨耳朵播放结束'); renderListening(); }
  });
  toast(`🌙 磨耳朵开始：${items.length} 篇连播 × ${S.settings.loop === 1 ? '无限' : S.settings.loop} 轮（切页不停播）`);
  renderListening();
}
function stopAmbient() { stopSpeak(); ambientPlaying = false; renderListening(); }
function renderListening() {
  const bank = window.LISTENING_BANK || [];
  const lvChips = [0, 1, 2, 3].map(l => `<span class="chip ${lisFilter.level === l ? 'active' : ''}" data-lis-lv="${l}">${l === 0 ? '全部难度' : ['/', 'L1 基础', 'L2 进阶', 'L3 高阶'][l]}</span>`).join('');
  const scChips = ['', '日常对话', '学术场景', '新闻播报'].map(s => `<span class="chip ${lisFilter.scene === s ? 'active' : ''}" data-lis-sc="${s}">${s || '全部场景'}</span>`).join('');
  const items = bank.filter(it =>
    (!lisFilter.level || it.level === lisFilter.level) && (!lisFilter.scene || it.scene === lisFilter.scene));
  const doneIds = Object.keys(S.listening.done);
  const sorted = items.slice().sort((a, b) => (doneIds.includes(a.id) ? 1 : 0) - (doneIds.includes(b.id) ? 1 : 0));

  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title">🎚 难度与场景筛选</div>
      <div class="chips mb8">${lvChips}</div>
      <div class="chips">${scChips}</div>
      <div class="hr"></div>
      <div class="card-title">🔁 循环播放设置</div>
      <div class="chips mb8">${[1, 3, 5, 'inf'].map(n => `<span class="chip ${S.settings.loop == n ? 'active' : ''}" data-lis-loop="${n}">${n === 'inf' ? '∞ 无限循环' : '循环 ' + n + ' 次'}</span>`).join('')}</div>
      <div class="btn-row">
        <button class="btn ${ambientPlaying ? 'danger' : 'success'}" id="btn-ambient">${ambientPlaying ? '⏹ 停止磨耳朵' : '🌙 磨耳朵模式（连播当前筛选素材）'}</button>
      </div>
      <p class="muted mt8">💡 磨耳朵模式按上方循环次数持续播放并显示系统媒体通知（MediaSession）；注意：部分手机浏览器锁屏后会暂停页面语音，建议保持屏幕常亮使用。</p>
      <p class="muted">已完成内容自动排到列表底部（学习避重）。</p>
    </div>
    ${sorted.length ? sorted.map(it => {
      const d = S.listening.done[it.id];
      return `<div class="card">
        <div class="card-title">${esc(it.title)}
          ${d ? '<span class="badge green">已学</span>' : '<span class="badge blue">未学</span>'}</div>
        <p class="muted mb8">L${it.level} · ${esc(it.scene)} · ${it.lines.length} 句 · ${esc(it.intro)}</p>
        ${d && d.modes ? `<p class="muted mb8">听写最佳：${d.modes.dictation ? d.modes.dictation.best + '%' : '--'} ｜ 理解题：${d.extensiveScore != null ? d.extensiveScore + '%' : '--'}</p>` : ''}
        <div class="btn-row">
          <button class="btn sm secondary" data-lis-mode="intensive" data-id="${it.id}">🎧 精听</button>
          <button class="btn sm secondary" data-lis-mode="extensive" data-id="${it.id}">📻 泛听+理解题</button>
          <button class="btn sm" data-lis-mode="dictation" data-id="${it.id}">✍️ 听写</button>
        </div>
      </div>`;
    }).join('') : '<div class="card"><div class="empty"><div class="icon">🎧</div><p>该筛选条件下暂无素材</p></div></div>'}
  `;
  $$('[data-lis-lv]').forEach(c => c.onclick = () => { lisFilter.level = +c.dataset.lisLv; renderListening(); });
  $$('[data-lis-sc]').forEach(c => c.onclick = () => { lisFilter.scene = c.dataset.lisSc; renderListening(); });
  $$('[data-lis-loop]').forEach(c => c.onclick = () => {
    const v = c.dataset.lisLoop;
    S.settings.loop = v === 'inf' ? 'inf' : +v; save(); renderListening();
    toast(`循环播放已设为：${v === 'inf' ? '无限循环' : '循环 ' + v + ' 次'}`);
  });
  const ambBtn = $('#btn-ambient');
  if (ambBtn) ambBtn.onclick = () => ambientPlaying ? stopAmbient() : startAmbient(sorted);
  $$('[data-lis-mode]').forEach(b => b.onclick = () => {
    const item = bank.find(x => x.id === b.dataset.id);
    if (b.dataset.lisMode === 'intensive') listeningIntensive(item);
    else if (b.dataset.lisMode === 'extensive') listeningExtensive(item);
    else listeningDictation(item);
  });
}

// —— 精听：逐句播放 + 译文 ——
function listeningIntensive(item) {
  let idx = 0, hideZh = false, rate = 0.9;
  const render = () => {
    $('#main').innerHTML = `
      <div class="card">
        <div class="card-title"><a class="link" href="#/listening">‹ 返回列表</a> <span>🎧 精听 · ${esc(item.title)}</span></div>
        <p class="muted mb8">L${item.level} · ${esc(item.scene)} ｜ 点击句子可单独重播；整篇播放按钮可连续精听。</p>
        <div class="btn-row mb8">
          <button class="btn sm secondary" id="lis-play-all">▶ 从当前句连播</button>
          <button class="btn sm ghost" id="lis-stop">⏹ 停止</button>
          <button class="btn sm ghost" id="lis-zh">${hideZh ? '显示译文' : '隐藏译文'}</button>
          <button class="btn sm ghost" id="lis-rate">语速 ${rate}x</button>
        </div>
        <div id="lis-lines">${item.lines.map((l, i) => `
          <div class="transcript-line ${hideZh ? 'hide-zh' : ''} ${i === idx ? 'playing' : ''}" data-lis-line="${i}">
            <span class="sp">${esc(l.speaker)}</span>${esc(l.en)}
            <span class="zh">${esc(l.zh)}</span>
          </div>`).join('')}</div>
        <div class="btn-row mt12">
          <button class="btn ghost" id="lis-prev" ${idx === 0 ? 'disabled' : ''}>‹ 上一句</button>
          <button class="btn secondary" id="lis-replay">🔁 重播本句</button>
          <button class="btn" id="lis-next">${idx === item.lines.length - 1 ? '完成精听 ✔' : '下一句 ›'}</button>
        </div>
      </div>`;
    $$('#lis-lines .transcript-line').forEach(el => el.onclick = () => { idx = +el.dataset.lisLine; render(); speak(item.lines[idx].en, { rate }); });
    $('#lis-play-all').onclick = () => {
      const rest = item.lines.slice(idx).map(l => l.en);
      speakSeq(rest, { rate, loop: S.settings.loop || 1, onIndex: i => { idx = idx; highlightLine(idx + i); } });
    };
    $('#lis-stop').onclick = stopSpeak;
    $('#lis-zh').onclick = () => { hideZh = !hideZh; render(); };
    $('#lis-rate').onclick = () => { rate = rate === 1 ? 0.8 : rate === 0.8 ? 0.9 : 1; render(); };
    $('#lis-prev').onclick = () => { if (idx > 0) { idx--; render(); speak(item.lines[idx].en, { rate }); } };
    $('#lis-replay').onclick = () => speak(item.lines[idx].en, { rate });
    $('#lis-next').onclick = () => {
      if (idx === item.lines.length - 1) {
        const d = S.listening.done[item.id] || { modes: {} };
        d.modes = d.modes || {}; d.modes.intensive = { at: Date.now() };
        S.listening.done[item.id] = d; save(); logActivity();
        toast('精听完成 ✅ 已记录学习进度'); renderListening();
      } else { idx++; render(); speak(item.lines[idx].en, { rate }); }
    };
  };
  render();
  speak(item.lines[idx].en, { rate });
  function highlightLine(i) {
    $$('#lis-lines .transcript-line').forEach((el, j) => el.classList.toggle('playing', j === i));
  }
}

// —— 泛听：整篇播放 → 理解题 ——
function listeningExtensive(item) {
  let phase = 'play';
  const render = () => {
    if (phase === 'play') {
      $('#main').innerHTML = `
        <div class="card">
          <div class="card-title"><a class="link" href="#/listening">‹ 返回列表</a> <span>📻 泛听 · ${esc(item.title)}</span></div>
          <p class="muted mb8">先盲听全文（建议不看字幕），播放结束后进入理解题检测。</p>
          <div class="btn-row mb8">
            <button class="btn" id="lis-play">▶ 播放全文</button>
            <button class="btn ghost" id="lis-stop">⏹ 停止</button>
          </div>
          <details class="fold"><summary>听完后再看原文（点击展开）</summary><div class="fold-body">
            ${item.lines.map(l => `<div class="transcript-line"><span class="sp">${esc(l.speaker)}</span>${esc(l.en)}<span class="zh">${esc(l.zh)}</span></div>`).join('')}
          </div></details>
          <button class="btn block mt12" id="lis-go-quiz">进入理解题检测 →</button>
        </div>`;
      $('#lis-play').onclick = () => speakSeq(item.lines.map(l => l.en), { rate: 1, loop: S.settings.loop || 1 });
      $('#lis-stop').onclick = stopSpeak;
      $('#lis-go-quiz').onclick = () => { stopSpeak(); phase = 'quiz'; render(); };
    } else {
      startQuiz({
        title: `泛听理解 · ${item.title}`,
        questions: item.questions,
        onFinish: (score, total) => {
          const d = S.listening.done[item.id] || { modes: {} };
          d.modes = d.modes || {};
          d.extensiveScore = Math.round(score / total * 100);
          d.wrong = item.questions.map((q, i) => (quizWrongIdx.has(i) ? i : null)).filter(v => v != null);
          S.listening.done[item.id] = d; save(); logActivity();
        },
        onExit: () => renderListening()
      });
    }
  };
  render();
}

// —— 听写：逐句输入检测 ——
function listeningDictation(item) {
  let idx = 0, results = [];
  const render = () => {
    const line = item.lines[idx];
    $('#main').innerHTML = `
      <div class="card">
        <div class="card-title"><a class="link" href="#/listening">‹ 返回列表</a> <span>✍️ 听写 · ${esc(item.title)}</span></div>
        <p class="muted mb8">第 ${idx + 1} / ${item.lines.length} 句 · 点击播放听写原文，标点不计分。</p>
        <div class="btn-row mb8">
          <button class="btn secondary" id="dic-play">🔊 播放本句</button>
          <button class="btn ghost" id="dic-slow">🐢 慢速播放</button>
        </div>
        <input type="text" id="dic-input" placeholder="输入你听到的句子…" autocomplete="off">
        <div id="dic-feedback" class="mt12"></div>
        <div class="btn-row mt12">
          <button class="btn" id="dic-check">检查</button>
          <button class="btn ghost" id="dic-next" disabled>${idx === item.lines.length - 1 ? '完成听写 ✔' : '下一句 ›'}</button>
        </div>
      </div>`;
    const input = $('#dic-input');
    $('#dic-play').onclick = () => speak(line.en);
    $('#dic-slow').onclick = () => speak(line.en, { rate: 0.7 });
    input.focus();
    input.onkeydown = e => { if (e.key === 'Enter') $('#dic-check').click(); };
    $('#dic-check').onclick = () => {
      const val = input.value;
      if (!val.trim()) return toast('请先输入听写内容');
      const sim = similarity(line.en, val);
      const diff = wordDiff(line.en, val);
      stopSpeak();
      $('#dic-feedback').innerHTML = `
        <div class="explain-box ${sim >= 80 ? 'ok' : 'bad'}">
          <b>得分：${sim}%</b><br>
          <div class="mt8">${diff.map(d => `<span style="${d.ok ? 'color:var(--success)' : 'color:var(--danger);text-decoration:underline'}">${esc(d.w)}</span>`).join(' ')}</div>
          <div class="mt8 muted">原文：${esc(line.en)}</div>
          <div class="muted">译文：${esc(line.zh)}</div>
        </div>`;
      results[idx] = sim;
      $('#dic-check').disabled = true; input.disabled = true;
      $('#dic-next').disabled = false;
    };
    $('#dic-next').onclick = () => {
      if (idx === item.lines.length - 1) {
        const valid = results.filter(v => v != null);
        const best = valid.length ? Math.round(valid.reduce((a, b) => a + b, 0) / valid.length) : 0;
        const d = S.listening.done[item.id] || { modes: {} };
        d.modes = d.modes || {};
        const prevBest = d.modes.dictation ? d.modes.dictation.best : 0;
        d.modes.dictation = { best: Math.max(best, prevBest), at: Date.now() };
        S.listening.done[item.id] = d; save(); logActivity();
        toast(`听写完成！平均得分 ${best}%`); renderListening();
      } else { idx++; render(); }
    };
  };
  render();
}

/* ---------------- 通用测验引擎（听力理解/语法/阅读复用） ---------------- */
let quizWrongIdx = new Set();
function startQuiz(cfg) {
  let qi = 0; quizWrongIdx = new Set();
  const renderQ = () => {
    const q = cfg.questions[qi];
    $('#main').innerHTML = `
      <div class="card">
        <div class="card-title">${esc(cfg.title)} <span class="badge blue">${qi + 1} / ${cfg.questions.length}</span></div>
        <div class="quiz-q">${esc(q.q)}</div>
        <div id="quiz-opts">${q.options.map((o, i) => `<button class="option" data-opt="${i}">${'ABCD'[i]}. ${esc(o)}</button>`).join('')}</div>
        <div id="quiz-explain"></div>
        <div class="btn-row mt12"><button class="btn" id="quiz-next" disabled>${qi === cfg.questions.length - 1 ? '查看结果 ✔' : '下一题 ›'}</button></div>
      </div>`;
    $$('#quiz-opts .option').forEach(b => b.onclick = () => {
      const pick = +b.dataset.opt;
      const correct = pick === q.answer;
      $$('#quiz-opts .option').forEach((x, i) => {
        x.disabled = true;
        if (i === q.answer) x.classList.add('correct');
        else if (i === pick) x.classList.add('wrong');
      });
      if (!correct) quizWrongIdx.add(qi);
      $('#quiz-explain').innerHTML = `<div class="explain-box ${correct ? 'ok' : 'bad'}">${correct ? '✅ 回答正确！' : '❌ 正确答案：' + 'ABCD'[q.answer] + '. ' + esc(q.options[q.answer])}<br>${esc(q.explain)}</div>`;
      $('#quiz-next').disabled = false;
    });
    $('#quiz-next').onclick = () => {
      if (qi === cfg.questions.length - 1) {
        const score = cfg.questions.length - quizWrongIdx.size;
        cfg.onFinish && cfg.onFinish(score, cfg.questions.length);
        renderResult();
      } else { qi++; renderQ(); }
    };
  };
  const renderResult = () => {
    const score = cfg.questions.length - quizWrongIdx.size;
    const pct = Math.round(score / cfg.questions.length * 100);
    $('#main').innerHTML = `
      <div class="card"><div class="empty">
        <div class="icon">${pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📖'}</div>
        <p><b style="font-size:18px">得分 ${score} / ${cfg.questions.length}（${pct}%）</b><br><br>
        ${pct >= 80 ? '掌握得很好，本内容将进入「已学习」列表，不再重复推送！' : '已记录错题，薄弱点将汇入你的薄弱项报告。'}</p>
      </div></div>
      <div class="btn-row"><button class="btn block" id="quiz-done">完 成</button></div>`;
    $('#quiz-done').onclick = () => cfg.onExit && cfg.onExit();
    logActivity();
  };
  renderQ();
}

/* ============================================================
   视图四：语法学习
   ============================================================ */
let graFilter = 0;
function renderGrammar() {
  const bank = window.GRAMMAR_BANK || [];
  const lvChips = [0, 1, 2, 3].map(l => `<span class="chip ${graFilter === l ? 'active' : ''}" data-gra-lv="${l}">${l === 0 ? '全部' : ['/', 'L1 基础', 'L2 进阶', 'L3 高阶'][l]}</span>`).join('');
  const items = bank.filter(g => !graFilter || g.level === graFilter);
  const doneIds = Object.keys(S.grammar.done);
  const sorted = items.slice().sort((a, b) => (doneIds.includes(a.id) ? 1 : 0) - (doneIds.includes(b.id) ? 1 : 0));
  const wrongCnt = S.grammar.wrongList.length;

  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title">📚 知识点层级（由基础到高阶）</div>
      <div class="chips">${lvChips}</div>
      <p class="muted mt8">已掌握知识点自动置底（避重）；错题自动归档到对应知识点。</p>
    </div>
    ${wrongCnt ? `<div class="card">
      <div class="card-title">📕 错题本 <span class="badge red">${wrongCnt} 题</span></div>
      ${grammarWrongHTML()}
    </div>` : ''}
    ${sorted.map(g => {
      const d = S.grammar.done[g.id];
      const topicErr = S.grammar.wrongByTopic[g.topic] || 0;
      return `<div class="card">
        <div class="card-title">${esc(g.title)}
          ${d ? `<span class="badge ${d.best >= 75 ? 'green' : 'orange'}">已练 ${d.best}%</span>` : '<span class="badge blue">未学</span>'}
        </div>
        <p class="muted mb8">L${g.level} · ${esc(g.topic)} ${topicErr ? `· <span style="color:var(--danger)">错题 ${topicErr} 次（薄弱）</span>` : ''}</p>
        <details class="fold"><summary>📖 学习讲解</summary><div class="fold-body">
          <p>${esc(g.explanation)}</p>
          ${g.examples.map(ex => `<div class="example"><div class="en">${esc(ex.en)}</div><div class="zh">${esc(ex.zh)}</div></div>`).join('')}
        </div></details>
        <div class="btn-row mt8"><button class="btn sm" data-gra-quiz="${g.id}">✏️ 开始练习（${g.exercises.length} 题）</button></div>
      </div>`;
    }).join('')}
  `;
  $$('[data-gra-lv]').forEach(c => c.onclick = () => { graFilter = +c.dataset.graLv; renderGrammar(); });
  $$('[data-gra-quiz]').forEach(b => b.onclick = () => grammarQuiz(b.dataset.graQuiz));
  bindGrammarWrong();
}
function grammarWrongHTML() {
  const bank = window.GRAMMAR_BANK || [];
  const list = S.grammar.wrongList.slice(-30).reverse();
  return list.map(wr => {
    const g = bank.find(x => x.id === wr.id); if (!g) return '';
    const ex = g.exercises[wr.exIdx]; if (!ex) return '';
    return `<details class="fold"><summary>${esc(g.title)} · ${esc(ex.q.slice(0, 26))}…<span class="badge orange">${esc(g.topic)}</span></summary>
      <div class="fold-body">
        <div class="quiz-q">${esc(ex.q)}</div>
        <p class="muted">正确答案：${'ABCD'[ex.answer]}. ${esc(ex.options[ex.answer])}</p>
        <div class="explain-box mt8">${esc(ex.explain)}</div>
      </div></details>`;
  }).join('');
}
function bindGrammarWrong() { /* 折叠面板原生交互，无需额外绑定 */ }
function grammarQuiz(id) {
  const g = (window.GRAMMAR_BANK || []).find(x => x.id === id); if (!g) return;
  startQuiz({
    title: `语法练习 · ${g.title}`,
    questions: g.exercises.map(ex => ({ q: ex.q, options: ex.options, answer: ex.answer, explain: ex.explain })),
    onFinish: (score, total) => {
      const pct = Math.round(score / total * 100);
      const d = S.grammar.done[id] || {};
      d.best = Math.max(d.best || 0, pct); d.at = Date.now();
      S.grammar.done[id] = d;
      g.exercises.forEach((ex, i) => {
        if (quizWrongIdx.has(i)) {
          S.grammar.wrongByTopic[g.topic] = (S.grammar.wrongByTopic[g.topic] || 0) + 1;
          const key = id + ':' + i;
          if (!S.grammar.wrongList.some(w => w.id === id && w.exIdx === i)) {
            S.grammar.wrongList.push({ id, exIdx: i, at: Date.now() });
          }
        }
      });
      save(); logActivity();
    },
    onExit: () => renderGrammar()
  });
}

/* ============================================================
   视图五：口语练习
   ============================================================ */
let spkFilter = { level: 0, scene: '' };
function renderSpeaking() {
  const bank = window.SPEAKING_BANK || [];
  const lvChips = [0, 1, 2, 3].map(l => `<span class="chip ${spkFilter.level === l ? 'active' : ''}" data-spk-lv="${l}">${l === 0 ? '全部' : ['/', 'L1 基础', 'L2 进阶', 'L3 高阶'][l]}</span>`).join('');
  const scChips = ['', '日常交流', '学术表达', '观点陈述'].map(s => `<span class="chip ${spkFilter.scene === s ? 'active' : ''}" data-spk-sc="${s}">${s || '全部场景'}</span>`).join('');
  const items = bank.filter(t => (!spkFilter.level || t.level === spkFilter.level) && (!spkFilter.scene || t.scene === spkFilter.scene));
  const doneIds = Object.keys(S.speaking.done);
  const sorted = items.slice().sort((a, b) => (doneIds.includes(a.id) ? 1 : 0) - (doneIds.includes(b.id) ? 1 : 0));

  $('#main').innerHTML = `
    ${!SRClass ? `<div class="card"><p class="muted">⚠️ 当前浏览器不支持语音识别（推荐使用 Chrome/Edge 并允许麦克风）。跟读评分功能将降级为「自评模式」。</p></div>` : ''}
    <div class="card">
      <div class="card-title">🎤 话题与难度</div>
      <div class="chips mb8">${lvChips}</div>
      <div class="chips">${scChips}</div>
      <p class="muted mt8">先听标准发音示范 → 点击麦克风跟读 → AI 自动对比评分（已练话题自动置底）。</p>
    </div>
    ${sorted.map(t => {
      const d = S.speaking.done[t.id];
      return `<div class="card">
        <div class="card-title">${esc(t.topic)} ${d ? `<span class="badge ${d.best >= 85 ? 'green' : 'orange'}">最佳 ${d.best} 分</span>` : '<span class="badge blue">未练</span>'}</div>
        <p class="muted mb8">L${t.level} · ${esc(t.scene)} · ${esc(t.intro)}</p>
        <div class="btn-row"><button class="btn sm" data-spk-go="${t.id}">开始训练 →</button></div>
      </div>`;
    }).join('')}
  `;
  $$('[data-spk-lv]').forEach(c => c.onclick = () => { spkFilter.level = +c.dataset.spkLv; renderSpeaking(); });
  $$('[data-spk-sc]').forEach(c => c.onclick = () => { spkFilter.scene = c.dataset.spkSc; renderSpeaking(); });
  $$('[data-spk-go]').forEach(b => b.onclick = () => speakingTopic(b.dataset.spkGo));
}
function speakingTopic(id) {
  const t = (window.SPEAKING_BANK || []).find(x => x.id === id); if (!t) return;
  const scores = t.sentences.map((_, i) => S.speaking.sent[id + ':' + i]);
  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title"><a class="link" href="#/speaking">‹ 返回列表</a> <span>🎤 ${esc(t.topic)}</span></div>
      <p class="muted mb8">L${t.level} · ${esc(t.scene)} ｜ ${esc(t.intro)}</p>
      <div class="section-label">示范独白（可跟读模仿）</div>
      <div class="speak-sentence">
        <div>${esc(t.model.en)}</div>
        <div class="muted zh-line mt8">${esc(t.model.zh)}</div>
        <button class="btn sm secondary mt8" id="spk-model-play">🔊 播放示范</button>
      </div>
      <div class="section-label">跟读句子（5 句，由易到难）</div>
      <div id="spk-sents">${t.sentences.map((s, i) => `
        <div class="speak-sentence" data-spk-i="${i}">
          <div><b>${i + 1}.</b> ${esc(s.en)}
            <button class="speak-btn" data-spk-play="${i}" title="播放示范">🔊</button>
            <button class="speak-btn" data-spk-mic="${i}" title="按住说话后自动评分" style="background:var(--danger-light)">🎤</button></div>
          <div class="muted zh-line mt8">${esc(s.zh)}</div>
          <div class="muted">💡 ${esc(s.tip)}</div>
          <div class="mt8" data-spk-result="${i}">${scores[i] != null ? `<span class="badge ${scores[i] >= 85 ? 'green' : scores[i] >= 60 ? 'orange' : 'red'}">上次评测：${scores[i]} 分</span>` : ''}</div>
        </div>`).join('')}</div>
      <div class="btn-row mt12"><button class="btn block" id="spk-finish">完成本话题训练 ✔</button></div>
    </div>`;
  $('#spk-model-play').onclick = () => speak(t.model.en);
  $$('[data-spk-play]').forEach(b => b.onclick = () => speak(t.sentences[+b.dataset.spkPlay].en));
  $$('[data-spk-mic]').forEach(b => b.onclick = () => speakEvaluate(t, +b.dataset.spkMic));
  $('#spk-finish').onclick = () => {
    const got = scores.filter(v => v != null);
    const best = got.length ? Math.round(got.reduce((a, b) => a + b, 0) / got.length) : 0;
    const d = S.speaking.done[id] || {};
    d.best = Math.max(d.best || 0, best); d.at = Date.now();
    S.speaking.done[id] = d; save(); logActivity();
    toast(`训练完成！本话题平均 ${best} 分`); renderSpeaking();
  };
}
function speakEvaluate(t, i) {
  const target = t.sentences[i].en;
  const resEl = $(`[data-spk-result="${i}"]`);
  if (!SRClass) {
    // 自评模式降级
    resEl.innerHTML = `<div class="explain-box">🎙 语音识别不可用，请听示范后自评：</div>
      <div class="btn-row mt8">
        <button class="btn sm success" data-self="95">读得很好</button>
        <button class="btn sm warn" data-self="70">基本流利</button>
        <button class="btn sm danger" data-self="45">还需练习</button>
      </div>`;
    $$('[data-self]', resEl).forEach(b => b.onclick = () => saveSpeakScore(t, i, +b.dataset.self));
    return;
  }
  resEl.innerHTML = `<p class="muted">🎙 正在聆听，请清晰朗读目标句子……</p>`;
  recognizeOnce(text => {
    const score = similarity(target, text);
    const cls = score >= 85 ? 'green' : score >= 60 ? 'orange' : 'red';
    resEl.innerHTML = `<div class="explain-box ${score >= 60 ? 'ok' : 'bad'}">
      <b>AI 评测：${score} 分</b> ${score >= 85 ? '🏆 发音很棒！' : score >= 60 ? '👍 不错，注意差异词' : '📚 再听一遍示范，逐词模仿'}
      <div class="mt8 muted">目标：${esc(target)}</div>
      <div class="muted">识别：${esc(text)}</div>
      <div>${wordDiff(target, text).filter(d => !d.ok).slice(0, 6).map(d => `<span class="badge red" style="margin:2px">${esc(d.w)}</span>`).join('') || ''}</div>
    </div>`;
    saveSpeakScore(t, i, score);
  }, err => {
    const msg = err.error === 'not-allowed' ? '麦克风权限被拒绝，请在浏览器设置中允许麦克风' :
      err.error === 'no-speech' ? '未检测到声音，请重试' : '识别失败，请重试（需联网）';
    resEl.innerHTML = `<p class="muted">❌ ${msg}</p>`;
  });
}
function saveSpeakScore(t, i, score) {
  const key = t.id + ':' + i;
  S.speaking.sent[key] = Math.max(S.speaking.sent[key] || 0, score);
  save(); logActivity();
  toast(`本句评测：${score} 分`);
}

/* ============================================================
   视图六：阅读训练
   ============================================================ */
let rdFilter = 0;
function renderReading() {
  const bank = window.READING_BANK || [];
  const lvChips = [0, 1, 2, 3].map(l => `<span class="chip ${rdFilter === l ? 'active' : ''}" data-rd-lv="${l}">${l === 0 ? '全部' : ['/', 'L1 基础', 'L2 进阶', 'L3 高阶'][l]}</span>`).join('');
  const items = bank.filter(r => !rdFilter || r.level === rdFilter);
  const doneIds = Object.keys(S.reading.done);
  const sorted = items.slice().sort((a, b) => (doneIds.includes(a.id) ? 1 : 0) - (doneIds.includes(b.id) ? 1 : 0));

  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title">📚 阅读难度（按词汇量与句式复杂度分级）</div>
      <div class="chips">${lvChips}</div>
      <p class="muted mt8">文章中生词已自动下划线标注，点击可查看释义并加入生词本；已完成文章自动置底。</p>
    </div>
    ${sorted.map(r => {
      const d = S.reading.done[r.id];
      return `<div class="card">
        <div class="card-title">${esc(r.title)} ${d ? `<span class="badge ${d.best >= 75 ? 'green' : 'orange'}">已读 ${d.best}%</span>` : '<span class="badge blue">未读</span>'}</div>
        <p class="muted mb8">L${r.level} · ${esc(r.genre)} · 约 ${r.text.split(/\s+/).length} 词 · ${r.questions.length} 道理解题</p>
        <div class="btn-row"><button class="btn sm" data-rd-go="${r.id}">开始阅读 →</button></div>
      </div>`;
    }).join('')}
    <div class="card">
      <div class="card-title">🗂 阅读生词本（${S.reading.vocab.length}）</div>
      ${S.reading.vocab.length ? `<details class="fold"><summary>展开查看全部生词</summary><div class="fold-body">
        ${S.reading.vocab.slice().reverse().map(v => `<div class="report-item"><span><b>${esc(v.word)}</b> — ${esc(v.zh)} <span class="muted">（来自：${esc(v.from)}）</span></span></div>`).join('')}
      </div></details>` : '<p class="muted">阅读时点击划线生词即可自动收集。</p>'}
    </div>
  `;
  $$('[data-rd-lv]').forEach(c => c.onclick = () => { rdFilter = +c.dataset.rdLv; renderReading(); });
  $$('[data-rd-go]').forEach(b => b.onclick = () => readingPassage(b.dataset.rdGo));
}
function readingPassage(id) {
  const r = (window.READING_BANK || []).find(x => x.id === id); if (!r) return;
  // 生词自动提取：给文中 vocab 单词加下划线
  const words = r.vocab.map(v => v.word).sort((a, b) => b.length - a.length);
  const re = new RegExp('\\b(' + words.map(escRe).join('|') + ')\\b', 'gi');
  const paras = r.text.split(/\n\s*\n/).map(p => esc(p).replace(re, m => `<span class="vw" data-vw="${m.toLowerCase()}">${m}</span>`));
  const inBook = w => S.reading.vocab.some(v => v.word.toLowerCase() === w);

  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title"><a class="link" href="#/reading">‹ 返回列表</a> <span>${esc(r.title)}</span>
        <span class="badge blue">L${r.level}</span> <span class="badge gray">${esc(r.genre)}</span></div>
      <p class="muted mb8">生词已用 <span style="border-bottom:2px solid var(--warn)">橙色下划线</span> 标出，点击查看释义并加入生词本。</p>
      <div class="passage">${paras.map(p => `<p>${p}</p>`).join('')}</div>
      <div id="vw-panel" class="mt12"></div>
      <div class="section-label">本文生词表（自动提取，共 ${r.vocab.length} 个）</div>
      ${r.vocab.map(v => `<div class="report-item"><span><b>${esc(v.word)}</b></span><span class="muted">${esc(v.zh)}
        <button class="btn sm ${inBook(v.word.toLowerCase()) ? 'ghost' : 'secondary'}" data-add-vocab="${esc(v.word)}" data-zh="${esc(v.zh)}" ${inBook(v.word.toLowerCase()) ? 'disabled' : ''}>${inBook(v.word.toLowerCase()) ? '已在生词本' : '+ 收入生词本'}</button></span></div>`).join('')}
      <div class="btn-row mt12"><button class="btn block" id="rd-quiz">进入阅读理解检测（${r.questions.length} 题）→</button></div>
    </div>`;
  $$('.vw').forEach(el => el.onclick = () => {
    const w = el.dataset.vw;
    const v = r.vocab.find(v => v.word.toLowerCase() === w);
    $('#vw-panel').innerHTML = `<div class="explain-box"><b>${esc(w)}</b> — ${v ? esc(v.zh) : '（文中词）'}
      <button class="btn sm secondary mt8" data-add-vocab="${esc(w)}" data-zh="${v ? esc(v.zh) : ''}">+ 收入生词本</button></div>`;
    bindAddVocab(r);
  });
  bindAddVocab(r);
  $('#rd-quiz').onclick = () => {
    startQuiz({
      title: `阅读理解 · ${r.title}`,
      questions: r.questions,
      onFinish: (score, total) => {
        const pct = Math.round(score / total * 100);
        const d = S.reading.done[id] || {};
        d.best = Math.max(d.best || 0, pct); d.at = Date.now();
        S.reading.done[id] = d; save(); logActivity();
      },
      onExit: () => renderReading()
    });
  };
}
function bindAddVocab(r) {
  $$('[data-add-vocab]:not([disabled])').forEach(b => b.onclick = () => {
    const w = b.dataset.addVocab.toLowerCase();
    if (S.reading.vocab.some(v => v.word.toLowerCase() === w)) return toast('该词已在生词本');
    S.reading.vocab.push({ word: w, zh: b.dataset.zh || '', from: r.title, at: Date.now() });
    save(); logActivity(); toast(`「${w}」已收入生词本`);
    b.disabled = true; b.textContent = '已在生词本'; b.classList.remove('secondary'); b.classList.add('ghost');
  });
}

/* ============================================================
   视图七：薄弱项报告 & 学习画像
   ============================================================ */
function renderReport() {
  const wb = window.WORD_BANK || [];
  const weakWords = Object.entries(S.words.pushed).filter(([, v]) => v.result && v.result !== 'known').map(([w]) => w);
  const graWrongSorted = Object.entries(S.grammar.wrongByTopic).sort((a, b) => b[1] - a[1]);
  const lisWrong = Object.entries(S.listening.done).filter(([, d]) => d.wrong && d.wrong.length);
  const spkWeak = Object.entries(S.speaking.sent).filter(([, sc]) => sc < 70);
  const rdWrongCnt = Object.values(S.reading.done).reduce((a, d) => a + 0, 0);

  $('#main').innerHTML = `
    <div class="card">
      <div class="card-title">🧭 学习画像</div>
      <div class="stat-grid cols3">
        <div class="stat-box"><div class="num">${Object.keys(S.activity.days).length}</div><div class="lab">学习天数</div></div>
        <div class="stat-box"><div class="num">${Object.keys(S.words.pushed).length + S.words.custom.length}</div><div class="lab">接触单词</div></div>
        <div class="stat-box"><div class="num">${S.reading.vocab.length}</div><div class="lab">阅读生词</div></div>
      </div>
      <div class="mt12">
        ${ratioRowBig('📖 单词掌握率', Object.values(S.words.pushed).filter(w => w.result === 'known').length, Math.max(Object.keys(S.words.pushed).length, 1), 'green')}
        ${ratioRowBig('🎧 听力完成', Object.keys(S.listening.done).length, Math.max((window.LISTENING_BANK || []).length, 1), '')}
        ${ratioRowBig('✏️ 语法练习', Object.keys(S.grammar.done).length, Math.max((window.GRAMMAR_BANK || []).length, 1), 'orange')}
        ${ratioRowBig('🎤 口语训练', Object.keys(S.speaking.done).length, Math.max((window.SPEAKING_BANK || []).length, 1), 'green')}
        ${ratioRowBig('📚 阅读完成', Object.keys(S.reading.done).length, Math.max((window.READING_BANK || []).length, 1), 'orange')}
      </div>
    </div>

    <div class="card report-section">
      <div class="card-title">🎯 薄弱点智能总结 <a class="link" id="btn-export-report">导出报告 ›</a></div>
      <h3>📖 单词薄弱项（${weakWords.length}）</h3>
      ${weakWords.length ? weakWords.map(w => `<span class="badge orange" style="margin:2px">${esc(w)}</span>`).join(' ') + '<p class="muted mt8">→ 建议进入「单词」模块使用薄弱词复习模式巩固。</p>'
        : '<p class="muted">暂无薄弱单词，保持！</p>'}
      <h3>✏️ 语法薄弱知识点</h3>
      ${graWrongSorted.length ? graWrongSorted.map(([tp, n]) => `<div class="report-item"><span>${esc(tp)}</span><span class="r" style="color:var(--danger)">错 ${n} 次</span></div>`).join('') + '<p class="muted mt8">→ 错题本中可查看每题解析，建议重做对应知识点练习。</p>'
        : '<p class="muted">暂无语法错题记录。</p>'}
      <h3>🎧 听力薄弱内容</h3>
      ${lisWrong.length ? lisWrong.map(([id, d]) => {
        const it = (window.LISTENING_BANK || []).find(x => x.id === id);
        return `<div class="report-item"><span>${esc(it ? it.title : id)}</span><span class="r" style="color:var(--danger)">${d.wrong.length} 题错误</span></div>`;
      }).join('') : '<p class="muted">暂无听力错题，继续保持精听+听写练习。</p>'}
      <h3>🎤 口语待提升句（低于 70 分）</h3>
      ${spkWeak.length ? spkWeak.map(([key, sc]) => {
        const [tid, si] = key.split(':');
        const t = (window.SPEAKING_BANK || []).find(x => x.id === tid);
        const sent = t && t.sentences[+si];
        return `<div class="report-item"><span>${esc(sent ? sent.en.slice(0, 34) + '…' : key)}</span><span class="r" style="color:var(--warn)">${sc} 分</span></div>`;
      }).join('') : '<p class="muted">暂无低分句子，发音保持得不错！</p>'}
      <h3>📚 待巩固提示（学习避重状态）</h3>
      <div class="report-item"><span>词库未推送新词</span><span class="r">${Math.max(wb.length - Object.keys(S.words.pushed).length, 0)} 个</span></div>
      <div class="report-item"><span>待复习薄弱词</span><span class="r">${weakWords.length} 个</span></div>
      <div class="report-item"><span>未听力素材</span><span class="r">${Math.max((window.LISTENING_BANK || []).length - Object.keys(S.listening.done).length, 0)} 篇</span></div>
      <div class="report-item"><span>未读文章</span><span class="r">${Math.max((window.READING_BANK || []).length - Object.keys(S.reading.done).length, 0)} 篇</span></div>
    </div>

    <div class="card">
      <div class="card-title">💾 数据管理（本地长期留存）</div>
      <p class="muted mb8">学习数据自动保存在本设备浏览器中，长期留存、持续更新；可导出 JSON 备份。</p>
      <div class="btn-row">
        <button class="btn secondary" id="btn-export-data">导出学习数据</button>
        <button class="btn danger" id="btn-reset">清空全部数据</button>
      </div>
    </div>
  `;

  $('#btn-export-report').onclick = exportReport;
  $('#btn-export-data').onclick = () => {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `english-master-backup-${todayStr()}.json`;
    a.click(); toast('学习数据已导出');
  };
  $('#btn-reset').onclick = () => {
    if (confirm('确定清空全部学习数据吗？此操作不可恢复。')) {
      localStorage.removeItem(STORE_KEY); location.reload();
    }
  };
}
function exportReport() {
  const weakWords = Object.entries(S.words.pushed).filter(([, v]) => v.result && v.result !== 'known').map(([w]) => w);
  const graWrongSorted = Object.entries(S.grammar.wrongByTopic).sort((a, b) => b[1] - a[1]);
  const lines = [
    '=== English Master 薄弱点报告 ===', '生成时间：' + new Date().toLocaleString('zh-CN'), '',
    `【单词】薄弱词 ${weakWords.length} 个：${weakWords.join('、') || '无'}`, '',
    '【语法】薄弱知识点：',
    ...(graWrongSorted.length ? graWrongSorted.map(([t, n]) => `  - ${t}：错 ${n} 次`) : ['  无']), '',
    `【听力】完成 ${Object.keys(S.listening.done).length} 篇，听写平均 ${dictationAvg() == null ? '--' : dictationAvg() + '%'}`, '',
    `【口语】完成话题 ${Object.keys(S.speaking.done).length} 个`,
    `【阅读】完成 ${Object.keys(S.reading.done).length} 篇，理解题平均 ${moduleAccuracy(S.reading.done) == null ? '--' : moduleAccuracy(S.reading.done) + '%'}`,
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `薄弱项报告-${todayStr()}.txt`;
  a.click(); toast('报告已导出');
}

/* ---------------- 启动 ---------------- */
function applyHideZh() {
  document.body.classList.toggle('no-zh', !!S.settings.hideZh);
  const b = $('#zh-toggle');
  if (b) {
    b.textContent = S.settings.hideZh ? '中文 关' : '中文 开';
    b.classList.toggle('off', !!S.settings.hideZh);
    b.classList.toggle('on', !S.settings.hideZh);
  }
}
function bindZhToggle() {
  const b = $('#zh-toggle'); if (!b) return;
  b.onclick = () => {
    S.settings.hideZh = !S.settings.hideZh; save(); applyHideZh();
    toast(S.settings.hideZh ? '已隐藏中文释义，适合口语/听力强化训练' : '已恢复显示中文释义');
  };
}
document.addEventListener('DOMContentLoaded', () => {
  updateStreak(); applyHideZh(); bindZhToggle(); route();
});
if (document.readyState !== 'loading') { updateStreak(); applyHideZh(); bindZhToggle(); route(); }
