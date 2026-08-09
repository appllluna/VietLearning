const WORDS = [
  {
    id: 1, rank: 1,
    vi: 'tôi', ja: '私（一人称）', en: 'I / me', pos: '代名詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'là', en: 'am' }, { vi: 'sinh viên', en: 'student' }
      ],
      ja: '私は学生です。'
    }]
  },
  {
    id: 2, rank: 2,
    vi: 'là', ja: '〜です・〜である', en: 'is / am / are', pos: '動詞',
    examples: [{
      tokens: [
        { vi: 'Hà Nội', en: 'Hanoi' }, { vi: 'là', en: 'is' },
        { vi: 'thủ đô', en: 'capital' }, { vi: 'của', en: 'of' }, { vi: 'Việt Nam', en: 'Vietnam' }
      ],
      ja: 'ハノイはベトナムの首都です。'
    }]
  },
  {
    id: 3, rank: 3,
    vi: 'và', ja: '〜と・そして', en: 'and', pos: '接続詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'và', en: 'and' },
        { vi: 'bạn tôi', en: 'my friend' }, { vi: 'đi', en: 'go' }, { vi: 'chợ', en: 'to market' }
      ],
      ja: '私と友達は市場に行きます。'
    }]
  },
  {
    id: 4, rank: 4,
    vi: 'có', ja: '持っている・ある・いる', en: 'have / exist', pos: '動詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'có', en: 'have' }, { vi: 'một con mèo', en: 'a cat' }
      ],
      ja: '私は猫を一匹飼っています。'
    }]
  },
  {
    id: 5, rank: 5,
    vi: 'không', ja: '〜ない・いいえ', en: 'not / no', pos: '否定詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'không', en: 'not' }, { vi: 'hiểu', en: 'understand' }
      ],
      ja: '私は理解できません。'
    }]
  },
  {
    id: 6, rank: 6,
    vi: 'của', ja: '〜の（所有）', en: "of / 's", pos: '助詞',
    examples: [{
      tokens: [
        { vi: 'Đây', en: 'This' }, { vi: 'là', en: 'is' },
        { vi: 'sách', en: 'book' }, { vi: 'của', en: 'of' }, { vi: 'tôi', en: 'me' }
      ],
      ja: 'これは私の本です。'
    }]
  },
  {
    id: 7, rank: 7,
    vi: 'trong', ja: '〜の中に・〜で', en: 'in / inside', pos: '前置詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'ở', en: 'am' },
        { vi: 'trong', en: 'in' }, { vi: 'nhà', en: 'house' }
      ],
      ja: '私は家の中にいます。'
    }]
  },
  {
    id: 8, rank: 8,
    vi: 'một', ja: '一つの・ある（不定）', en: 'one / a', pos: '数詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'muốn', en: 'want' },
        { vi: 'một', en: 'one' }, { vi: 'ly', en: 'glass of' }, { vi: 'nước', en: 'water' }
      ],
      ja: '水を一杯ください。'
    }]
  },
  {
    id: 9, rank: 9,
    vi: 'người', ja: '人・人間', en: 'person / people', pos: '名詞',
    examples: [{
      tokens: [
        { vi: 'Người', en: 'Person' }, { vi: 'đó', en: 'that' },
        { vi: 'là', en: 'is' }, { vi: 'bạn', en: 'friend' }, { vi: 'tôi', en: 'my' }
      ],
      ja: 'あの人は私の友達です。'
    }]
  },
  {
    id: 10, rank: 10,
    vi: 'đó', ja: 'あの・その・そこ', en: 'that / there', pos: '指示詞',
    examples: [{
      tokens: [
        { vi: 'Nhà', en: 'House' }, { vi: 'đó', en: 'that' },
        { vi: 'rất', en: 'very' }, { vi: 'đẹp', en: 'beautiful' }
      ],
      ja: 'あの家はとても美しいです。'
    }]
  },
  {
    id: 11, rank: 11,
    vi: 'được', ja: 'できる・〜してもらう', en: 'can / be able to', pos: '助動詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'không', en: 'not' },
        { vi: 'làm', en: 'do' }, { vi: 'được', en: 'can' }
      ],
      ja: '私にはできません。'
    }]
  },
  {
    id: 12, rank: 12,
    vi: 'này', ja: 'この・これ', en: 'this / these', pos: '指示詞',
    examples: [{
      tokens: [
        { vi: 'Cái', en: 'thing' }, { vi: 'này', en: 'this' },
        { vi: 'là', en: 'is' }, { vi: 'gì', en: 'what' }
      ],
      ja: 'これは何ですか？'
    }]
  },
  {
    id: 13, rank: 13,
    vi: 'cho', ja: '与える・〜のために', en: 'give / for', pos: '動詞',
    examples: [{
      tokens: [
        { vi: 'Mẹ', en: 'Mom' }, { vi: 'cho', en: 'gives' },
        { vi: 'tôi', en: 'me' }, { vi: 'tiền', en: 'money' }
      ],
      ja: 'お母さんが私にお金をくれます。'
    }]
  },
  {
    id: 14, rank: 14,
    vi: 'với', ja: '〜と一緒に', en: 'with', pos: '前置詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'đi', en: 'go' },
        { vi: 'với', en: 'with' }, { vi: 'bạn', en: 'friend' }
      ],
      ja: '私は友達と一緒に行きます。'
    }]
  },
  {
    id: 15, rank: 15,
    vi: 'từ', ja: '〜から・単語', en: 'from / word', pos: '前置詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'đến', en: 'come' },
        { vi: 'từ', en: 'from' }, { vi: 'Nhật Bản', en: 'Japan' }
      ],
      ja: '私は日本から来ました。'
    }]
  },
  {
    id: 16, rank: 16,
    vi: 'đây', ja: 'ここ・これ（近称）', en: 'here / this', pos: '指示詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'ở', en: 'am' }, { vi: 'đây', en: 'here' }
      ],
      ja: '私はここにいます。'
    }]
  },
  {
    id: 17, rank: 17,
    vi: 'khi', ja: '〜のとき', en: 'when', pos: '接続詞',
    examples: [{
      tokens: [
        { vi: 'Khi', en: 'When' }, { vi: 'tôi', en: 'I' }, { vi: 'buồn', en: 'am sad' },
        { vi: 'tôi', en: 'I' }, { vi: 'nghe', en: 'listen to' }, { vi: 'nhạc', en: 'music' }
      ],
      ja: '悲しいとき、音楽を聴きます。'
    }]
  },
  {
    id: 18, rank: 18,
    vi: 'như', ja: '〜のように・〜として', en: 'like / as', pos: '前置詞',
    examples: [{
      tokens: [
        { vi: 'Anh ấy', en: 'He' }, { vi: 'chạy', en: 'runs' },
        { vi: 'như', en: 'like' }, { vi: 'gió', en: 'wind' }
      ],
      ja: '彼は風のように走ります。'
    }]
  },
  {
    id: 19, rank: 19,
    vi: 'nhưng', ja: 'しかし・でも', en: 'but', pos: '接続詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'muốn', en: 'want to' }, { vi: 'đi', en: 'go' },
        { vi: 'nhưng', en: 'but' }, { vi: 'bận', en: 'busy' }
      ],
      ja: '行きたいけど忙しいです。'
    }]
  },
  {
    id: 20, rank: 20,
    vi: 'nếu', ja: 'もし〜なら', en: 'if', pos: '接続詞',
    examples: [{
      tokens: [
        { vi: 'Nếu', en: 'If' }, { vi: 'trời', en: 'sky' }, { vi: 'mưa', en: 'rains' },
        { vi: 'tôi', en: 'I' }, { vi: 'ở', en: 'stay' }, { vi: 'nhà', en: 'home' }
      ],
      ja: '雨が降ったら、家にいます。'
    }]
  },
  {
    id: 21, rank: 21,
    vi: 'rất', ja: 'とても・非常に', en: 'very', pos: '副詞',
    examples: [{
      tokens: [
        { vi: 'Hôm nay', en: 'Today' }, { vi: 'rất', en: 'very' }, { vi: 'nóng', en: 'hot' }
      ],
      ja: '今日はとても暑いです。'
    }]
  },
  {
    id: 22, rank: 22,
    vi: 'nhiều', ja: 'たくさんの・多い', en: 'many / much', pos: '形容詞',
    examples: [{
      tokens: [
        { vi: 'Tôi', en: 'I' }, { vi: 'có', en: 'have' },
        { vi: 'nhiều', en: 'many' }, { vi: 'bạn', en: 'friends' }
      ],
      ja: '私には友達がたくさんいます。'
    }]
  },
  {
    id: 23, rank: 23,
    vi: 'bạn', ja: 'あなた・友達', en: 'you / friend', pos: '代名詞',
    examples: [{
      tokens: [
        { vi: 'Bạn', en: 'You' }, { vi: 'tên', en: 'name' },
        { vi: 'là', en: 'is' }, { vi: 'gì', en: 'what' }
      ],
      ja: 'あなたの名前は何ですか？'
    }]
  },
  {
    id: 24, rank: 24,
    vi: 'anh', ja: 'お兄さん・あなた（男性に）', en: 'older brother / you (male)', pos: '代名詞',
    examples: [{
      tokens: [
        { vi: 'Anh', en: 'You' }, { vi: 'có', en: 'are' },
        { vi: 'khỏe', en: 'well' }, { vi: 'không', en: '?' }
      ],
      ja: 'お元気ですか？（男性への呼びかけ）'
    }]
  },
  {
    id: 25, rank: 25,
    vi: 'chị', ja: 'お姉さん・あなた（女性に）', en: 'older sister / you (female)', pos: '代名詞',
    examples: [{
      tokens: [
        { vi: 'Chị', en: 'You' }, { vi: 'đang', en: '[now]' },
        { vi: 'làm', en: 'do' }, { vi: 'gì', en: 'what' }
      ],
      ja: '何をしているんですか？（女性への呼びかけ）'
    }]
  },

  // 26–40: 基本動詞
  { id: 26, rank: 26, vi: 'đi', ja: '行く', en: 'go', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đi', en: 'go' }, { vi: 'học', en: 'study' }, { vi: 'mỗi', en: 'every' }, { vi: 'ngày', en: 'day' }], ja: '私は毎日学校に行きます。' }] },

  { id: 27, rank: 27, vi: 'về', ja: '帰る・〜について', en: 'return / about', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'về', en: 'return to' }, { vi: 'nhà', en: 'home' }, { vi: 'lúc', en: 'at' }, { vi: 'sáu giờ', en: 'six' }], ja: '私は6時に帰宅します。' }] },

  { id: 28, rank: 28, vi: 'làm', ja: 'する・作る・働く', en: 'do / make / work', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'đang', en: '[now]' }, { vi: 'làm', en: 'doing' }, { vi: 'gì', en: 'what' }], ja: '何をしているんですか？' }] },

  { id: 29, rank: 29, vi: 'nói', ja: '話す・言う', en: 'speak / say', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Anh ấy', en: 'He' }, { vi: 'nói', en: 'speaks' }, { vi: 'tiếng Việt', en: 'Vietnamese' }, { vi: 'rất', en: 'very' }, { vi: 'giỏi', en: 'well' }], ja: '彼はベトナム語がとても上手です。' }] },

  { id: 30, rank: 30, vi: 'biết', ja: '知っている・わかる', en: 'know', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'không', en: 'not' }, { vi: 'biết', en: 'know' }], ja: '私は知りません。' }] },

  { id: 31, rank: 31, vi: 'muốn', ja: '欲しい・〜したい', en: 'want', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'muốn', en: 'want to' }, { vi: 'học', en: 'study' }, { vi: 'tiếng Việt', en: 'Vietnamese' }], ja: 'ベトナム語を勉強したいです。' }] },

  { id: 32, rank: 32, vi: 'thấy', ja: '見える・感じる', en: 'see / feel', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'thấy', en: 'feel' }, { vi: 'mệt', en: 'tired' }], ja: '疲れを感じます。' }] },

  { id: 33, rank: 33, vi: 'đến', ja: '来る・到着する', en: 'come / arrive', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Khi nào', en: 'When' }, { vi: 'bạn', en: 'you' }, { vi: 'đến', en: 'arrive' }], ja: 'いつ来ますか？' }] },

  { id: 34, rank: 34, vi: 'ở', ja: 'いる・ある・住む', en: 'be at / live', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'ở', en: 'live in' }, { vi: 'Hà Nội', en: 'Hanoi' }], ja: '私はハノイに住んでいます。' }] },

  { id: 35, rank: 35, vi: 'ra', ja: '出る・外へ', en: 'go out / out', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đi', en: 'go' }, { vi: 'ra', en: 'out' }, { vi: 'ngoài', en: 'outside' }], ja: '私は外に出ます。' }] },

  { id: 36, rank: 36, vi: 'vào', ja: '入る・〜へ', en: 'enter / into', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Mời', en: 'Please' }, { vi: 'bạn', en: 'you' }, { vi: 'vào', en: 'come in' }], ja: 'どうぞお入りください。' }] },

  { id: 37, rank: 37, vi: 'học', ja: '学ぶ・勉強する', en: 'study / learn', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đang', en: '[now]' }, { vi: 'học', en: 'studying' }, { vi: 'tiếng Việt', en: 'Vietnamese' }], ja: 'ベトナム語を勉強しています。' }] },

  { id: 38, rank: 38, vi: 'ăn', ja: '食べる', en: 'eat', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'ăn', en: 'eat' }, { vi: 'gì', en: 'what' }, { vi: 'rồi', en: 'already' }], ja: 'もう何か食べましたか？' }] },

  { id: 39, rank: 39, vi: 'uống', ja: '飲む', en: 'drink', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'uống', en: 'drink' }, { vi: 'cà phê', en: 'coffee' }, { vi: 'không', en: '?' }], ja: 'コーヒーを飲みますか？' }] },

  { id: 40, rank: 40, vi: 'ngủ', ja: '眠る', en: 'sleep', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'ngủ', en: 'slept' }, { vi: 'muộn', en: 'late' }, { vi: 'tối qua', en: 'last night' }], ja: '昨夜は寝るのが遅くなりました。' }] },

  // 41–56: 動詞続き
  { id: 41, rank: 41, vi: 'mua', ja: '買う', en: 'buy', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'muốn', en: 'want to' }, { vi: 'mua', en: 'buy' }, { vi: 'cái này', en: 'this' }], ja: 'これを買いたいです。' }] },

  { id: 42, rank: 42, vi: 'bán', ja: '売る', en: 'sell', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Cửa hàng này', en: 'This shop' }, { vi: 'bán', en: 'sells' }, { vi: 'áo', en: 'clothes' }], ja: 'このお店では服を売っています。' }] },

  { id: 43, rank: 43, vi: 'giúp', ja: '助ける・手伝う', en: 'help', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'có thể', en: 'can' }, { vi: 'giúp', en: 'help' }, { vi: 'tôi', en: 'me' }, { vi: 'không', en: '?' }], ja: '手伝っていただけますか？' }] },

  { id: 44, rank: 44, vi: 'tìm', ja: '探す', en: 'look for / find', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đang', en: '[now]' }, { vi: 'tìm', en: 'looking for' }, { vi: 'nhà vệ sinh', en: 'bathroom' }], ja: 'トイレを探しています。' }] },

  { id: 45, rank: 45, vi: 'nghĩ', ja: '思う・考える', en: 'think', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'nghĩ', en: 'think' }, { vi: 'bạn', en: 'you' }, { vi: 'đúng', en: 'are right' }], ja: 'あなたの言う通りだと思います。' }] },

  { id: 46, rank: 46, vi: 'hiểu', ja: '理解する・わかる', en: 'understand', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'hiểu', en: 'understand' }, { vi: 'không', en: '?' }], ja: 'わかりますか？' }] },

  { id: 47, rank: 47, vi: 'nhớ', ja: '覚えている・恋しい', en: 'remember / miss', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'nhớ', en: 'miss' }, { vi: 'bạn', en: 'you' }, { vi: 'nhiều', en: 'a lot' }], ja: 'あなたがとても恋しいです。' }] },

  { id: 48, rank: 48, vi: 'thích', ja: '好き', en: 'like', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'thích', en: 'like' }, { vi: 'ăn', en: 'eating' }, { vi: 'phở', en: 'pho' }], ja: '私はフォーを食べるのが好きです。' }] },

  { id: 49, rank: 49, vi: 'yêu', ja: '愛する', en: 'love', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'yêu', en: 'love' }, { vi: 'bạn', en: 'you' }], ja: '愛しています。' }] },

  { id: 50, rank: 50, vi: 'hỏi', ja: '質問する・聞く', en: 'ask', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'muốn', en: 'want to' }, { vi: 'hỏi', en: 'ask' }, { vi: 'một câu', en: 'a question' }], ja: 'ひとつ聞いてもいいですか？' }] },

  { id: 51, rank: 51, vi: 'đọc', ja: '読む', en: 'read', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đọc', en: 'read' }, { vi: 'sách', en: 'books' }, { vi: 'mỗi tối', en: 'every evening' }], ja: '私は毎晩本を読みます。' }] },

  { id: 52, rank: 52, vi: 'viết', ja: '書く', en: 'write', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Cô ấy', en: 'She' }, { vi: 'viết', en: 'writes' }, { vi: 'thư', en: 'a letter' }, { vi: 'cho', en: 'to' }, { vi: 'mẹ', en: 'mom' }], ja: '彼女はお母さんに手紙を書きます。' }] },

  { id: 53, rank: 53, vi: 'dạy', ja: '教える', en: 'teach', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Cô ấy', en: 'She' }, { vi: 'dạy', en: 'teaches' }, { vi: 'tiếng Anh', en: 'English' }], ja: '彼女は英語を教えています。' }] },

  { id: 54, rank: 54, vi: 'mở', ja: '開ける', en: 'open', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Xin hãy', en: 'Please' }, { vi: 'mở', en: 'open' }, { vi: 'cửa', en: 'the door' }], ja: 'ドアを開けてください。' }] },

  { id: 55, rank: 55, vi: 'đóng', ja: '閉める', en: 'close', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Đóng', en: 'Close' }, { vi: 'cửa sổ', en: 'the window' }, { vi: 'lại', en: 'please' }], ja: '窓を閉めてください。' }] },

  { id: 56, rank: 56, vi: 'chờ', ja: '待つ', en: 'wait', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Xin', en: 'Please' }, { vi: 'chờ', en: 'wait' }, { vi: 'một chút', en: 'a moment' }], ja: '少々お待ちください。' }] },

  // 57–63: 助動詞・アスペクト
  { id: 57, rank: 57, vi: 'có thể', ja: 'できる・〜かもしれない', en: 'can / may', pos: '助動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'có thể', en: 'can' }, { vi: 'giúp', en: 'help' }, { vi: 'bạn', en: 'you' }], ja: 'お手伝いできますよ。' }] },

  { id: 58, rank: 58, vi: 'phải', ja: '〜しなければならない', en: 'must / have to', pos: '助動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'phải', en: 'must' }, { vi: 'đi ngủ', en: 'go to sleep' }, { vi: 'sớm', en: 'early' }], ja: '早く寝なければなりません。' }] },

  { id: 59, rank: 59, vi: 'cần', ja: '必要だ・〜が要る', en: 'need', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'cần', en: 'need' }, { vi: 'giúp đỡ', en: 'help' }], ja: '助けが必要です。' }] },

  { id: 60, rank: 60, vi: 'nên', ja: '〜すべき・したほうがいい', en: 'should', pos: '助動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'nên', en: 'should' }, { vi: 'nghỉ ngơi', en: 'rest' }], ja: '休んだほうがいいですよ。' }] },

  { id: 61, rank: 61, vi: 'đang', ja: '〜している（進行中）', en: '[progressive marker]', pos: '助詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đang', en: '[now]' }, { vi: 'ăn', en: 'eating' }, { vi: 'cơm', en: 'rice' }], ja: 'ご飯を食べているところです。' }] },

  { id: 62, rank: 62, vi: 'đã', ja: '〜した（完了・過去）', en: '[past / completed marker]', pos: '助詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đã', en: '[past]' }, { vi: 'ăn', en: 'eat' }, { vi: 'rồi', en: 'already' }], ja: 'もう食べました。' }] },

  { id: 63, rank: 63, vi: 'sẽ', ja: '〜するつもり（未来）', en: '[future marker]', pos: '助詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'sẽ', en: '[will]' }, { vi: 'đến', en: 'arrive' }, { vi: 'đúng giờ', en: 'on time' }], ja: '時間通りに着きます。' }] },

  // 64–82: 名詞
  { id: 64, rank: 64, vi: 'nhà', ja: '家・自宅', en: 'house / home', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Nhà tôi', en: 'My house' }, { vi: 'ở', en: 'is' }, { vi: 'gần đây', en: 'nearby' }], ja: '私の家はこの近くです。' }] },

  { id: 65, rank: 65, vi: 'trường', ja: '学校', en: 'school', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Trường tôi', en: 'My school' }, { vi: 'rất', en: 'very' }, { vi: 'lớn', en: 'big' }], ja: '私の学校はとても大きいです。' }] },

  { id: 66, rank: 66, vi: 'tiền', ja: 'お金', en: 'money', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'không có', en: 'don\'t have' }, { vi: 'tiền', en: 'money' }], ja: 'お金がありません。' }] },

  { id: 67, rank: 67, vi: 'thời gian', ja: '時間', en: 'time', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'không có', en: 'don\'t have' }, { vi: 'thời gian', en: 'time' }], ja: '時間がありません。' }] },

  { id: 68, rank: 68, vi: 'gia đình', ja: '家族', en: 'family', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Gia đình tôi', en: 'My family' }, { vi: 'có', en: 'has' }, { vi: 'bốn người', en: 'four people' }], ja: '私の家族は4人です。' }] },

  { id: 69, rank: 69, vi: 'bố', ja: 'お父さん', en: 'father', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Bố tôi', en: 'My father' }, { vi: 'là', en: 'is' }, { vi: 'bác sĩ', en: 'a doctor' }], ja: '私の父は医者です。' }] },

  { id: 70, rank: 70, vi: 'mẹ', ja: 'お母さん', en: 'mother', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Mẹ tôi', en: 'My mother' }, { vi: 'nấu ăn', en: 'cooks' }, { vi: 'rất', en: 'very' }, { vi: 'ngon', en: 'deliciously' }], ja: '私の母の料理はとても美味しいです。' }] },

  { id: 71, rank: 71, vi: 'con', ja: '子供・類別詞', en: 'child / classifier', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Họ', en: 'They' }, { vi: 'có', en: 'have' }, { vi: 'hai', en: 'two' }, { vi: 'con', en: 'children' }], ja: '彼らには子供が2人います。' }] },

  { id: 72, rank: 72, vi: 'ngày', ja: '日・昼', en: 'day', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Ngày mai', en: 'Tomorrow' }, { vi: 'tôi', en: 'I' }, { vi: 'bận', en: 'busy' }], ja: '明日は忙しいです。' }] },

  { id: 73, rank: 73, vi: 'năm', ja: '年・5', en: 'year / five', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Năm nay', en: 'This year' }, { vi: 'tôi', en: 'I' }, { vi: 'hai mươi tuổi', en: 'twenty years old' }], ja: '今年で20歳になります。' }] },

  { id: 74, rank: 74, vi: 'tháng', ja: '月', en: 'month', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tháng sau', en: 'Next month' }, { vi: 'tôi', en: 'I' }, { vi: 'đi', en: 'go to' }, { vi: 'Nhật', en: 'Japan' }], ja: '来月、日本へ行きます。' }] },

  { id: 75, rank: 75, vi: 'tuần', ja: '週', en: 'week', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tuần này', en: 'This week' }, { vi: 'tôi', en: 'I' }, { vi: 'rất', en: 'very' }, { vi: 'bận', en: 'busy' }], ja: '今週はとても忙しいです。' }] },

  { id: 76, rank: 76, vi: 'giờ', ja: '時・時間（時刻）', en: 'hour / o\'clock', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Bây giờ', en: 'Now' }, { vi: 'là', en: 'is' }, { vi: 'mấy giờ', en: 'what time' }], ja: '今何時ですか？' }] },

  { id: 77, rank: 77, vi: 'nước', ja: '水・国', en: 'water / country', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Cho', en: 'Give' }, { vi: 'tôi', en: 'me' }, { vi: 'một ly', en: 'a glass of' }, { vi: 'nước', en: 'water' }], ja: '水を一杯ください。' }] },

  { id: 78, rank: 78, vi: 'cơm', ja: '（炊いた）ご飯', en: 'cooked rice', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'ăn cơm', en: 'eat rice' }, { vi: 'chưa', en: 'yet?' }], ja: 'ごはんはもう食べましたか？' }] },

  { id: 79, rank: 79, vi: 'điện thoại', ja: '電話・携帯', en: 'phone', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Điện thoại tôi', en: 'My phone' }, { vi: 'hết pin', en: 'out of battery' }], ja: '携帯の電池が切れました。' }] },

  { id: 80, rank: 80, vi: 'xe', ja: '乗り物・バイク・車', en: 'vehicle / bike / car', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đi', en: 'go by' }, { vi: 'xe máy', en: 'motorbike' }, { vi: 'đến', en: 'to' }, { vi: 'trường', en: 'school' }], ja: 'バイクで学校に行きます。' }] },

  { id: 81, rank: 81, vi: 'đường', ja: '道・通り', en: 'road / street', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Đường này', en: 'This road' }, { vi: 'bị', en: 'is' }, { vi: 'tắc', en: 'congested' }], ja: 'この道は渋滞しています。' }] },

  { id: 82, rank: 82, vi: 'tên', ja: '名前', en: 'name', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tên tôi', en: 'My name' }, { vi: 'là', en: 'is' }, { vi: 'Hana', en: 'Hana' }], ja: '私の名前はハナです。' }] },

  // 83–87: 疑問詞
  { id: 83, rank: 83, vi: 'gì', ja: '何', en: 'what', pos: '疑問詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'muốn', en: 'want' }, { vi: 'gì', en: 'what' }], ja: '何が欲しいですか？' }] },

  { id: 84, rank: 84, vi: 'ai', ja: '誰', en: 'who', pos: '疑問詞',
    examples: [{ tokens: [{ vi: 'Ai', en: 'Who' }, { vi: 'gọi điện', en: 'called' }, { vi: 'cho', en: 'for' }, { vi: 'tôi', en: 'me' }], ja: '誰から電話がありましたか？' }] },

  { id: 85, rank: 85, vi: 'đâu', ja: 'どこ', en: 'where', pos: '疑問詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'ở', en: 'are' }, { vi: 'đâu', en: 'where' }], ja: 'どこにいますか？' }] },

  { id: 86, rank: 86, vi: 'bao nhiêu', ja: 'いくら・いくつ', en: 'how many / how much', pos: '疑問詞',
    examples: [{ tokens: [{ vi: 'Cái này', en: 'This' }, { vi: 'bao nhiêu', en: 'how much' }, { vi: 'tiền', en: 'money' }], ja: 'これはいくらですか？' }] },

  { id: 87, rank: 87, vi: 'tại sao', ja: 'なぜ・どうして', en: 'why', pos: '疑問詞',
    examples: [{ tokens: [{ vi: 'Tại sao', en: 'Why' }, { vi: 'bạn', en: 'you' }, { vi: 'buồn', en: 'sad' }], ja: 'なぜ悲しそうなんですか？' }] },

  // 88–92: 代名詞
  { id: 88, rank: 88, vi: 'anh ấy', ja: '彼・彼氏', en: 'he / him', pos: '代名詞',
    examples: [{ tokens: [{ vi: 'Anh ấy', en: 'He' }, { vi: 'là', en: 'is' }, { vi: 'bạn', en: 'friend' }, { vi: 'tôi', en: 'my' }], ja: '彼は私の友達です。' }] },

  { id: 89, rank: 89, vi: 'cô ấy', ja: '彼女', en: 'she / her', pos: '代名詞',
    examples: [{ tokens: [{ vi: 'Cô ấy', en: 'She' }, { vi: 'đẹp', en: 'beautiful' }, { vi: 'lắm', en: 'very' }], ja: '彼女はとても美しいです。' }] },

  { id: 90, rank: 90, vi: 'họ', ja: '彼ら・彼女ら', en: 'they / them', pos: '代名詞',
    examples: [{ tokens: [{ vi: 'Họ', en: 'They' }, { vi: 'đến', en: 'come' }, { vi: 'từ', en: 'from' }, { vi: 'Hàn Quốc', en: 'Korea' }], ja: '彼らは韓国から来ています。' }] },

  { id: 91, rank: 91, vi: 'chúng tôi', ja: '私たち（聞き手を除く）', en: 'we (exclusive)', pos: '代名詞',
    examples: [{ tokens: [{ vi: 'Chúng tôi', en: 'We' }, { vi: 'là', en: 'are' }, { vi: 'bạn bè', en: 'friends' }], ja: '私たちは友達です。' }] },

  { id: 92, rank: 92, vi: 'chúng ta', ja: '私たちみんな（聞き手を含む）', en: 'we (inclusive)', pos: '代名詞',
    examples: [{ tokens: [{ vi: 'Chúng ta', en: 'We' }, { vi: 'cùng', en: 'together' }, { vi: 'đi', en: 'go' }, { vi: 'nhé', en: 'OK?' }], ja: '一緒に行きましょう！' }] },

  // 93–100: 形容詞
  { id: 93, rank: 93, vi: 'tốt', ja: '良い・上手', en: 'good', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Anh ấy', en: 'He' }, { vi: 'rất', en: 'very' }, { vi: 'tốt', en: 'good / kind' }], ja: '彼はとても優しいです。' }] },

  { id: 94, rank: 94, vi: 'đẹp', ja: '美しい・きれい', en: 'beautiful', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Hoa này', en: 'These flowers' }, { vi: 'rất', en: 'very' }, { vi: 'đẹp', en: 'beautiful' }], ja: 'この花はとてもきれいです。' }] },

  { id: 95, rank: 95, vi: 'lớn', ja: '大きい', en: 'big / large', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Thành phố này', en: 'This city' }, { vi: 'rất', en: 'very' }, { vi: 'lớn', en: 'big' }], ja: 'この都市はとても大きいです。' }] },

  { id: 96, rank: 96, vi: 'nhỏ', ja: '小さい', en: 'small / little', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Căn phòng này', en: 'This room' }, { vi: 'hơi', en: 'a bit' }, { vi: 'nhỏ', en: 'small' }], ja: 'この部屋は少し小さいです。' }] },

  { id: 97, rank: 97, vi: 'mới', ja: '新しい', en: 'new', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'mua', en: 'bought' }, { vi: 'điện thoại', en: 'a phone' }, { vi: 'mới', en: 'new' }], ja: '新しい携帯を買いました。' }] },

  { id: 98, rank: 98, vi: 'nhanh', ja: '速い・早い', en: 'fast / quick', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Anh ấy', en: 'He' }, { vi: 'chạy', en: 'runs' }, { vi: 'rất', en: 'very' }, { vi: 'nhanh', en: 'fast' }], ja: '彼はとても速く走ります。' }] },

  { id: 99, rank: 99, vi: 'chậm', ja: '遅い', en: 'slow', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Xe buýt', en: 'The bus' }, { vi: 'hôm nay', en: 'today' }, { vi: 'rất', en: 'very' }, { vi: 'chậm', en: 'slow' }], ja: '今日のバスはとても遅いです。' }] },

  { id: 100, rank: 100, vi: 'ngon', ja: '美味しい', en: 'delicious', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Phở này', en: 'This pho' }, { vi: 'ngon', en: 'delicious' }, { vi: 'lắm', en: 'very' }], ja: 'このフォーはとても美味しいです！' }] }
];

// ── Speech ──
function speak(text, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'vi-VN';
  utt.rate = 0.85;
  if (btn) {
    btn.classList.add('speaking');
    utt.onend  = () => btn.classList.remove('speaking');
    utt.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(utt);
}

// ── State ──
const learned = new Set(JSON.parse(localStorage.getItem('vn_learned') || '[]'));
let currentFilter = 'all';
let currentSearch = '';

function saveProgress() {
  localStorage.setItem('vn_learned', JSON.stringify([...learned]));
}

function updateProgress() {
  const total = WORDS.length;
  const count = learned.size;
  document.getElementById('progressText').textContent = `${count} / ${total} 語習得`;
  document.getElementById('progressBarFill').style.width = `${total ? (count / total * 100) : 0}%`;
}

// ── Render ──
function renderCards() {
  const grid = document.getElementById('wordGrid');
  grid.innerHTML = '';

  WORDS.forEach(word => {
    const isLearned = learned.has(word.id);
    const card = document.createElement('div');
    card.className = `word-card${isLearned ? ' learned' : ''}`;
    card.dataset.id = word.id;

    const examplesHtml = word.examples.map(ex => {
      const sentence = ex.tokens.map(t => t.vi).join(' ');
      const tokens = ex.tokens
        .map(t => `<div class="il-token"><span class="il-vi">${t.vi}</span><span class="il-en">${t.en}</span></div>`)
        .join('');
      return `
        <div class="example-header">
          <span class="example-label">例文</span>
          <button class="speak-btn" data-text="${sentence}" title="例文を読み上げ">🔊</button>
        </div>
        <div class="interlinear">${tokens}</div>
        <div class="il-ja">→ ${ex.ja}</div>
      `;
    }).join('');

    card.innerHTML = `
      <div class="card-header">
        <span class="card-rank">#${word.rank}</span>
        <div class="card-words">
          <div class="word-vi-row">
            <span class="word-vi">${word.vi}</span>
            <button class="speak-btn" data-text="${word.vi}" title="発音を聞く">🔊</button>
          </div>
          <div class="word-ja">${word.ja}</div>
          <div class="word-en">${word.en}</div>
        </div>
        <span class="pos-tag">${word.pos}</span>
        <span class="expand-icon">▼</span>
      </div>
      <div class="card-example">
        ${examplesHtml}
      </div>
      <div class="card-footer">
        <button class="learned-btn">${isLearned ? '✓ 習得済み' : '覚えた'}</button>
      </div>
    `;

    card.querySelector('.card-header').addEventListener('click', () => {
      card.classList.toggle('expanded');
    });

    card.querySelectorAll('.speak-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        speak(btn.dataset.text, btn);
      });
    });

    card.querySelector('.learned-btn').addEventListener('click', e => {
      e.stopPropagation();
      if (learned.has(word.id)) {
        learned.delete(word.id);
        card.classList.remove('learned');
        e.target.textContent = '覚えた';
      } else {
        learned.add(word.id);
        card.classList.add('learned');
        e.target.textContent = '✓ 習得済み';
      }
      saveProgress();
      updateProgress();
      applyVisibility();
    });

    grid.appendChild(card);
  });

  applyVisibility();
  updateProgress();
}

function applyVisibility() {
  const q = currentSearch.toLowerCase();
  let visible = 0;

  document.querySelectorAll('.word-card').forEach(card => {
    const id = parseInt(card.dataset.id);
    const word = WORDS.find(w => w.id === id);
    const isLearned = learned.has(id);

    const matchFilter =
      currentFilter === 'all' ||
      (currentFilter === 'learned' && isLearned) ||
      (currentFilter === 'unlearned' && !isLearned);

    const matchSearch = !q ||
      word.vi.toLowerCase().includes(q) ||
      word.ja.includes(q) ||
      word.en.toLowerCase().includes(q);

    const show = matchFilter && matchSearch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  document.getElementById('emptyMsg').hidden = visible > 0;
}

// ── Events ──
document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value;
  applyVisibility();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyVisibility();
  });
});

// ── Init ──
renderCards();
