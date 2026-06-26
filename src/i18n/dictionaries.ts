const dictionaries = {
  zh: {
    heroTitle: '发现最适合您的\n日本周游券',
    heroSubtitle: '智能挑选省钱日本周游券，助您轻松无忧规划行程。',
    calcTitle: '大师周游券计算器',
    calcDesc: '先回答“我该不该买券”',
    mapTitle: ' 周游券地图',
    libraryTitle: '票券资料库',
    contentTitle: '为什么选择Find MyJR-Pass？',
    contentDesc: '多语种一站式服务，省时省力',
    featuresList: [
      {
        title: '智能推荐计算',
        desc: '根据出发地、目的地及天数，AI极速为您推荐最佳行程与最省钱的周游券组合。'
      },
      {
        title: '实时价格对比',
        desc: '同步多平台售价，一眼看清各个周游券的优惠力度，不再为比价发愁。'
      },
      {
        title: '真实经验分享',
        desc: '汇集真实用户的行程心得与点评，避坑指南让您的日本之旅更顺畅。'
      }
    ],
    omikujiTitle: '行前抽签',
    omikujiDesc: '轻互动，不抢主线 CTA',
    proCalcTitle: '高级计算器',
    viewAllPasses: '查看所有周游券',
    popularPasses: '热门周游券推荐',
    buyNow: '官方购买',
    details: '查看详情',
    priceAdult: '成人价格',
    priceChild: '儿童价格',
    duration: '使用天数',
    validity: '使用期限',
    coverage: '覆盖范围',
    audience: '适用人群',
    trainTypes: '可乘车种',
    omikujiDraw: '开始抽签',
    omikujiDrawing: '占卜中...',
    omikujiInstruction: '点击下方按钮，抽取属于您的旅途运势',
    omikujiGood: '吉',
    omikujiBad: '忌',
    omikujiSuggestions: '建议事项',
    omikujiAvoid: '避免事项',
    omikujiLegend: ['大吉', '中吉', '小吉'],
    omikujiResultsData: [
      {
        type: '大吉',
        message: '您的日本之旅将充满惊喜与美好！',
        advice: '大胆探索，尝试新体验，好运连连！',
        suggestions: ['尝试当地特色美食', '参观传统神社和寺庙', '体验温泉文化', '购买纪念品和特产'],
        avoid: ['过度消费', '忽视安全规则', '错过预订时间', '忽视当地文化']
      },
      {
        type: '中吉',
        message: '旅途顺利，会有不错的收获！',
        advice: '保持积极心态，享受每一刻！',
        suggestions: ['制定详细的行程计划', '学习基本日语问候语', '体验当地文化活动', '记录美好时光'],
        avoid: ['匆忙赶路', '忽视当地习俗', '过度依赖手机导航', '忽视个人安全']
      },
      {
        type: '小吉',
        message: '平稳愉快的旅程在等待您！',
        advice: '细心规划，稳中求进！',
        suggestions: ['提前预订住宿和交通', '准备应急联系方式', '了解当地天气情况', '保持开放心态'],
        avoid: ['临时改变重要计划', '忽视健康管理', '与当地人发生冲突', '忽视天气变化']
      },
      {
        type: '吉',
        message: '旅途会有小惊喜等着您！',
        advice: '保持开放心态，留意身边的美好！',
        suggestions: ['关注细节和美好瞬间', '与当地人友好交流', '尝试新的交通方式', '保持感恩之心'],
        avoid: ['抱怨小问题', '忽视安全提醒', '过度紧张', '忽视时间管理']
      },
      {
        type: '凶',
        message: '需要小心谨慎，但不必过分担心！',
        advice: '提前做好充分准备，谨慎行事！',
        suggestions: ['购买旅行保险', '准备应急资金', '学习基本急救知识', '保持冷静和耐心'],
        avoid: ['冒险行为', '忽视安全警告', '独自前往偏僻地区', '过度依赖他人']
      }
    ],
    quickCalc: {
      title: '简易周游券计算器',
      subtitle: '快速估算是否值得买券',
      from: '出发地',
      to: '目的地',
      travelerCount: '同行旅客人数',
      person: '人',
      calculating: '智能比对中...',
      startEstimate: '开始快速估算',
      route: '路线',
      passengers: '人数',
      roundTrip: '往返',
      regularTicket: '常规购票 (单买车票)',
      recommendedPassLabel: '推荐周游券',
      recommendPassTitle: '🎉 强烈推荐购买周游券！',
      recommendPassSave: '使用该通票，预计可节省',
      recommendPassSaveSuffix: '！',
      avoidPassTitle: '⚠️ 建议直接购买单程车票',
      avoidPassCost: '使用该通票反而需多花',
      avoidPassCostSuffix: '。',
      reestimate: '重新估算',
      proCalcLink: '大师计算器定制',
      cities: {
        '东京': '东京', '大阪': '大阪', '京都': '京都', '金泽': '金泽', '广岛': '广岛', '福冈': '福冈', '熊本': '熊本'
      },
      passes: {
        'noPass': '无需长途周游券',
        'jrPass': 'JR 全日本铁路通票 (7日)',
        'hokurikuArch': '北陆拱型铁路周游券 (7日)',
        'kansaiHiroshima': '关西-广岛地区铁路周游券 (5日)',
        'northKyushu': '北九州地区铁路周游券 (5日)',
        'regularTicket': '常规单程票',
        'kansaiHokuriku': '关西-北陆地区铁路周游券 (7日)',
        'hiroshimaYamaguchi': '广岛-山口地区铁路周游券 (5日)',
        'sanyoSanyin': '山阳-山阴地区铁路周游券 (7日)'
      },
      coverage: {
        'sameCity': '您的出发地与目的地相同，无需购买长途周游券。建议在市内使用交通IC卡（如Suica或ICoca）或一日地铁券即可。',
        'tokyoOsaka': '包含东海道新干线往返。由于通票价格上涨，目前单点往返推荐购买单人车票。',
        'tokyoKyoto': '包含东海道新干线往返。由于通票大幅涨价，仅该单次往返推荐购买单人车票更便宜。',
        'tokyoKanazawa': '票价基本持平。若行程中包含轻井泽、富山等地，使用此周游券极其划算。',
        'osakaHiroshima': '极力推荐！周游券价格远低于往返票价，还可无限次搭乘该区域内的新干线与JR电车。',
        'kumamotoFukuoka': '如果行程中还包含别府、由布院等其他九州城市，强烈推荐使用该周游券。',
        'kyotoOsaka': '两地距离很近，搭乘快速电车仅需30分钟，价格十分便宜，不需要购买周游券。',
        'osakaKanazawa': '往返票价接近周游券。如果行程中延伸到富山、福井等地，推荐使用此周游券。',
        'kyotoKanazawa': '往返票价略低于周游券。如果旅途中还计划去大阪、富山等地，使用周游券会更合算。',
        'tokyoHiroshima': '往返票价约¥38,800。若行程中增加东京至广岛之间的一站（如京都、大阪、姬路等），推荐购买全日本通票。',
        'tokyoFukuoka': '单程往返常规新干线票价已极其接近7日全日本通票的价格。强烈推荐购买通票以获得自由出行的便利。',
        'hiroshimaFukuoka': '超值推荐！周游券比常规往返常规车票还要便宜¥3,000，且5天内可无限搭乘山阳新干线！',
        'kumamotoTokyo': '往返单买车票与全日本7日通票价格完全一样。毫无疑问推荐购买通票，可省去单次排队购票烦恼。',
        'osakaFukuoka': '超级划算！周游券比常规往返省下¥8,000，且支持搭乘最速的 Nozomi 新干线！',
        'default': '跨越多个区域的长途旅行，建议使用下方更详细的“大师计算器”定制具体行程。'
      }
    }
  },
  en: {
    heroTitle: 'Trilingual Japan Rail Pass AI Assistant',
    heroSubtitle: 'Calculate, Compare, and Buy with confidence',
    calcTitle: 'Free Rail Pass Calculator',
    calcDesc: 'Find out if a pass is worth it for you',
    mapTitle: 'Map Query: Connect Destinations with Passes',
    libraryTitle: 'Ticket Library',
    contentTitle: 'Discover Japan',
    contentDesc: 'Organized by scenery and itineraries',
    featuresList: [
      {
        title: 'Smart Recommendation & Calculation',
        desc: 'Based on your starting point, destination, and travel days, AI quickly recommends the best itinerary and most cost-effective pass combination.'
      },
      {
        title: 'Real-time Price Comparison',
        desc: 'Sync prices from multiple platforms to see at a glance the discount levels of various passes. No more worries about comparing prices.'
      },
      {
        title: 'Real Experience Sharing',
        desc: 'Gather travel insights and reviews from real users. Our tips and guides ensure a smoother journey in Japan.'
      }
    ],
    omikujiTitle: 'Omikuji: Fortune Telling',
    omikujiDesc: 'A light pre-trip interaction',
    proCalcTitle: 'Pro Route Optimizer',
    viewAllPasses: 'View All Passes',
    popularPasses: 'Popular Passes',
    buyNow: 'Buy Official',
    details: 'View Details',
    priceAdult: 'Adult Price',
    priceChild: 'Child Price',
    duration: 'Duration',
    validity: 'Validity',
    coverage: 'Coverage',
    audience: 'Target Audience',
    trainTypes: 'Train Types',
    omikujiDraw: 'Draw a Fortune',
    omikujiDrawing: 'Divining...',
    omikujiInstruction: 'Click the button below to draw your travel fortune',
    omikujiGood: 'Luck',
    omikujiBad: 'Avoid',
    omikujiSuggestions: 'Suggested Activities',
    omikujiAvoid: 'Things to Avoid',
    omikujiLegend: ['Great', 'Middle', 'Small'],
    omikujiResultsData: [
      {
        type: 'Great Blessing',
        message: 'Your trip to Japan will be full of wonderful surprises!',
        advice: 'Explore boldly and try new experiences. Good luck awaits!',
        suggestions: ['Try local specialties', 'Visit traditional shrines & temples', 'Experience onsen culture', 'Buy souvenirs'],
        avoid: ['Overspending', 'Ignoring safety rules', 'Missing reservations', 'Disregarding local customs']
      },
      {
        type: 'Middle Blessing',
        message: 'Your journey will be smooth and rewarding!',
        advice: 'Keep a positive mindset and enjoy every moment!',
        suggestions: ['Plan your itinerary well', 'Learn basic Japanese greetings', 'Join local cultural events', 'Capture beautiful moments'],
        avoid: ['Rushing through places', 'Ignoring local etiquette', 'Over-relying on navigation', 'Neglecting personal safety']
      },
      {
        type: 'Small Blessing',
        message: 'A pleasant and peaceful trip awaits you!',
        advice: 'Plan carefully and proceed steadily.',
        suggestions: ['Book accommodation/transit early', 'Prepare emergency contacts', 'Check the local weather', 'Keep an open mind'],
        avoid: ['Changing major plans abruptly', 'Neglecting health', 'Arguing with locals', 'Ignoring weather changes']
      },
      {
        type: 'Blessing',
        message: 'Little surprises are waiting for you on this trip!',
        advice: 'Stay open-minded and notice the beauty around you.',
        suggestions: ['Pay attention to details', 'Chat with locals', 'Try new transport modes', 'Stay grateful'],
        avoid: ['Complaining about minor things', 'Ignoring safety signs', 'Being too tense', 'Poor time management']
      },
      {
        type: 'Curse',
        message: 'Be careful, but no need to worry too much!',
        advice: 'Prepare well in advance and act cautiously.',
        suggestions: ['Buy travel insurance', 'Prepare emergency funds', 'Learn basic first aid', 'Stay calm and patient'],
        avoid: ['Taking risks', 'Ignoring warnings', 'Going to remote areas alone', 'Depending too much on others']
      }
    ],
    quickCalc: {
      title: 'Quick Pass Calculator',
      subtitle: 'Estimate if a pass is worth it',
      from: 'From',
      to: 'To',
      travelerCount: 'Travelers',
      person: 'person(s)',
      calculating: 'Calculating...',
      startEstimate: 'Start Estimate',
      route: 'Route',
      passengers: 'Travelers',
      roundTrip: 'Round trip',
      regularTicket: 'Regular Ticket (Single)',
      recommendedPassLabel: 'Recommended Pass',
      recommendPassTitle: '🎉 Highly Recommend Buying a Pass!',
      recommendPassSave: 'Using this pass, you can save ',
      recommendPassSaveSuffix: '!',
      avoidPassTitle: '⚠️ Suggest Buying Single Tickets',
      avoidPassCost: 'Using a pass will cost an extra ',
      avoidPassCostSuffix: '.',
      reestimate: 'Re-estimate',
      proCalcLink: 'Customize in Pro Calculator',
      cities: {
        '东京': 'Tokyo', '大阪': 'Osaka', '京都': 'Kyoto', '金泽': 'Kanazawa', '广岛': 'Hiroshima', '福冈': 'Fukuoka', '熊本': 'Kumamoto'
      },
      passes: {
        'noPass': 'No Long-distance Pass Needed',
        'jrPass': 'JR Whole Japan Rail Pass (7-Day)',
        'hokurikuArch': 'Hokuriku Arch Pass (7-Day)',
        'kansaiHiroshima': 'Kansai-Hiroshima Area Pass (5-Day)',
        'northKyushu': 'Northern Kyushu Area Pass (5-Day)',
        'regularTicket': 'Regular Single Ticket',
        'kansaiHokuriku': 'Kansai-Hokuriku Area Pass (7-Day)',
        'hiroshimaYamaguchi': 'Hiroshima-Yamaguchi Area Pass (5-Day)',
        'sanyoSanyin': 'Sanyo-San\'in Area Pass (7-Day)'
      },
      coverage: {
        'sameCity': 'Your origin and destination are the same. No long-distance pass is needed. We recommend using a local transit IC card (such as Suica or ICOCA) or a 1-day subway pass.',
        'tokyoOsaka': 'Includes Tokaido Shinkansen round trip. Due to recent price hikes of the JR Pass, buying regular tickets is cheaper for this single round trip.',
        'tokyoKyoto': 'Includes Tokaido Shinkansen round trip. Due to recent price hikes, buying regular tickets is cheaper for just this single round trip.',
        'tokyoKanazawa': 'The ticket price is almost the same. If your itinerary includes Karuizawa, Toyama, etc., using this pass is extremely cost-effective.',
        'osakaHiroshima': 'Highly recommended! The pass price is far below the round-trip ticket cost, and you get unlimited rides on the Shinkansen and JR trains in the area.',
        'kumamotoFukuoka': 'If your itinerary includes other Kyushu cities like Beppu and Yufuin, this pass is highly recommended.',
        'kyotoOsaka': 'The distance between the two cities is very short. Rapid trains take only 30 minutes and are very cheap. No rail pass is needed.',
        'osakaKanazawa': 'The round-trip ticket cost is close to the pass price. If you plan to extend your trip to Toyama or Fukui, this pass is recommended.',
        'kyotoKanazawa': 'The round-trip cost is slightly below the pass price. If you also plan to visit Osaka or Toyama during your trip, the pass is a better deal.',
        'tokyoHiroshima': 'The round-trip cost is about ¥38,800. If you add one stop (e.g., Kyoto, Osaka, Himeji) between Tokyo and Hiroshima, buying the Japan Rail Pass is recommended.',
        'tokyoFukuoka': 'A single round-trip ticket cost is extremely close to the 7-day Japan Rail Pass. Buying the pass is highly recommended for travel flexibility.',
        'hiroshimaFukuoka': 'Superb value! The pass is ¥3,000 cheaper than a regular round-trip ticket, and offers 5 days of unlimited rides on the Sanyo Shinkansen.',
        'kumamotoTokyo': 'The round-trip ticket price is exactly the same as the 7-day Japan Rail Pass. Buying the pass is highly recommended to save the hassle of queuing for individual tickets.',
        'osakaFukuoka': 'Huge savings! The pass saves you ¥8,000 compared to regular tickets and allows you to ride the fastest Nozomi Shinkansen.',
        'default': 'For long-distance travel crossing multiple regions, we recommend using the detailed "Pro Calculator" below to customize your route.'
      }
    }
  },
  ja: {
    heroTitle: '3ヶ国語対応 JRパス AIアシスタント',
    heroSubtitle: '計算して、比べて、お得に購入',
    calcTitle: 'マスター周遊券計算機',
    calcDesc: '「パスを買うべきか」にお答えします',
    mapTitle: 'マップ検索：目的地とパスを繋ぐ',
    libraryTitle: 'チケットライブラリ',
    contentTitle: '日本の魅力',
    contentDesc: '風景や旅程からパスを探す',
    featuresList: [
      {
        title: 'スマート推薦・計算',
        desc: '出発地、目的地、旅行日数に基づき、AIが最適な行程と最もお得な周遊券の組み合わせを素早くおすすめします。'
      },
      {
        title: 'リアルタイム価格比較',
        desc: '複数プラットフォームの価格を同期し、各パスの割引率を一目で確認できるため、価格比較に悩む必要はありません。'
      },
      {
        title: 'リアルな体験談の共有',
        desc: '実際のユーザーの旅行記やレビューを収集。トラブル回避のヒントで、日本旅行をよりスムーズに。'
      }
    ],
    omikujiTitle: '旅行前のおみくじ',
    omikujiDesc: '楽しい事前体験',
    proCalcTitle: 'プロルートオプティマイザー',
    viewAllPasses: 'すべてのパスを見る',
    popularPasses: '人気のパス',
    buyNow: '公式購入',
    details: '詳細を見る',
    priceAdult: '大人料金',
    priceChild: '子供料金',
    duration: '利用期間',
    validity: '有効期限',
    coverage: '対象エリア',
    audience: '対象者',
    trainTypes: '利用可能列車',
    omikujiDraw: 'おみくじを引く',
    omikujiDrawing: '占っています...',
    omikujiInstruction: '下のボタンをクリックして、旅の運勢を占いましょう',
    omikujiGood: '吉',
    omikujiBad: '忌',
    omikujiSuggestions: 'おすすめ',
    omikujiAvoid: '避けるべきこと',
    omikujiLegend: ['大吉', '中吉', '小吉'],
    omikujiResultsData: [
      {
        type: '大吉',
        message: '日本での旅は驚きと喜びに満ちたものになるでしょう！',
        advice: '大胆に探索し、新しい体験に挑戦してください。幸運が続きます！',
        suggestions: ['地元の名物を味わう', '伝統的な神社仏閣を訪れる', '温泉文化を体験する', 'お土産を買う'],
        avoid: ['無駄遣い', '安全規則を無視する', '予約時間に遅れる', '現地の文化を軽視する']
      },
      {
        type: '中吉',
        message: '順調な旅になり、素晴らしい収穫があるでしょう！',
        advice: 'ポジティブな気持ちを保ち、すべての瞬間を楽しんでください！',
        suggestions: ['詳細な旅程を立てる', '基本的な日本語の挨拶を学ぶ', '地元の文化イベントに参加する', '素敵な思い出を記録する'],
        avoid: ['慌ただしく移動する', '地元の習慣を無視する', 'ナビに頼りすぎる', '安全への配慮を怠る']
      },
      {
        type: '小吉',
        message: '穏やかで楽しい旅があなたを待っています！',
        advice: '慎重に計画し、着実に進めましょう。',
        suggestions: ['宿泊と交通を早めに予約する', '緊急連絡先を準備する', '現地の天気を把握する', '柔軟な心を持つ'],
        avoid: ['重要な予定を急に変更する', '体調管理を怠る', '地元の人とトラブルを起こす', '天候の変化を無視する']
      },
      {
        type: '吉',
        message: '旅の途中で小さなサプライズが待っています！',
        advice: '柔軟な心を持ち、周りの美しさに気付きましょう。',
        suggestions: ['細部や美しい瞬間に注目する', '地元の人と友好的に交流する', '新しい交通手段を試す', '感謝の気持ちを忘れない'],
        avoid: ['些細なことで文句を言う', '安全の注意書きを無視する', '過度に緊張する', '時間管理を怠る']
      },
      {
        type: '凶',
        message: '注意が必要ですが、心配しすぎることはありません！',
        advice: '事前にしっかり準備し、慎重に行動しましょう！',
        suggestions: ['旅行保険に加入する', '予備の資金を準備する', '基本的な応急処置を学ぶ', '冷静さと忍耐を保つ'],
        avoid: ['危険な行為', '警告を無視する', '一人で人里離れた場所に行く', '他人に頼りすぎる']
      }
    ],
    quickCalc: {
      title: '簡易パス計算機',
      subtitle: 'パスが必要か素早く見積もる',
      from: '出発地',
      to: '目的地',
      travelerCount: '同行人数',
      person: '人',
      calculating: '計算中...',
      startEstimate: '見積もりを開始',
      route: 'ルート',
      passengers: '人数',
      roundTrip: '往復',
      regularTicket: '通常きっぷ (個別購入)',
      recommendedPassLabel: 'おすすめの周遊券',
      recommendPassTitle: '🎉 周遊券の購入を強くおすすめします！',
      recommendPassSave: 'このパスを使用すると、約',
      recommendPassSaveSuffix: 'お得になります！',
      avoidPassTitle: '⚠️ 通常きっぷの個別購入をおすすめします',
      avoidPassCost: 'このパスを使用すると、逆に',
      avoidPassCostSuffix: '高くなります。',
      reestimate: '再計算',
      proCalcLink: 'マスター計算機でカスタマイズ',
      cities: {
        '东京': '東京', '大阪': '大阪', '京都': '京都', '金泽': '金沢', '广岛': '広島', '福冈': '福岡', '熊本': '熊本'
      },
      passes: {
        'noPass': '長距離パス不要',
        'jrPass': 'JR 全日本鉄道パス (7日間)',
        'hokurikuArch': '北陸アーチパス (7日間)',
        'kansaiHiroshima': '関西・広島エリアパス (5日間)',
        'northKyushu': '北九州エリアパス (5日間)',
        'regularTicket': '通常片道切符',
        'kansaiHokuriku': '関西・北陸エリアパス (7日間)',
        'hiroshimaYamaguchi': '広島・山口エリアパス (5日間)',
        'sanyoSanyin': '山陽・山陰エリアパス (7日間)'
      },
      coverage: {
        'sameCity': '出発地と目的地が同じため、長距離周遊券は不要です。市内観光には交通系ICカード（SuicaやICOCAなど）や地下鉄1日乗車券の利用をおすすめします。',
        'tokyoOsaka': '東海道新幹線の往復を含みます。JRパスの値上げに伴い、この往復のみの場合は通常きっぷを個別購入する方が安くなります。',
        'tokyoKyoto': '東海道新幹線の往復を含みます。JRパスの大幅値上げに伴い、この往復のみの場合は通常きっぷを個別購入する方が安くなります。',
        'tokyoKanazawa': 'きっぷ代金とパスの価格がほぼ同等です。軽井沢や富山などへの途中下車が含まれる場合、このパスの利用が非常にお得です。',
        'osakaHiroshima': '強くおすすめします！パスの価格が往復きっぷ代を大幅に下回り、エリア内の新幹線やJR線が乗り放題になります。',
        'kumamotoFukuoka': '別府や由布院など、九州の他の都市を巡る行程が含まれる場合、このパスの利用を強くおすすめします。',
        'kyotoOsaka': '両都市間は非常に近く、新快速で約30分、料金も安いため、周遊券を購入する必要はありません。',
        'osakaKanazawa': '往復料金がパスの価格に近いです。富山や福井などへ足を延ばす場合は、このパスの利用がおすすめです。',
        'kyotoKanazawa': '往復料金がパスの価格をわずかに下回ります。旅程に大阪や富山などが含まれる場合は、パスを利用する方がお得です。',
        'tokyoHiroshima': '往復料金は約38,800円です。東京〜広島間で京都、大阪、姫路などに途中下車する場合は、全日本パスの購入をおすすめします。',
        'tokyoFukuoka': '新幹線の往復料金が、全日本パス（7日間）の価格に非常に近くなります。自由な旅程を組むためにも、パスの購入を強くおすすめします。',
        'hiroshimaFukuoka': '非常にお得です！通常の往復きっぷより3,000円安くなり、5日間山陽新幹線が乗り放題になります。',
        'kumamotoTokyo': '往復のきっぷ料金が全日本パス（7日間）の価格と完全に一致します。きっぷを都度購入する手間を省くためにも、パスの購入をおすすめします。',
        'osakaFukuoka': '非常にお得です！通常のきっぷより8,000円安くなり、最速の「のぞみ」新幹線にも乗車可能です。',
        'default': '複数のエリアをまたぐ長距離旅行の場合は、以下の「マスター計算機」で行程に合わせた詳細な見積もりを行うことをおすすめします。'
      }
    }
  }
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries['en'];
