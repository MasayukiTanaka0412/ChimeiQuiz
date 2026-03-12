(() => {
  'use strict';

  const QUESTION_COUNT = 10;
  const quizData = [
    { question: "旅館がぜんぶ建て替えられたら、どこになる？", answer: "新宿", yomi: "しんじゅく", aliases: ["しんじゅく", "シンジュク"] },
    { question: "野原でお泊まり会をしたら、どこに着きそう？", answer: "原宿", yomi: "はらじゅく", aliases: ["はらじゅく", "ハラジュク"] },
    { question: "秋の葉っぱが一面に広がる原っぱみたいなのは、どこ？", answer: "秋葉原", yomi: "あきはばら", aliases: ["あきはばら", "アキハバラ"] },
    { question: "大きすぎて、池まで入りそうな袋はどこ？", answer: "池袋", yomi: "いけぶくろ", aliases: ["いけぶくろ", "イケブクロ"] },
    { question: "上等な品物が、川みたいに流れてきそうなのはどこ？", answer: "品川", yomi: "しながわ", aliases: ["しながわ", "シナガワ"] },
    { question: "口に入れる前から、ちょっとしぶそうな谷はどこ？", answer: "渋谷", yomi: "しぶや", aliases: ["しぶや", "シブヤ"] },
    { question: "野原より、ほんの少し高いところはどこ？", answer: "上野", yomi: "うえの", aliases: ["うえの", "ウエノ"] },
    { question: "国の名前をそのまま名のる橋はどこ？", answer: "日本橋", yomi: "にほんばし", aliases: ["にほんばし", "ニホンバシ"] },
    { question: "めでたいことが集まりすぎていそうなお寺のある場所はどこ？", answer: "吉祥寺", yomi: "きちじょうじ", aliases: ["きちじょうじ", "キチジョウジ"] },
    { question: "だれにも止められず、のびのび歩けそうな丘はどこ？", answer: "自由が丘", yomi: "じゆうがおか", aliases: ["じゆうがおか", "ジユウガオカ", "自由ヶ丘", "じゆうがおか"] },

    { question: "たてより、よこにのびていそうな浜はどこ？", answer: "横浜", yomi: "よこはま", aliases: ["よこはま", "ヨコハマ"] },
    { question: "草を刈る道具をしまってありそうなのはどこ？", answer: "鎌倉", yomi: "かまくら", aliases: ["かまくら", "カマクラ"] },
    { question: "ぴょんと川を越えたら着きそうなのはどこ？", answer: "川越", yomi: "かわごえ", aliases: ["かわごえ", "カワゴエ"] },
    { question: "お昼だけ、やたらまぶしそうなのはどこ？", answer: "日光", yomi: "にっこう", aliases: ["にっこう", "ニッコウ"] },
    { question: "軽そうなのに、水はちゃんとわきそうなのはどこ？", answer: "軽井沢", yomi: "かるいざわ", aliases: ["かるいざわ", "カルイザワ"] },
    { question: "箱のいちばん大事な部分みたいなのはどこ？", answer: "箱根", yomi: "はこね", aliases: ["はこね", "ハコネ"] },
    { question: "海なのに、手を入れたら「あつっ」と言いそうなのはどこ？", answer: "熱海", yomi: "あたみ", aliases: ["あたみ", "アタミ"] },
    { question: "絵本から白い馬が飛び出してきそうなのはどこ？", answer: "白馬", yomi: "はくば", aliases: ["はくば", "ハクバ"] },
    { question: "白い川のふるさと、みたいに聞こえるのはどこ？", answer: "白川郷", yomi: "しらかわごう", aliases: ["しらかわごう", "シラカワゴウ", "白川郷"] },
    { question: "見上げすぎて首がつかれそうなのはどこ？", answer: "高山", yomi: "たかやま", aliases: ["たかやま", "タカヤマ"] },

    { question: "宝探ししたくなる沢はどこ？", answer: "金沢", yomi: "かなざわ", aliases: ["かなざわ", "カナザワ"] },
    { question: "「いせーの！」で出発したら着きそうなのはどこ？", answer: "伊勢", yomi: "いせ", aliases: ["いせ", "イセ"] },
    { question: "鳥の羽を集めていそうなのはどこ？", answer: "鳥羽", yomi: "とば", aliases: ["とば", "トバ"] },
    { question: "まぶしすぎて、浜の色まで白く見えそうなのはどこ？", answer: "白浜", yomi: "しらはま", aliases: ["しらはま", "シラハマ"] },
    { question: "野原よりずっと高いところにありそうなのはどこ？", answer: "高野山", yomi: "こうやさん", aliases: ["こうやさん", "コウヤサン", "高野山"] },
    { question: "風の強い日ほど名前がぴったりなのはどこ？", answer: "嵐山", yomi: "あらしやま", aliases: ["あらしやま", "アラシヤマ"] },
    { question: "悩みすぎて、うじうじしていたら着きそうなのはどこ？", answer: "宇治", yomi: "うじ", aliases: ["うじ", "ウジ"] },
    { question: "空に橋が立っているみたいなのはどこ？", answer: "天橋立", yomi: "あまのはしだて", aliases: ["あまのはしだて", "アマノハシダテ", "天橋立"] },
    { question: "お姫さまだけが通れそうな道みたいなのはどこ？", answer: "姫路", yomi: "ひめじ", aliases: ["ひめじ", "ヒメジ"] },
    { question: "神さま専用のドアがありそうなのはどこ？", answer: "神戸", yomi: "こうべ", aliases: ["こうべ", "コウベ"] },

    { question: "「馬はいる？」と聞いたら「あります」みたいに聞こえる温泉はどこ？", answer: "有馬温泉", yomi: "ありまおんせん", aliases: ["ありま", "ありまおんせん", "アリマ", "アリマオンセン", "有馬"] },
    { question: "蔵がきれいに敷きつめられていそうなのはどこ？", answer: "倉敷", yomi: "くらしき", aliases: ["くらしき", "クラシキ"] },
    { question: "しっぽみたいに細長い道が続いていそうなのはどこ？", answer: "尾道", yomi: "おのみち", aliases: ["おのみち", "オノミチ"] },
    { question: "神さまの大きなおうちが、そのまま島になったみたいなのはどこ？", answer: "宮島", yomi: "みやじま", aliases: ["みやじま", "ミヤジマ"] },
    { question: "雲がぞろぞろ出てきそうな神話の地はどこ？", answer: "出雲", yomi: "いずも", aliases: ["いずも", "イズモ"] },
    { question: "松の木が水辺までのびていそうなのはどこ？", answer: "松江", yomi: "まつえ", aliases: ["まつえ", "マツエ"] },
    { question: "「この道のあとです」と言われたら着きそうな温泉はどこ？", answer: "道後温泉", yomi: "どうごおんせん", aliases: ["どうご", "どうごおんせん", "ドウゴ", "ドウゴオンセン", "道後"] },
    { question: "四万より、ちょっとだけ多そうなのはどこ？", answer: "四万十", yomi: "しまんと", aliases: ["しまんと", "シマント"] },
    { question: "なんでもくわしい人が、やたら多そうなのはどこ？", answer: "博多", yomi: "はかた", aliases: ["はかた", "ハカタ"] },
    { question: "昔のえらい役人が、まだいそうなのはどこ？", answer: "太宰府", yomi: "だざいふ", aliases: ["だざいふ", "ダザイフ"] },

    { question: "ほかとは別の役所みたいな名前なのはどこ？", answer: "別府", yomi: "べっぷ", aliases: ["べっぷ", "ベップ"] },
    { question: "お湯を布でふわっと包んでくれそうなのはどこ？", answer: "湯布院", yomi: "ゆふいん", aliases: ["ゆふいん", "ユフイン", "由布院", "ゆふいん"] },
    { question: "千よりもっと高い感じがする神話の里はどこ？", answer: "高千穂", yomi: "たかちほ", aliases: ["たかちほ", "タカチホ"] },
    { question: "道を聞いたら、指さされそうなのはどこ？", answer: "指宿", yomi: "いぶすき", aliases: ["いぶすき", "イブスキ"] },
    { question: "小さい豆がころころ転がっていそうな島はどこ？", answer: "小豆島", yomi: "しょうどしま", aliases: ["しょうどしま", "ショウドシマ", "小豆島"] },
    { question: "首都っぽい字が入っている、昔の王さまの町はどこ？", answer: "首里", yomi: "しゅり", aliases: ["しゅり", "シュリ"] },
    { question: "石でできたかきねが、ずっと続いていそうな島はどこ？", answer: "石垣島", yomi: "いしがきじま", aliases: ["いしがきじま", "イシガキジマ", "石垣"] },
    { question: "竹がすくすく育って、お金持ちそうな島はどこ？", answer: "竹富島", yomi: "たけとみじま", aliases: ["たけとみじま", "タケトミジマ", "竹富"] },
    { question: "箱を立てて並べたみたいなのはどこ？", answer: "函館", yomi: "はこだて", aliases: ["はこだて", "ハコダテ"] },
    { question: "松の木のそばで待ち合わせしたくなるのはどこ？", answer: "松本", yomi: "まつもと", aliases: ["まつもと", "マツモト"] }
  ];

  const state = {
    selectedQuestions: [],
    currentIndex: 0,
    score: 0,
    answersLog: [],
    hasAnswered: false,
    currentAccepted: null
  };

  const screen = document.getElementById('screen');
  const toast = document.getElementById('toast');

  function shuffleArray(array) {
    const copied = [...array];
    for (let i = copied.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copied[i], copied[j]] = [copied[j], copied[i]];
    }
    return copied;
  }

  function pickRandomQuestions() {
    return shuffleArray(quizData).slice(0, QUESTION_COUNT);
  }

  function katakanaToHiragana(text) {
    return text.replace(/[ァ-ン]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
  }

  function normalizeText(text) {
    if (!text) return '';
    const normalized = text
      .trim()
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\u3000\s]/g, '')
      .replace(/[ー〜～]/g, 'ー')
      .replace(/[・.。,、!！?？'"「」『』（）()\[\]{}]/g, '')
      .replace(/ヶ/g, 'ケ')
      .replace(/ヵ/g, 'カ');
    return katakanaToHiragana(normalized);
  }

  function levenshteinDistance(a, b) {
    const lenA = a.length;
    const lenB = b.length;
    if (lenA === 0) return lenB;
    if (lenB === 0) return lenA;

    const dp = Array.from({ length: lenA + 1 }, () => Array(lenB + 1).fill(0));

    for (let i = 0; i <= lenA; i += 1) dp[i][0] = i;
    for (let j = 0; j <= lenB; j += 1) dp[0][j] = j;

    for (let i = 1; i <= lenA; i += 1) {
      for (let j = 1; j <= lenB; j += 1) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    return dp[lenA][lenB];
  }

  function getTypoThreshold(targetLength) {
    if (targetLength <= 4) return 1;
    if (targetLength <= 8) return 1;
    return 2;
  }

  function isAcceptedAnswer(userInput, questionItem) {
    const userNormalized = normalizeText(userInput);
    if (!userNormalized) return { isCorrect: false, acceptedBy: '' };

    const candidates = [questionItem.answer, questionItem.yomi, ...(questionItem.aliases || [])]
      .map((candidate) => normalizeText(candidate))
      .filter(Boolean);

    // 完全一致判定
    if (candidates.includes(userNormalized)) {
      return { isCorrect: true, acceptedBy: '完全一致' };
    }

    // 軽微typo判定
    for (const candidate of candidates) {
      const lengthDiff = Math.abs(candidate.length - userNormalized.length);
      if (lengthDiff > 2) continue;

      const distance = levenshteinDistance(userNormalized, candidate);
      const threshold = getTypoThreshold(candidate.length);
      if (distance <= threshold) {
        return { isCorrect: true, acceptedBy: `typo許容(${distance})` };
      }
    }

    return { isCorrect: false, acceptedBy: '' };
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 1700);
  }

  function renderStartScreen() {
    screen.classList.remove('fade-in');
    screen.innerHTML = document.getElementById('start-template').innerHTML;
    requestAnimationFrame(() => screen.classList.add('fade-in'));

    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
      state.selectedQuestions = pickRandomQuestions();
      state.currentIndex = 0;
      state.score = 0;
      state.answersLog = [];
      state.hasAnswered = false;
      renderQuestion();
    });
  }

  function renderQuestion() {
    const currentQuestion = state.selectedQuestions[state.currentIndex];
    if (!currentQuestion) {
      renderResult();
      return;
    }

    state.hasAnswered = false;
    state.currentAccepted = null;

    screen.classList.remove('fade-in');
    screen.innerHTML = document.getElementById('question-template').innerHTML;
    requestAnimationFrame(() => screen.classList.add('fade-in'));

    const progressText = document.getElementById('progress-text');
    const scoreText = document.getElementById('score-text');
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');

    progressText.textContent = `${state.currentIndex + 1} / ${QUESTION_COUNT} 問目`;
    scoreText.textContent = `現在の正解数 ${state.score}`;
    questionText.textContent = currentQuestion.question;
    nextBtn.textContent = state.currentIndex === QUESTION_COUNT - 1 ? '結果を見る' : '次の問題へ';

    submitBtn.addEventListener('click', () => submitAnswer(currentQuestion));
    nextBtn.addEventListener('click', () => {
      state.currentIndex += 1;
      if (state.currentIndex >= QUESTION_COUNT) {
        renderResult();
      } else {
        renderQuestion();
      }
    });

    answerInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitAnswer(currentQuestion);
      }
    });

    answerInput.focus();
  }

  function submitAnswer(questionItem) {
    if (state.hasAnswered) return;

    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');

    const userAnswerRaw = answerInput.value.trim();
    const judged = isAcceptedAnswer(userAnswerRaw, questionItem);
    const isCorrect = judged.isCorrect;

    state.hasAnswered = true;
    state.currentAccepted = judged.acceptedBy;

    if (isCorrect) {
      state.score += 1;
    }

    state.answersLog.push({
      index: state.currentIndex + 1,
      question: questionItem.question,
      userAnswer: userAnswerRaw || '（未入力）',
      correctAnswer: questionItem.answer,
      isCorrect
    });

    answerInput.disabled = true;
    submitBtn.disabled = true;
    nextBtn.hidden = false;

    feedback.className = `feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
    feedback.innerHTML = `
      <p><strong>${isCorrect ? '✔ 正解！' : '✖ 不正解'}</strong></p>
      <p>あなたの回答：<strong>${escapeHTML(userAnswerRaw || '（未入力）')}</strong></p>
      <p>正解：<strong>${escapeHTML(questionItem.answer)}</strong></p>
      ${state.currentAccepted ? `<p class="small-note">判定: ${escapeHTML(state.currentAccepted)}</p>` : ''}
    `;

    const scoreText = document.getElementById('score-text');
    scoreText.textContent = `現在の正解数 ${state.score}`;
  }

  function getEvaluationMessage(score) {
    if (score <= 3) return 'まだまだ旅の途中！';
    if (score <= 7) return '日本地名マスターに近い！';
    return '地名博士！';
  }

  function createShareText() {
    const rate = Math.round((state.score / QUESTION_COUNT) * 100);
    const base = `日本地名なぞなぞクイズで ${state.score}/${QUESTION_COUNT} 問正解しました！（正答率 ${rate}%） #日本地名なぞなぞクイズ`;
    const currentUrl = typeof location !== 'undefined' && location.href ? ` ${location.href}` : '';
    return `${base}${currentUrl}`;
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        const ok = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (ok) resolve();
        else reject(new Error('コピーに失敗しました'));
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function openShareWindow(url) {
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (!popup) {
      showToast('ポップアップがブロックされました');
    }
  }

  function renderResult() {
    const rate = Math.round((state.score / QUESTION_COUNT) * 100);

    screen.classList.remove('fade-in');
    screen.innerHTML = document.getElementById('result-template').innerHTML;
    requestAnimationFrame(() => screen.classList.add('fade-in'));

    document.getElementById('result-summary').textContent = `${QUESTION_COUNT}問中 ${state.score}問正解`;
    document.getElementById('result-rate').textContent = `正答率 ${rate}%`;
    document.getElementById('result-message').textContent = getEvaluationMessage(state.score);

    const reviewBody = document.getElementById('review-body');
    reviewBody.innerHTML = state.answersLog.map((log) => `
      <tr>
        <td>${log.index}</td>
        <td>${escapeHTML(log.question)}</td>
        <td>${escapeHTML(log.userAnswer)}</td>
        <td>${escapeHTML(log.correctAnswer)}</td>
        <td><span class="badge ${log.isCorrect ? 'correct' : 'incorrect'}">${log.isCorrect ? '正解' : '不正解'}</span></td>
      </tr>
    `).join('');

    const shareText = createShareText();
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(typeof location !== 'undefined' && location.href ? location.href : '');

    document.getElementById('share-x').addEventListener('click', () => {
      openShareWindow(`https://twitter.com/intent/tweet?text=${encodedText}`);
    });

    document.getElementById('share-line').addEventListener('click', () => {
      openShareWindow(`https://social-plugins.line.me/lineit/share?text=${encodedText}&url=${encodedUrl}`);
    });

    document.getElementById('share-facebook').addEventListener('click', () => {
      const facebookUrl = typeof location !== 'undefined' && location.href ? location.href : '';
      openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(facebookUrl)}&quote=${encodedText}`);
    });

    document.getElementById('copy-result').addEventListener('click', async () => {
      try {
        await copyToClipboard(shareText);
        showToast('結果テキストをコピーしました');
      } catch (error) {
        showToast('コピーに失敗しました');
      }
    });

    const nativeShareBtn = document.getElementById('native-share');
    if (navigator.share) {
      nativeShareBtn.hidden = false;
      nativeShareBtn.addEventListener('click', async () => {
        try {
          await navigator.share({
            title: '日本地名なぞなぞクイズ',
            text: shareText,
            url: typeof location !== 'undefined' ? location.href : ''
          });
        } catch (error) {
          // キャンセルは通知不要
          if (error && error.name !== 'AbortError') {
            showToast('共有に失敗しました');
          }
        }
      });
    }

    document.getElementById('restart-btn').addEventListener('click', renderStartScreen);
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  renderStartScreen();
})();
