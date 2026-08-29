const PHRASES = [
  {
    id: 'greeting', label: '挨拶', icon: '👋',
    items: [
      { vi: 'Xin chào!', ja: 'こんにちは！', note: '時間帯を問わず使える万能の挨拶' },
      { vi: 'Chào buổi sáng!', ja: 'おはようございます！', note: 'buổi sáng＝朝' },
      { vi: 'Chào buổi chiều!', ja: 'こんにちは！（午後）', note: 'buổi chiều＝午後' },
      { vi: 'Chào buổi tối!', ja: 'こんばんは！', note: 'buổi tối＝夕方・夜' },
      { vi: 'Ngủ ngon!', ja: 'おやすみなさい！', note: 'ngủ＝眠る、ngon＝美味しい→よく眠れる' },
      { vi: 'Tạm biệt!', ja: 'さようなら！', note: '' },
      { vi: 'Hẹn gặp lại!', ja: 'またね！', note: 'hẹn＝約束する、gặp lại＝また会う' },
      { vi: 'Khỏe không?', ja: 'お元気ですか？', note: '親しい間柄で使う。丁寧には「Bạn có khỏe không?」' },
      { vi: 'Tôi khỏe, cảm ơn!', ja: '元気です、ありがとう！', note: '' },
      { vi: 'Chúc một ngày tốt lành!', ja: '良い一日を！', note: 'chúc＝祝う・願う、tốt lành＝良い' },
    ]
  },
  {
    id: 'intro', label: '自己紹介', icon: '🙋',
    items: [
      { vi: 'Tôi tên là ...', ja: '私の名前は〜です。', note: 'または「Tên tôi là ...」でも同じ意味' },
      { vi: 'Rất vui được gặp bạn!', ja: 'はじめまして！', note: '直訳：お会いできてとても嬉しいです' },
      { vi: 'Tôi đến từ Nhật Bản.', ja: '私は日本から来ました。', note: '' },
      { vi: 'Tôi đang học tiếng Việt.', ja: 'ベトナム語を勉強しています。', note: 'đang＝〜している（進行）' },
      { vi: 'Bạn bao nhiêu tuổi?', ja: '何歳ですか？', note: 'tuổi＝歳' },
      { vi: 'Tôi ... tuổi.', ja: '私は〜歳です。', note: '数字を入れるだけ（例：Tôi hai mươi lăm tuổi.）' },
      { vi: 'Bạn làm nghề gì?', ja: 'お仕事は何ですか？', note: 'nghề＝職業' },
      { vi: 'Tôi là học sinh / sinh viên.', ja: '私は学生です。', note: '学sinh＝小中高生、sinh viên＝大学生' },
      { vi: 'Bạn có thể nói chậm hơn không?', ja: 'もう少しゆっくり話していただけますか？', note: 'chậm＝遅い、hơn＝より' },
      { vi: 'Tôi chưa giỏi tiếng Việt.', ja: 'ベトナム語がまだ上手ではありません。', note: 'chưa＝まだ〜ない' },
    ]
  },
  {
    id: 'shopping', label: '買い物', icon: '🛍️',
    items: [
      { vi: 'Cái này bao nhiêu tiền?', ja: 'これはいくらですか？', note: 'bao nhiêu＝いくら、tiền＝お金' },
      { vi: 'Đắt quá!', ja: '高すぎます！', note: 'quá＝〜すぎる' },
      { vi: 'Rẻ hơn được không?', ja: 'もう少し安くなりますか？', note: '値引き交渉の定番フレーズ' },
      { vi: 'Tôi muốn mua cái này.', ja: 'これを買いたいです。', note: '' },
      { vi: 'Có màu khác không?', ja: '他の色はありますか？', note: 'màu＝色、khác＝他の' },
      { vi: 'Có size lớn hơn không?', ja: 'もう少し大きいサイズはありますか？', note: '' },
      { vi: 'Tôi chỉ xem thôi.', ja: '見ているだけです。', note: 'chỉ〜thôi＝〜だけ' },
      { vi: 'Tính tiền cho tôi.', ja: 'お会計をお願いします。', note: '' },
      { vi: 'Có thể dùng thẻ không?', ja: 'カードは使えますか？', note: 'thẻ＝カード、dùng＝使う' },
      { vi: 'Cho tôi túi nilon.', ja: '袋をください。', note: 'túi nilon＝ビニール袋' },
    ]
  },
  {
    id: 'dining', label: '食事', icon: '🍜',
    items: [
      { vi: 'Cho tôi xem thực đơn.', ja: 'メニューを見せてください。', note: 'thực đơn＝メニュー' },
      { vi: 'Tôi muốn đặt bàn cho hai người.', ja: '2名でテーブルを予約したいです。', note: 'đặt bàn＝テーブルを予約する' },
      { vi: 'Cho tôi một tô phở.', ja: 'フォーを一杯ください。', note: 'tô＝丼・ボウル（類別詞）' },
      { vi: 'Không cho cay.', ja: '辛くしないでください。', note: 'cay＝辛い' },
      { vi: 'Ngon lắm!', ja: 'とても美味しいです！', note: 'lắm＝とても（文末）' },
      { vi: 'Cho tôi thêm nước.', ja: 'お水のおかわりをください。', note: 'thêm＝追加する' },
      { vi: 'Tính tiền!', ja: 'お会計！', note: '' },
      { vi: 'Tôi ăn chay.', ja: '私はベジタリアンです。', note: 'ăn chay＝菜食する' },
      { vi: 'Chúc ngon miệng!', ja: 'いただきます！／召し上がれ！', note: 'ngon miệng＝美味しく食べる' },
      { vi: 'Bạn có dị ứng thức ăn không?', ja: '食物アレルギーはありますか？', note: 'dị ứng＝アレルギー' },
    ]
  },
  {
    id: 'directions', label: '道案内', icon: '🗺️',
    items: [
      { vi: '... ở đâu?', ja: '〜はどこですか？', note: '例：Nhà vệ sinh ở đâu?（トイレはどこ？）' },
      { vi: 'Đi thẳng.', ja: 'まっすぐ行ってください。', note: 'thẳng＝まっすぐ' },
      { vi: 'Rẽ trái.', ja: '左に曲がってください。', note: 'rẽ＝曲がる、trái＝左' },
      { vi: 'Rẽ phải.', ja: '右に曲がってください。', note: 'phải＝右（「しなければならない」とは別語）' },
      { vi: 'Cách đây bao xa?', ja: 'ここからどのくらいですか？', note: 'cách＝距離、xa＝遠い' },
      { vi: 'Mất bao lâu?', ja: 'どのくらいかかりますか？', note: 'mất＝かかる（時間）、lâu＝長い' },
      { vi: 'Tôi bị lạc.', ja: '道に迷いました。', note: 'bị lạc＝迷子になる' },
      { vi: 'Gần đây có ... không?', ja: 'この近くに〜はありますか？', note: 'gần đây＝この近く' },
      { vi: 'Cho tôi địa chỉ này.', ja: 'この住所へお願いします。', note: 'タクシーで使う' },
    ]
  },
  {
    id: 'trouble', label: '困ったとき', icon: '🆘',
    items: [
      { vi: 'Giúp tôi với!', ja: '助けてください！', note: 'với＝（お願いの強調）' },
      { vi: 'Tôi bị bệnh.', ja: '病気です。', note: 'bị＝（被害・受身）bệnh＝病気' },
      { vi: 'Gọi bác sĩ!', ja: '医者を呼んでください！', note: 'gọi＝呼ぶ・電話する、bác sĩ＝医者' },
      { vi: 'Gọi cảnh sát!', ja: '警察を呼んでください！', note: 'cảnh sát＝警察' },
      { vi: 'Tôi bị mất ví.', ja: '財布をなくしました。', note: 'ví＝財布、bị mất＝なくした' },
      { vi: 'Tôi không hiểu.', ja: 'わかりません。', note: '' },
      { vi: 'Bạn có nói tiếng Nhật không?', ja: '日本語は話せますか？', note: 'tiếng Nhật＝日本語' },
      { vi: 'Có ai nói tiếng Anh không?', ja: '英語を話せる人はいますか？', note: 'tiếng Anh＝英語' },
      { vi: 'Xin gọi cho số này.', ja: 'この番号に電話してください。', note: '' },
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
let currentCategory = PHRASES[0].id;

// ── Render ──
function renderTabs() {
  const container = document.getElementById('categoryTabs');
  container.innerHTML = PHRASES.map(cat => `
    <button class="tab-btn${cat.id === currentCategory ? ' active' : ''}" data-id="${cat.id}">
      ${cat.icon} ${cat.label}
    </button>
  `).join('');
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.id;
      renderTabs();
      renderPhrases();
    });
  });
}

function renderPhrases() {
  const cat = PHRASES.find(c => c.id === currentCategory);
  const grid = document.getElementById('phraseGrid');
  grid.innerHTML = cat.items.map((item, i) => `
    <div class="phrase-card">
      <div class="phrase-vi-row">
        <span class="phrase-vi">${item.vi}</span>
      </div>
      <div class="phrase-ja">${item.ja}</div>
      ${item.note ? `<div class="phrase-note">${item.note}</div>` : ''}
      <div class="phrase-actions">
        <button class="speak-btn" data-text="${item.vi}" title="読み上げ">🔊</button>
        <button class="copy-btn" data-text="${item.vi}" title="コピー">📋</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.speak-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); speak(btn.dataset.text, btn); });
  });
  grid.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); copyText(btn.dataset.text, btn); });
  });
}

renderTabs();
renderPhrases();
