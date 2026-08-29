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
    examples: [{ tokens: [{ vi: 'Phở này', en: 'This pho' }, { vi: 'ngon', en: 'delicious' }, { vi: 'lắm', en: 'very' }], ja: 'このフォーはとても美味しいです！' }] },

  // ── 101–120 動詞 ──
  { id: 101, rank: 101, vi: 'gặp', ja: '会う', en: 'meet', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Rất vui', en: 'Very glad' }, { vi: 'được', en: 'to' }, { vi: 'gặp', en: 'meet' }, { vi: 'bạn', en: 'you' }], ja: 'お会いできて嬉しいです。' }] },
  { id: 102, rank: 102, vi: 'ngồi', ja: '座る', en: 'sit', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Mời', en: 'Please' }, { vi: 'bạn', en: 'you' }, { vi: 'ngồi', en: 'sit down' }], ja: 'どうぞ座ってください。' }] },
  { id: 103, rank: 103, vi: 'đứng', ja: '立つ', en: 'stand', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đứng', en: 'stand' }, { vi: 'đây', en: 'here' }, { vi: 'chờ', en: 'waiting' }], ja: 'ここで立って待っています。' }] },
  { id: 104, rank: 104, vi: 'chạy', ja: '走る', en: 'run', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Mỗi sáng', en: 'Every morning' }, { vi: 'tôi', en: 'I' }, { vi: 'chạy bộ', en: 'jog' }], ja: '毎朝ジョギングします。' }] },
  { id: 105, rank: 105, vi: 'nấu', ja: '料理する', en: 'cook', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Mẹ tôi', en: 'My mom' }, { vi: 'nấu cơm', en: 'cooks rice' }, { vi: 'ngon lắm', en: 'very deliciously' }], ja: '母の料理はとても美味しいです。' }] },
  { id: 106, rank: 106, vi: 'rửa', ja: '洗う', en: 'wash', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Rửa', en: 'Wash' }, { vi: 'tay', en: 'hands' }, { vi: 'trước khi', en: 'before' }, { vi: 'ăn', en: 'eating' }], ja: '食事の前に手を洗ってください。' }] },
  { id: 107, rank: 107, vi: 'trả', ja: '支払う・返す', en: 'pay / return', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'muốn', en: 'want to' }, { vi: 'trả tiền', en: 'pay the bill' }], ja: 'お会計したいです。' }] },
  { id: 108, rank: 108, vi: 'gửi', ja: '送る', en: 'send', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'gửi', en: 'send' }, { vi: 'email', en: 'email' }, { vi: 'cho tôi', en: 'to me' }, { vi: 'nhé', en: 'OK?' }], ja: 'メールを送ってね。' }] },
  { id: 109, rank: 109, vi: 'nhận', ja: '受け取る', en: 'receive', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đã nhận', en: 'received' }, { vi: 'được quà', en: 'a gift' }], ja: 'プレゼントを受け取りました。' }] },
  { id: 110, rank: 110, vi: 'mất', ja: 'なくす・かかる', en: 'lose / take (time)', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'bị mất', en: 'lost' }, { vi: 'điện thoại', en: 'my phone' }], ja: '携帯をなくしました。' }] },
  { id: 111, rank: 111, vi: 'chơi', ja: '遊ぶ', en: 'play / hang out', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Chúng ta', en: 'We' }, { vi: 'đi chơi', en: 'go hang out' }, { vi: 'nhé', en: 'OK?' }], ja: '遊びに行こう！' }] },
  { id: 112, rank: 112, vi: 'nghỉ', ja: '休む・休暇', en: 'rest / day off', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Ngày mai', en: 'Tomorrow' }, { vi: 'tôi', en: 'I' }, { vi: 'nghỉ', en: 'have a day off' }], ja: '明日は休みです。' }] },
  { id: 113, rank: 113, vi: 'sống', ja: '生きる・暮らす', en: 'live / be alive', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'sống', en: 'live' }, { vi: 'ở', en: 'in' }, { vi: 'Tokyo', en: 'Tokyo' }], ja: '私は東京に住んでいます。' }] },
  { id: 114, rank: 114, vi: 'bắt đầu', ja: '始める・始まる', en: 'start / begin', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Lớp học', en: 'Class' }, { vi: 'bắt đầu', en: 'starts' }, { vi: 'lúc', en: 'at' }, { vi: 'tám giờ', en: 'eight' }], ja: '授業は8時に始まります。' }] },
  { id: 115, rank: 115, vi: 'kết thúc', ja: '終わる', en: 'end / finish', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Phim', en: 'Movie' }, { vi: 'kết thúc', en: 'ends' }, { vi: 'lúc', en: 'at' }, { vi: 'mười giờ', en: 'ten' }], ja: '映画は10時に終わります。' }] },
  { id: 116, rank: 116, vi: 'tiếp tục', ja: '続ける', en: 'continue', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Hãy', en: 'Please' }, { vi: 'tiếp tục', en: 'continue' }, { vi: 'cố gắng', en: 'trying hard' }], ja: '引き続き頑張ってください。' }] },
  { id: 117, rank: 117, vi: 'cố gắng', ja: '頑張る・努力する', en: 'try hard', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'sẽ', en: 'will' }, { vi: 'cố gắng', en: 'do my best' }, { vi: 'hết sức', en: 'with all my might' }], ja: '精一杯頑張ります！' }] },
  { id: 118, rank: 118, vi: 'quyết định', ja: '決める', en: 'decide', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'đã quyết định', en: 'decided' }, { vi: 'chưa', en: 'yet?' }], ja: 'もう決めましたか？' }] },
  { id: 119, rank: 119, vi: 'để', ja: '〜するために・置く', en: 'in order to / put', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'học', en: 'study' }, { vi: 'để', en: 'in order to' }, { vi: 'nói', en: 'speak' }, { vi: 'tiếng Việt', en: 'Vietnamese' }], ja: 'ベトナム語を話すために勉強します。' }] },
  { id: 120, rank: 120, vi: 'lấy', ja: '取る・手に入れる', en: 'take / get', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'có thể', en: 'can' }, { vi: 'lấy', en: 'get' }, { vi: 'cho tôi', en: 'for me' }, { vi: 'một ly nước', en: 'a glass of water' }, { vi: 'không', en: '?' }], ja: '水を一杯取っていただけますか？' }] },

  // ── 121–129 食べ物・飲み物 ──
  { id: 121, rank: 121, vi: 'cà phê', ja: 'コーヒー', en: 'coffee', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'uống', en: 'drink' }, { vi: 'cà phê', en: 'coffee' }, { vi: 'mỗi sáng', en: 'every morning' }], ja: '毎朝コーヒーを飲みます。' }] },
  { id: 122, rank: 122, vi: 'trà', ja: 'お茶', en: 'tea', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'uống', en: 'drink' }, { vi: 'trà', en: 'tea' }, { vi: 'hay', en: 'or' }, { vi: 'cà phê', en: 'coffee' }], ja: 'お茶とコーヒー、どちらにしますか？' }] },
  { id: 123, rank: 123, vi: 'phở', ja: 'フォー（ベトナム麺）', en: 'pho', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Phở Hà Nội', en: 'Hanoi pho' }, { vi: 'rất', en: 'very' }, { vi: 'ngon', en: 'delicious' }], ja: 'ハノイのフォーはとても美味しいです。' }] },
  { id: 124, rank: 124, vi: 'bánh mì', ja: 'バインミー・パン', en: 'banh mi / bread', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'thích', en: 'like' }, { vi: 'ăn', en: 'eating' }, { vi: 'bánh mì', en: 'banh mi' }, { vi: 'buổi sáng', en: 'in the morning' }], ja: '朝はバインミーを食べるのが好きです。' }] },
  { id: 125, rank: 125, vi: 'thịt', ja: '肉', en: 'meat', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'không ăn', en: 'don\'t eat' }, { vi: 'thịt', en: 'meat' }], ja: '私は肉を食べません。' }] },
  { id: 126, rank: 126, vi: 'cá', ja: '魚', en: 'fish', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Cá này', en: 'This fish' }, { vi: 'tươi', en: 'fresh' }, { vi: 'lắm', en: 'very' }], ja: 'この魚はとても新鮮です。' }] },
  { id: 127, rank: 127, vi: 'rau', ja: '野菜', en: 'vegetable', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Ăn nhiều rau', en: 'Eating lots of vegetables' }, { vi: 'tốt cho', en: 'is good for' }, { vi: 'sức khỏe', en: 'health' }], ja: '野菜をたくさん食べると健康にいいです。' }] },
  { id: 128, rank: 128, vi: 'trái cây', ja: '果物', en: 'fruit', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Việt Nam', en: 'Vietnam' }, { vi: 'có', en: 'has' }, { vi: 'nhiều', en: 'many' }, { vi: 'trái cây', en: 'fruits' }, { vi: 'ngon', en: 'delicious' }], ja: 'ベトナムには美味しい果物がたくさんあります。' }] },
  { id: 129, rank: 129, vi: 'bia', ja: 'ビール', en: 'beer', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'uống', en: 'drink' }, { vi: 'bia', en: 'beer' }, { vi: 'không', en: '?' }], ja: 'ビールを飲みますか？' }] },

  // ── 130–139 場所 ──
  { id: 130, rank: 130, vi: 'bệnh viện', ja: '病院', en: 'hospital', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Bệnh viện', en: 'Hospital' }, { vi: 'gần đây', en: 'nearby' }, { vi: 'ở đâu', en: 'where' }], ja: '近くに病院はありますか？' }] },
  { id: 131, rank: 131, vi: 'chợ', ja: '市場', en: 'market', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Mẹ tôi', en: 'My mom' }, { vi: 'đi chợ', en: 'goes to market' }, { vi: 'mỗi sáng', en: 'every morning' }], ja: '母は毎朝市場に行きます。' }] },
  { id: 132, rank: 132, vi: 'cửa hàng', ja: 'お店', en: 'store / shop', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Cửa hàng này', en: 'This shop' }, { vi: 'bán', en: 'sells' }, { vi: 'gì', en: 'what' }], ja: 'このお店では何を売っていますか？' }] },
  { id: 133, rank: 133, vi: 'ngân hàng', ja: '銀行', en: 'bank', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Ngân hàng', en: 'The bank' }, { vi: 'mở cửa', en: 'opens' }, { vi: 'mấy giờ', en: 'what time' }], ja: '銀行は何時に開きますか？' }] },
  { id: 134, rank: 134, vi: 'sân bay', ja: '空港', en: 'airport', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Đến', en: 'Get to' }, { vi: 'sân bay', en: 'the airport' }, { vi: 'mất', en: 'takes' }, { vi: 'bao lâu', en: 'how long' }], ja: '空港まで何分かかりますか？' }] },
  { id: 135, rank: 135, vi: 'khách sạn', ja: 'ホテル', en: 'hotel', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Khách sạn', en: 'Hotel' }, { vi: 'của bạn', en: 'your' }, { vi: 'ở đâu', en: 'where' }], ja: 'ホテルはどこですか？' }] },
  { id: 136, rank: 136, vi: 'nhà hàng', ja: 'レストラン', en: 'restaurant', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'muốn', en: 'want to' }, { vi: 'đi', en: 'go to' }, { vi: 'nhà hàng nào', en: 'which restaurant' }], ja: 'どのレストランに行きたいですか？' }] },
  { id: 137, rank: 137, vi: 'công viên', ja: '公園', en: 'park', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Chúng ta', en: 'We' }, { vi: 'đi dạo', en: 'take a walk' }, { vi: 'ở', en: 'in' }, { vi: 'công viên', en: 'the park' }, { vi: 'nhé', en: 'OK?' }], ja: '公園を散歩しましょう。' }] },
  { id: 138, rank: 138, vi: 'phòng', ja: '部屋', en: 'room', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Phòng', en: 'Room' }, { vi: 'của tôi', en: 'my' }, { vi: 'rất', en: 'very' }, { vi: 'nhỏ', en: 'small' }], ja: '私の部屋はとても小さいです。' }] },
  { id: 139, rank: 139, vi: 'bàn', ja: 'テーブル・机', en: 'table / desk', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Cho tôi', en: 'I\'d like to' }, { vi: 'đặt bàn', en: 'reserve a table' }, { vi: 'cho', en: 'for' }, { vi: 'hai người', en: 'two people' }], ja: '2名でテーブルを予約したいです。' }] },

  // ── 140–158 形容詞・状態 ──
  { id: 140, rank: 140, vi: 'khỏe', ja: '元気な・健康な', en: 'healthy / well', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'có', en: 'be' }, { vi: 'khỏe', en: 'well' }, { vi: 'không', en: '?' }], ja: 'お元気ですか？' }] },
  { id: 141, rank: 141, vi: 'mệt', ja: '疲れた', en: 'tired', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'mệt', en: 'tired' }, { vi: 'quá', en: 'so' }], ja: 'とても疲れました。' }] },
  { id: 142, rank: 142, vi: 'vui', ja: '楽しい・嬉しい', en: 'happy / fun', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Hôm nay', en: 'Today' }, { vi: 'tôi', en: 'I' }, { vi: 'rất', en: 'very' }, { vi: 'vui', en: 'happy' }], ja: '今日はとても楽しかったです。' }] },
  { id: 143, rank: 143, vi: 'buồn', ja: '悲しい', en: 'sad', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Sao', en: 'Why' }, { vi: 'bạn', en: 'you' }, { vi: 'buồn', en: 'sad' }, { vi: 'vậy', en: 'like that' }], ja: 'なぜそんなに悲しそうなの？' }] },
  { id: 144, rank: 144, vi: 'tức', ja: '怒っている', en: 'angry', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Đừng', en: 'Don\'t' }, { vi: 'tức', en: 'be angry' }, { vi: 'nữa', en: 'anymore' }], ja: 'もう怒らないで。' }] },
  { id: 145, rank: 145, vi: 'sợ', ja: '怖い・恐れる', en: 'afraid / scared', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'sợ', en: 'am afraid of' }, { vi: 'bóng tối', en: 'darkness' }], ja: '私は暗闇が怖いです。' }] },
  { id: 146, rank: 146, vi: 'bận', ja: '忙しい', en: 'busy', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đang bận', en: 'am busy' }, { vi: 'xin lỗi', en: 'sorry' }], ja: '今忙しいです、すみません。' }] },
  { id: 147, rank: 147, vi: 'rảnh', ja: '暇な・空いている', en: 'free / not busy', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Cuối tuần', en: 'Weekend' }, { vi: 'bạn', en: 'you' }, { vi: 'có rảnh', en: 'are free' }, { vi: 'không', en: '?' }], ja: '週末は空いていますか？' }] },
  { id: 148, rank: 148, vi: 'đắt', ja: '高い（値段）', en: 'expensive', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Giá này', en: 'This price' }, { vi: 'đắt', en: 'expensive' }, { vi: 'quá', en: 'too' }], ja: 'この値段は高すぎます！' }] },
  { id: 149, rank: 149, vi: 'rẻ', ja: '安い', en: 'cheap', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Ở đây', en: 'Here' }, { vi: 'giá', en: 'prices' }, { vi: 'rẻ hơn', en: 'cheaper' }], ja: 'ここの方が値段が安いです。' }] },
  { id: 150, rank: 150, vi: 'nóng', ja: '暑い・熱い', en: 'hot', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Hôm nay', en: 'Today' }, { vi: 'nóng', en: 'hot' }, { vi: 'lắm', en: 'very' }], ja: '今日はとても暑いです！' }] },
  { id: 151, rank: 151, vi: 'lạnh', ja: '寒い・冷たい', en: 'cold', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Mùa đông', en: 'Winter' }, { vi: 'ở Hà Nội', en: 'in Hanoi' }, { vi: 'rất', en: 'very' }, { vi: 'lạnh', en: 'cold' }], ja: 'ハノイの冬はとても寒いです。' }] },
  { id: 152, rank: 152, vi: 'khó', ja: '難しい', en: 'difficult', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Tiếng Việt', en: 'Vietnamese' }, { vi: 'khó', en: 'difficult' }, { vi: 'không', en: '?' }], ja: 'ベトナム語は難しいですか？' }] },
  { id: 153, rank: 153, vi: 'dễ', ja: '簡単な', en: 'easy', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Bài này', en: 'This lesson' }, { vi: 'dễ', en: 'easy' }, { vi: 'lắm', en: 'very' }], ja: 'この課はとても簡単です。' }] },
  { id: 154, rank: 154, vi: 'đúng', ja: '正しい・合っている', en: 'correct / right', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Câu này', en: 'This sentence' }, { vi: 'đúng', en: 'correct' }, { vi: 'không', en: '?' }], ja: 'この文は正しいですか？' }] },
  { id: 155, rank: 155, vi: 'sai', ja: '間違っている', en: 'wrong', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'đã', en: 'have' }, { vi: 'sai', en: 'been wrong' }], ja: '私が間違っていました。' }] },
  { id: 156, rank: 156, vi: 'quan trọng', ja: '大切な・重要な', en: 'important', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Điều này', en: 'This thing' }, { vi: 'rất', en: 'very' }, { vi: 'quan trọng', en: 'important' }], ja: 'これはとても大切なことです。' }] },
  { id: 157, rank: 157, vi: 'thú vị', ja: '面白い・興味深い', en: 'interesting', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Văn hóa Việt Nam', en: 'Vietnamese culture' }, { vi: 'rất', en: 'very' }, { vi: 'thú vị', en: 'interesting' }], ja: 'ベトナムの文化はとても面白いです。' }] },
  { id: 158, rank: 158, vi: 'tất cả', ja: 'すべて・全部', en: 'all / everything', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Tất cả', en: 'Everything' }, { vi: 'đều', en: 'all' }, { vi: 'ổn', en: 'fine' }], ja: '全部大丈夫です。' }] },

  // ── 159–170 副詞・接続詞 ──
  { id: 159, rank: 159, vi: 'mỗi', ja: '毎〜・各', en: 'every / each', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Mỗi ngày', en: 'Every day' }, { vi: 'tôi', en: 'I' }, { vi: 'học', en: 'study' }, { vi: 'một từ mới', en: 'a new word' }], ja: '毎日新しい単語を一つ覚えます。' }] },
  { id: 160, rank: 160, vi: 'ít', ja: '少ない・ちょっと', en: 'few / a little', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'biết', en: 'know' }, { vi: 'một ít', en: 'a little' }, { vi: 'tiếng Việt', en: 'Vietnamese' }], ja: 'ベトナム語を少し知っています。' }] },
  { id: 161, rank: 161, vi: 'đủ', ja: '十分な', en: 'enough', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Thế là', en: 'That is' }, { vi: 'đủ', en: 'enough' }, { vi: 'rồi', en: 'already' }], ja: 'それで十分です。' }] },
  { id: 162, rank: 162, vi: 'hơn', ja: '〜より多い・さらに', en: 'more / than', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'cao', en: 'taller' }, { vi: 'hơn', en: 'than' }, { vi: 'tôi', en: 'me' }], ja: 'あなたは私より背が高いです。' }] },
  { id: 163, rank: 163, vi: 'nhất', ja: '最も〜（最上級）', en: 'most / -est', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Đây', en: 'This' }, { vi: 'là', en: 'is' }, { vi: 'nhà hàng', en: 'restaurant' }, { vi: 'ngon nhất', en: 'most delicious' }], ja: 'ここが一番美味しいレストランです。' }] },
  { id: 164, rank: 164, vi: 'lại', ja: 'また・再び', en: 'again / back', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'có thể', en: 'can' }, { vi: 'nói lại', en: 'say again' }, { vi: 'không', en: '?' }], ja: 'もう一度言っていただけますか？' }] },
  { id: 165, rank: 165, vi: 'rồi', ja: 'もう・すでに', en: 'already / done', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'ăn', en: 'eat' }, { vi: 'rồi', en: 'already' }], ja: 'もう食べました。' }] },
  { id: 166, rank: 166, vi: 'thật', ja: '本当に・真実', en: 'really / true', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Thật sự', en: 'Really' }, { vi: 'không', en: '?' }], ja: '本当ですか？' }] },
  { id: 167, rank: 167, vi: 'vì', ja: 'なぜなら〜・〜ので', en: 'because', pos: '接続詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'yêu', en: 'love' }, { vi: 'Việt Nam', en: 'Vietnam' }, { vi: 'vì', en: 'because' }, { vi: 'con người', en: 'the people' }, { vi: 'rất tốt', en: 'very kind' }], ja: '人がとても優しいのでベトナムが好きです。' }] },
  { id: 168, rank: 168, vi: 'hoặc', ja: 'または・あるいは', en: 'or', pos: '接続詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'muốn', en: 'want' }, { vi: 'cà phê', en: 'coffee' }, { vi: 'hoặc', en: 'or' }, { vi: 'trà', en: 'tea' }], ja: 'コーヒーかお茶、どちらにしますか？' }] },
  { id: 169, rank: 169, vi: 'mặc dù', ja: '〜にもかかわらず', en: 'although / even though', pos: '接続詞',
    examples: [{ tokens: [{ vi: 'Mặc dù', en: 'Although' }, { vi: 'mệt', en: 'tired' }, { vi: 'nhưng', en: 'but' }, { vi: 'tôi', en: 'I' }, { vi: 'vẫn', en: 'still' }, { vi: 'học', en: 'study' }], ja: '疲れていても勉強します。' }] },
  { id: 170, rank: 170, vi: 'cũng', ja: '〜も・同様に', en: 'also / too', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'cũng', en: 'also' }, { vi: 'muốn', en: 'want to' }, { vi: 'đi', en: 'go' }], ja: '私も行きたいです。' }] },

  // ── 171–178 色・時間帯 ──
  { id: 171, rank: 171, vi: 'đỏ', ja: '赤い', en: 'red', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Cờ Việt Nam', en: 'Vietnamese flag' }, { vi: 'màu', en: 'is' }, { vi: 'đỏ', en: 'red' }], ja: 'ベトナムの国旗は赤いです。' }] },
  { id: 172, rank: 172, vi: 'xanh', ja: '青い・緑の', en: 'blue / green', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Bầu trời', en: 'The sky' }, { vi: 'màu', en: 'is' }, { vi: 'xanh', en: 'blue' }], ja: '空は青いです。' }] },
  { id: 173, rank: 173, vi: 'vàng', ja: '黄色い・金色の', en: 'yellow / gold', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Hoa này', en: 'This flower' }, { vi: 'màu', en: 'is' }, { vi: 'vàng', en: 'yellow' }], ja: 'この花は黄色です。' }] },
  { id: 174, rank: 174, vi: 'trắng', ja: '白い', en: 'white', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Áo này', en: 'This shirt' }, { vi: 'màu', en: 'is' }, { vi: 'trắng', en: 'white' }], ja: 'このシャツは白いです。' }] },
  { id: 175, rank: 175, vi: 'đen', ja: '黒い', en: 'black', pos: '形容詞',
    examples: [{ tokens: [{ vi: 'Tóc cô ấy', en: 'Her hair' }, { vi: 'màu', en: 'is' }, { vi: 'đen', en: 'black' }], ja: '彼女の髪は黒いです。' }] },
  { id: 176, rank: 176, vi: 'sáng', ja: '朝・明るい', en: 'morning / bright', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Chào', en: 'Good' }, { vi: 'buổi sáng', en: 'morning' }], ja: 'おはようございます！' }] },
  { id: 177, rank: 177, vi: 'chiều', ja: '午後・夕方', en: 'afternoon / evening', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Buổi chiều', en: 'In the afternoon' }, { vi: 'tôi', en: 'I' }, { vi: 'thường', en: 'usually' }, { vi: 'đi chơi', en: 'go out' }], ja: '午後はよく出かけます。' }] },
  { id: 178, rank: 178, vi: 'tối', ja: '夜・暗い', en: 'evening / dark', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tối nay', en: 'Tonight' }, { vi: 'bạn', en: 'you' }, { vi: 'rảnh', en: 'free' }, { vi: 'không', en: '?' }], ja: '今夜は空いていますか？' }] },

  // ── 179–190 挨拶・対話表現 ──
  { id: 179, rank: 179, vi: 'xin chào', ja: 'こんにちは', en: 'hello', pos: '挨拶',
    examples: [{ tokens: [{ vi: 'Xin chào', en: 'Hello' }, { vi: 'bạn', en: 'you' }, { vi: 'có khỏe', en: 'be well' }, { vi: 'không', en: '?' }], ja: 'こんにちは、お元気ですか？' }] },
  { id: 180, rank: 180, vi: 'tạm biệt', ja: 'さようなら', en: 'goodbye', pos: '挨拶',
    examples: [{ tokens: [{ vi: 'Tạm biệt', en: 'Goodbye' }, { vi: 'hẹn', en: 'see' }, { vi: 'gặp lại', en: 'again' }], ja: 'さようなら、またね！' }] },
  { id: 181, rank: 181, vi: 'cảm ơn', ja: 'ありがとう', en: 'thank you', pos: '挨拶',
    examples: [{ tokens: [{ vi: 'Cảm ơn', en: 'Thank you' }, { vi: 'rất nhiều', en: 'very much' }], ja: 'ありがとうございます！' }] },
  { id: 182, rank: 182, vi: 'xin lỗi', ja: 'すみません・ごめんなさい', en: 'sorry / excuse me', pos: '挨拶',
    examples: [{ tokens: [{ vi: 'Xin lỗi', en: 'Excuse me' }, { vi: 'cho tôi hỏi', en: 'may I ask' }], ja: 'すみません、聞いてもいいですか？' }] },
  { id: 183, rank: 183, vi: 'không sao', ja: '大丈夫・問題ない', en: 'no problem / it\'s OK', pos: '表現',
    examples: [{ tokens: [{ vi: 'Không sao', en: 'No problem' }, { vi: 'bạn', en: 'you' }, { vi: 'đến', en: 'came' }, { vi: 'rồi là được', en: 'that\'s enough' }], ja: '来てくれたから大丈夫ですよ。' }] },
  { id: 184, rank: 184, vi: 'chúc', ja: '祝う・願う', en: 'wish / bless', pos: '動詞',
    examples: [{ tokens: [{ vi: 'Chúc', en: 'Wish' }, { vi: 'bạn', en: 'you' }, { vi: 'may mắn', en: 'good luck' }], ja: '幸運を祈っています！' }] },
  { id: 185, rank: 185, vi: 'hãy', ja: '〜してください（命令）', en: 'please / let\'s (imperative)', pos: '助詞',
    examples: [{ tokens: [{ vi: 'Hãy', en: 'Please' }, { vi: 'cẩn thận', en: 'be careful' }], ja: '気をつけてください！' }] },
  { id: 186, rank: 186, vi: 'đừng', ja: '〜しないで', en: 'don\'t (negative imperative)', pos: '助詞',
    examples: [{ tokens: [{ vi: 'Đừng', en: 'Don\'t' }, { vi: 'lo lắng', en: 'worry' }], ja: '心配しないでください。' }] },
  { id: 187, rank: 187, vi: 'vâng', ja: 'はい（丁寧）', en: 'yes (formal)', pos: '表現',
    examples: [{ tokens: [{ vi: 'Vâng', en: 'Yes' }, { vi: 'tôi', en: 'I' }, { vi: 'hiểu rồi', en: 'understand now' }], ja: 'はい、わかりました。' }] },
  { id: 188, rank: 188, vi: 'ừ', ja: 'うん（くだけた肯定）', en: 'yeah (informal)', pos: '表現',
    examples: [{ tokens: [{ vi: 'Ừ', en: 'Yeah' }, { vi: 'đúng rồi', en: 'that\'s right' }], ja: 'うん、そうだね。' }] },

  // ── 189–200 その他の重要語 ──
  { id: 189, rank: 189, vi: 'chỉ', ja: 'だけ・のみ', en: 'only / just', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'chỉ', en: 'only' }, { vi: 'có thể đợi', en: 'can wait' }, { vi: 'một phút', en: 'one minute' }], ja: '1分しか待てません。' }] },
  { id: 190, rank: 190, vi: 'vẫn', ja: 'まだ・依然として', en: 'still', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'vẫn', en: 'still' }, { vi: 'chờ', en: 'waiting for' }, { vi: 'bạn', en: 'you' }], ja: 'まだ待っています。' }] },
  { id: 191, rank: 191, vi: 'hay', ja: 'それとも・面白い', en: 'or (question) / interesting', pos: '接続詞',
    examples: [{ tokens: [{ vi: 'Bạn', en: 'You' }, { vi: 'muốn', en: 'want to' }, { vi: 'đi', en: 'go' }, { vi: 'hay', en: 'or' }, { vi: 'ở nhà', en: 'stay home' }], ja: '出かけますか、それとも家にいますか？' }] },
  { id: 192, rank: 192, vi: 'thôi', ja: '〜だけ・やめよう', en: 'just / stop / that\'s it', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Một chút', en: 'A little' }, { vi: 'thôi', en: 'only' }], ja: 'ちょっとだけ。' }] },
  { id: 193, rank: 193, vi: 'nhé', ja: '〜ね（念押し・誘い）', en: 'OK? / right? (sentence-final)', pos: '終助詞',
    examples: [{ tokens: [{ vi: 'Gặp nhau', en: 'Meet' }, { vi: 'lúc sáu giờ', en: 'at six' }, { vi: 'nhé', en: 'OK?' }], ja: '6時に会いましょうね！' }] },
  { id: 194, rank: 194, vi: 'ơi', ja: 'ねえ・〜さん（呼びかけ）', en: 'hey! / [calling particle]', pos: '間投詞',
    examples: [{ tokens: [{ vi: 'Anh ơi', en: 'Hey you' }, { vi: 'giúp tôi', en: 'help me' }, { vi: 'với', en: 'please' }], ja: 'ちょっと、助けてください！' }] },
  { id: 195, rank: 195, vi: 'sách', ja: '本', en: 'book', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'thích', en: 'like' }, { vi: 'đọc', en: 'reading' }, { vi: 'sách', en: 'books' }], ja: '本を読むのが好きです。' }] },
  { id: 196, rank: 196, vi: 'áo', ja: '服（上）・シャツ', en: 'shirt / top', pos: '名詞',
    examples: [{ tokens: [{ vi: 'Áo này', en: 'This shirt' }, { vi: 'của ai', en: 'whose' }], ja: 'これは誰の服ですか？' }] },
  { id: 197, rank: 197, vi: 'thật ra', ja: '実は・実際には', en: 'actually / in fact', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Thật ra', en: 'Actually' }, { vi: 'tôi', en: 'I' }, { vi: 'không thích', en: 'don\'t like' }, { vi: 'cà phê', en: 'coffee' }], ja: '実は私、コーヒーが苦手なんです。' }] },
  { id: 198, rank: 198, vi: 'theo', ja: '〜によると・従う', en: 'according to / follow', pos: '前置詞',
    examples: [{ tokens: [{ vi: 'Theo tôi', en: 'According to me' }, { vi: 'cách này', en: 'this way' }, { vi: 'tốt hơn', en: 'is better' }], ja: '私の考えでは、この方法が良いです。' }] },
  { id: 199, rank: 199, vi: 'luôn luôn', ja: 'いつも・常に', en: 'always', pos: '副詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'luôn luôn', en: 'always' }, { vi: 'nhớ', en: 'remember' }, { vi: 'bạn', en: 'you' }], ja: 'いつもあなたのことを思っています。' }] },
  { id: 200, rank: 200, vi: 'vài', ja: 'いくつかの・数個の', en: 'a few / some', pos: '数詞',
    examples: [{ tokens: [{ vi: 'Tôi', en: 'I' }, { vi: 'cần', en: 'need' }, { vi: 'vài phút', en: 'a few minutes' }, { vi: 'nữa', en: 'more' }], ja: 'もう少し時間をください。' }] }
];

// ── Speech ──
let viVoice = null;

function initVoices() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return;
  // Google tiếng Việt を優先、なければ vi- で始まる任意の音声
  viVoice =
    voices.find(v => v.lang.startsWith('vi') && v.name.toLowerCase().includes('google')) ||
    voices.find(v => v.lang.startsWith('vi')) ||
    null;

  const warning = document.getElementById('voiceWarning');
  if (!warning) return;
  if (viVoice) {
    warning.hidden = true;
  } else {
    warning.hidden = false;
    warning.textContent =
      '⚠️ ベトナム語音声（vi-VN）が見つかりません。Chrome を使用するか、OS にベトナム語音声をインストールしてください。';
  }
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
          <button class="copy-btn" data-text="${sentence}" title="ベトナム語文をコピー">📋</button>
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

    card.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(btn.dataset.text);
        } catch {
          const ta = document.createElement('textarea');
          ta.value = btn.dataset.text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        btn.textContent = '✓';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = '📋'; btn.classList.remove('copied'); }, 1500);
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
