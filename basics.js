const SECTIONS = [
  {
    id: 'numbers', label: '数字', icon: '🔢',
    items: [
      { vi: 'không', ja: 'ゼロ', num: '0' },
      { vi: 'một', ja: '一', num: '1' },
      { vi: 'hai', ja: '二', num: '2' },
      { vi: 'ba', ja: '三', num: '3' },
      { vi: 'bốn', ja: '四', num: '4' },
      { vi: 'năm', ja: '五', num: '5' },
      { vi: 'sáu', ja: '六', num: '6' },
      { vi: 'bảy', ja: '七', num: '7' },
      { vi: 'tám', ja: '八', num: '8' },
      { vi: 'chín', ja: '九', num: '9' },
      { vi: 'mười', ja: '十', num: '10' },
      { vi: 'mười một', ja: '十一', num: '11' },
      { vi: 'mười hai', ja: '十二', num: '12' },
      { vi: 'mười ba', ja: '十三', num: '13' },
      { vi: 'mười bốn', ja: '十四', num: '14' },
      { vi: 'mười lăm', ja: '十五', num: '15', note: '5→lăm' },
      { vi: 'mười sáu', ja: '十六', num: '16' },
      { vi: 'mười bảy', ja: '十七', num: '17' },
      { vi: 'mười tám', ja: '十八', num: '18' },
      { vi: 'mười chín', ja: '十九', num: '19' },
      { vi: 'hai mươi', ja: '二十', num: '20', note: 'mười→mươi' },
      { vi: 'hai mươi mốt', ja: '二十一', num: '21', note: '1→mốt' },
      { vi: 'hai mươi lăm', ja: '二十五', num: '25', note: '5→lăm' },
      { vi: 'ba mươi', ja: '三十', num: '30' },
      { vi: 'bốn mươi', ja: '四十', num: '40' },
      { vi: 'năm mươi', ja: '五十', num: '50' },
      { vi: 'sáu mươi', ja: '六十', num: '60' },
      { vi: 'bảy mươi', ja: '七十', num: '70' },
      { vi: 'tám mươi', ja: '八十', num: '80' },
      { vi: 'chín mươi', ja: '九十', num: '90' },
      { vi: 'một trăm', ja: '百', num: '100' },
      { vi: 'một nghìn', ja: '千', num: '1,000' },
      { vi: 'một triệu', ja: '百万', num: '1,000,000' },
    ]
  },
  {
    id: 'days', label: '曜日', icon: '📅',
    items: [
      { vi: 'Thứ Hai', ja: '月曜日', num: 'Mon.', note: '「第2日」' },
      { vi: 'Thứ Ba', ja: '火曜日', num: 'Tue.', note: '「第3日」' },
      { vi: 'Thứ Tư', ja: '水曜日', num: 'Wed.', note: '「第4日」' },
      { vi: 'Thứ Năm', ja: '木曜日', num: 'Thu.', note: '「第5日」' },
      { vi: 'Thứ Sáu', ja: '金曜日', num: 'Fri.', note: '「第6日」' },
      { vi: 'Thứ Bảy', ja: '土曜日', num: 'Sat.', note: '「第7日」' },
      { vi: 'Chủ Nhật', ja: '日曜日', num: 'Sun.', note: '「主の日」' },
    ]
  },
  {
    id: 'months', label: '月', icon: '🗓️',
    items: [
      { vi: 'Tháng Một', ja: '1月', num: 'Jan.' },
      { vi: 'Tháng Hai', ja: '2月', num: 'Feb.' },
      { vi: 'Tháng Ba', ja: '3月', num: 'Mar.' },
      { vi: 'Tháng Tư', ja: '4月', num: 'Apr.', note: '4はTư' },
      { vi: 'Tháng Năm', ja: '5月', num: 'May' },
      { vi: 'Tháng Sáu', ja: '6月', num: 'Jun.' },
      { vi: 'Tháng Bảy', ja: '7月', num: 'Jul.' },
      { vi: 'Tháng Tám', ja: '8月', num: 'Aug.' },
      { vi: 'Tháng Chín', ja: '9月', num: 'Sep.' },
      { vi: 'Tháng Mười', ja: '10月', num: 'Oct.' },
      { vi: 'Tháng Mười Một', ja: '11月', num: 'Nov.' },
      { vi: 'Tháng Mười Hai', ja: '12月', num: 'Dec.' },
    ]
  },
  {
    id: 'pronouns', label: '呼称・二人称', icon: '👥',
    groups: [
      { context: '同年代・友人', I: 'mình / tôi', you: 'bạn', note: '気軽な関係。tôi はやや改まった印象。' },
      { context: '年上の男性に', I: 'em / tôi', you: 'anh', note: 'em を使うと親しみが増す。' },
      { context: '年上の女性に', I: 'em / tôi', you: 'chị', note: '' },
      { context: '年下に（自分が年上）', I: 'anh（男）/ chị（女）', you: 'em', note: '自分を anh/chị、相手を em と呼ぶ。' },
      { context: 'おじ世代に', I: 'cháu', you: 'chú / bác', note: 'chú＝父の弟、bác＝父の兄・目上の年配男性' },
      { context: 'おば世代に', I: 'cháu', you: 'cô / bác', note: 'cô＝父の妹・若い女性教師など' },
      { context: '祖父母世代に', I: 'cháu', you: 'ông（祖父）/ bà（祖母）', note: '' },
    ]
  },
  {
    id: 'greetings', label: '挨拶フレーズ', icon: '🤝',
    items: [
      { vi: 'Xin chào!', ja: 'こんにちは！', note: '万能の挨拶' },
      { vi: 'Chào buổi sáng!', ja: 'おはようございます！', note: '' },
      { vi: 'Chào buổi tối!', ja: 'こんばんは！', note: '' },
      { vi: 'Ngủ ngon!', ja: 'おやすみなさい！', note: '' },
      { vi: 'Tạm biệt!', ja: 'さようなら！', note: '' },
      { vi: 'Hẹn gặp lại!', ja: 'またね！', note: '' },
      { vi: 'Cảm ơn (rất nhiều)!', ja: 'ありがとう（ございます）！', note: 'rất nhiều＝とてもたくさん（省略可）' },
      { vi: 'Không có gì.', ja: 'どういたしまして。', note: '直訳：何もない' },
      { vi: 'Xin lỗi.', ja: 'すみません。／ごめんなさい。', note: '' },
      { vi: 'Không sao.', ja: '大丈夫。', note: '直訳：どうもない' },
      { vi: 'Vâng. / Dạ.', ja: 'はい。', note: 'vâng＝北部、dạ＝南部（より丁寧）' },
      { vi: 'Khỏe không?', ja: 'お元気ですか？', note: '親しい間柄で' },
      { vi: 'Tôi khỏe, cảm ơn!', ja: '元気です、ありがとう！', note: '' },
      { vi: 'Chúc mừng!', ja: 'おめでとうございます！', note: '' },
      { vi: 'Chúc may mắn!', ja: '幸運を祈っています！', note: 'may mắn＝幸運' },
    ]
  },
];

