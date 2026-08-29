// ── Speech (app.js の viVoice を共有) ──
function fcSpeak(text, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'vi-VN';
  if (window.viVoice) utt.voice = window.viVoice;
  utt.rate = 0.85;
  if (btn) {
    btn.classList.add('speaking');
    utt.onend  = () => btn.classList.remove('speaking');
    utt.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(utt);
}

// ── State ──
const fcLearned = new Set(JSON.parse(localStorage.getItem('vn_learned') || '[]'));
let deck = [];          // 現在の出題順
let cursor = 0;         // deck 内のインデックス
let isFlipped = false;
let currentFilter = 'all';
let isShuffled = false;

function saveLearned() {
  localStorage.setItem('vn_learned', JSON.stringify([...fcLearned]));
}

// ── Deck 構築 ──
function buildDeck() {
  let words = WORDS.filter(w => {
    if (currentFilter === 'learned')   return fcLearned.has(w.id);
    if (currentFilter === 'unlearned') return !fcLearned.has(w.id);
    return true;
  });
  if (isShuffled) words = words.slice().sort(() => Math.random() - 0.5);
  deck = words;
  cursor = 0;
}

// ── レンダリング ──
function renderProgress() {
  const total = deck.length;
  const pos = total ? cursor + 1 : 0;
  document.getElementById('fcProgressText').textContent = `${pos} / ${total}`;
  document.getElementById('fcProgressBar').style.width = total ? `${(pos / total) * 100}%` : '0%';
}

function ilTokens(tokens) {
  return tokens.map(t => `
    <div class="il-token">
      <span class="il-vi">${t.vi}</span>
      <span class="il-en">${t.en}</span>
    </div>`).join('');
}

function renderCard() {
  const card  = document.getElementById('fcCard');
  const front = document.getElementById('fcFront');
  const back  = document.getElementById('fcBack');
  const nav   = document.getElementById('fcNav');

  // empty state
  if (!deck.length) {
    front.innerHTML = `<div class="fc-empty">該当する単語がありません。</div>`;
    back.innerHTML  = '';
    nav.innerHTML   = '';
    renderProgress();
    return;
  }

  const word = deck[cursor];
  const isLearned = fcLearned.has(word.id);

  // 表面
  front.innerHTML = `
    <div class="fc-rank-pos">
      <span>#${word.rank}</span>
      <span class="pos-tag">${word.pos}</span>
    </div>
    <div class="fc-word-vi">
      <span>${word.vi}</span>
      <button class="speak-btn" title="発音">🔊</button>
    </div>
    <div class="fc-hint">タップ／スペースキーで答えを見る</div>
  `;

  // 裏面（例文インターリニア付き）
  const exHtml = word.examples.map(ex => {
    const sentence = ex.tokens.map(t => t.vi).join(' ');
    return `
      <div class="example-header">
        <span class="example-label">例文</span>
        <button class="speak-btn" data-text="${sentence}">🔊</button>
      </div>
      <div class="interlinear">${ilTokens(ex.tokens)}</div>
      <div class="il-ja">→ ${ex.ja}</div>
    `;
  }).join('');

  back.innerHTML = `
    <div class="fc-rank-pos">
      <span>#${word.rank}</span>
      <span class="pos-tag">${word.pos}</span>
    </div>
    <div class="fc-word-vi" style="font-size:1.8rem;flex:0;margin-bottom:0.5rem">
      <span>${word.vi}</span>
      <button class="speak-btn" data-text="${word.vi}" title="発音">🔊</button>
    </div>
    <div class="fc-meanings">
      <div class="fc-word-ja">${word.ja}</div>
      <div class="fc-word-en">${word.en}</div>
    </div>
    <hr class="fc-divider">
    <div class="fc-example-label">例文</div>
    ${exHtml}
  `;

  // ナビゲーション
  nav.innerHTML = `
    <button id="fcPrev" style="flex:0;padding:0.65rem 1rem">← 前</button>
    <button class="fc-btn-again" id="fcAgain" ${!isFlipped ? 'style="display:none"' : ''}>
      もう一度
    </button>
    <button class="fc-btn-got" id="fcGot" ${!isFlipped ? 'style="display:none"' : ''}>
      ${isLearned ? '✓ 習得済み' : '覚えた ✓'}
    </button>
    <button id="fcNext" style="flex:0;padding:0.65rem 1rem">次 →</button>
  `;

  if (isLearned && isFlipped) {
    document.getElementById('fcGot').style.background = 'var(--learned-border)';
  }

  // イベント
  front.querySelector('.speak-btn').addEventListener('click', e => {
    e.stopPropagation();
    fcSpeak(word.vi, e.currentTarget);
  });
  back.querySelectorAll('.speak-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      fcSpeak(btn.dataset.text || word.vi, btn);
    });
  });

  document.getElementById('fcPrev').addEventListener('click', () => { cursor = Math.max(0, cursor - 1); flip(false); renderCard(); renderProgress(); });
  document.getElementById('fcNext').addEventListener('click', () => goNext());
  document.getElementById('fcAgain')?.addEventListener('click', () => goNext(false));
  document.getElementById('fcGot')?.addEventListener('click', () => {
    if (fcLearned.has(word.id)) {
      fcLearned.delete(word.id);
    } else {
      fcLearned.add(word.id);
    }
    saveLearned();
    goNext(true);
  });

  renderProgress();
  updateFlipState();
}

function flip(state) { isFlipped = state; }

function updateFlipState() {
  const card = document.getElementById('fcCard');
  card.classList.toggle('flipped', isFlipped);
  const again = document.getElementById('fcAgain');
  const got   = document.getElementById('fcGot');
  if (again) again.style.display = isFlipped ? '' : 'none';
  if (got)   got.style.display   = isFlipped ? '' : 'none';
}

function goNext(markLearned) {
  if (cursor < deck.length - 1) {
    cursor++;
    flip(false);
    renderCard();
  } else {
    flip(false);
    renderCard(); // 最後のカードで止まる
  }
  renderProgress();
}

// ── カードクリックで反転 ──
document.getElementById('fcCard').addEventListener('click', () => {
  if (!deck.length) return;
  flip(!isFlipped);
  updateFlipState();
});

// ── キーボード操作 ──
document.addEventListener('keydown', e => {
  if (e.key === ' ') { e.preventDefault(); flip(!isFlipped); updateFlipState(); }
  if (e.key === 'ArrowRight') goNext();
  if (e.key === 'ArrowLeft') { cursor = Math.max(0, cursor - 1); flip(false); renderCard(); renderProgress(); }
});

// ── フィルタ・シャッフル ──
document.querySelectorAll('.fc-filter-bar .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fc-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    buildDeck();
    flip(false);
    renderCard();
  });
});

document.getElementById('shuffleBtn').addEventListener('click', () => {
  isShuffled = !isShuffled;
  document.getElementById('shuffleBtn').style.color = isShuffled ? 'var(--primary)' : '';
  document.getElementById('shuffleBtn').style.borderColor = isShuffled ? 'var(--primary)' : '';
  buildDeck();
  flip(false);
  renderCard();
});

// ── Init ──
buildDeck();
renderCard();