// ── Speech ──
let viVoice = null;

function initVoices() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return;
  viVoice =
    voices.find(v => v.lang.startsWith('vi') && v.name.toLowerCase().includes('google')) ||
    voices.find(v => v.lang.startsWith('vi')) || null;
  const el = document.getElementById('voiceWarning');
  if (el) el.hidden = !!viVoice;
  if (!viVoice && el) el.textContent = '⚠️ ベトナム語音声（vi-VN）が見つかりません。Chromeを使用してください。';
}

if (window.speechSynthesis) {
  speechSynthesis.addEventListener('voiceschanged', initVoices);
  initVoices();
}

function speak(text, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'vi-VN';
  if (viVoice) utt.voice = viVoice;
  utt.rate = 0.85;
  if (btn) {
    btn.classList.add('speaking');
    utt.onend  = () => btn.classList.remove('speaking');
    utt.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(utt);
}

async function copyText(text, btn) {
  try { await navigator.clipboard.writeText(text); } catch {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  }
  const orig = btn.textContent;
  btn.textContent = '✓'; btn.classList.add('copied');
  setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1500);
}

// ── State ──
let currentSection = SECTIONS[0].id;

// ── Render ──
function renderTabs() {
  const container = document.getElementById('sectionTabs');
  container.innerHTML = SECTIONS.map(s => `
    <button class="tab-btn${s.id === currentSection ? ' active' : ''}" data-id="${s.id}">
      ${s.icon} ${s.label}
    </button>
  `).join('');
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSection = btn.dataset.id;
      renderTabs();
      renderSection();
    });
  });
}

function speakBtn(text) {
  return `<button class="speak-btn" data-text="${text}" title="読み上げ">🔊</button>`;
}

function renderSection() {
  const sec = SECTIONS.find(s => s.id === currentSection);
  const main = document.getElementById('basicsMain');

  if (sec.id === 'pronouns') {
    main.innerHTML = `
      <div style="max-width:1200px;margin:0 auto;padding:1.5rem 1rem">
        <p class="section-heading">二人称の使い分け — ベトナム語は相手との年齢・立場で「あなた」と「私」が変わります</p>
        <div class="pronoun-grid">
          ${sec.groups.map(g => `
            <div class="pronoun-card">
              <div class="pronoun-context">${g.context}</div>
              <div class="pronoun-row">
                <div class="pronoun-item">
                  <span class="pronoun-label">私（I）</span>
                  <span class="pronoun-vi">${g.I}</span>
                </div>
                <div style="color:var(--text-muted);font-size:1.2rem;align-self:center">↔</div>
                <div class="pronoun-item">
                  <span class="pronoun-label">あなた（You）</span>
                  <span class="pronoun-vi">${g.you}</span>
                </div>
              </div>
              ${g.note ? `<div class="pronoun-note">${g.note}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>`;
    return;
  }

  const isWide = ['days', 'months', 'greetings'].includes(sec.id);
  main.innerHTML = `
    <div style="max-width:1200px;margin:0 auto;padding:1.5rem 1rem">
      <div class="basics-grid${isWide ? ' wide' : ''}">
        ${sec.items.map(item => `
          <div class="basic-card">
            ${item.num !== undefined ? `<div class="basic-num">${item.num}</div>` : ''}
            <div class="basic-vi">${item.vi}</div>
            <div class="basic-ja">${item.ja}</div>
            ${item.note ? `<div class="basic-note">${item.note}</div>` : ''}
            <div class="basic-card-actions">${speakBtn(item.vi)}</div>
          </div>
        `).join('')}
      </div>
    </div>`;

  main.querySelectorAll('.speak-btn').forEach(btn => {
    btn.addEventListener('click', () => speak(btn.dataset.text, btn));
  });
}

renderTabs();
renderSection();
