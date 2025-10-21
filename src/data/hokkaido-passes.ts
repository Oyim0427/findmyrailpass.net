import { JRPass } from '@/types/pass';

// 北海道地区周游券
export const hokkaidoPasses: JRPass[] = [
  {
    id: 'hokkaido-rail-pass-5day',
    name: {
      en: 'Hokkaido Rail Pass 5-Day',
      jp: '北海道铁路周游券5日券',
      cn: '北海道铁路周游券5日券'
    },
    description: '北海道全域的5日周游券，最经典北海道周游券，覆盖北海道所有JR线路。',
    price: {
      adult: {
        regular: 23000,
        advance: 22000
      },
      child: {
        regular: 11500,
        advance: 11000
      }
    },
    duration: [5],
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass-5day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道全域',
      '最经典北海道周游券',
      '5日连续使用',
      '覆盖北海道所有JR线路',
      '性价比高'
    ],
    disadvantages: [
      '仅限北海道地区',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行',
      '可游览北海道所有景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#hrp' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '经典周游券', '预购有优惠'],
    sortOrder: 1
  },
  {
    id: 'hokkaido-rail-pass-7day',
    name: {
      en: 'Hokkaido Rail Pass 7-Day',
      jp: '北海道铁路周游券7日券',
      cn: '北海道铁路周游券7日券'
    },
    description: '北海道全域的7日周游券，最经典北海道周游券，覆盖北海道所有JR线路。',
    price: {
      adult: {
        regular: 29000,
        advance: 28000
      },
      child: {
        regular: 14500,
        advance: 14000
      }
    },
    duration: [7],
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass-7day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道全域',
      '最经典北海道周游券',
      '7日连续使用',
      '覆盖北海道所有JR线路',
      '性价比高'
    ],
    disadvantages: [
      '仅限北海道地区',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行',
      '可游览北海道所有景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#hrp' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '经典周游券', '预购有优惠'],
    sortOrder: 2
  },
  {
    id: 'hokkaido-rail-pass-10day',
    name: {
      en: 'Hokkaido Rail Pass 10-Day',
      jp: '北海道铁路周游券10日券',
      cn: '北海道铁路周游券10日券'
    },
    description: '北海道全域的10日周游券，最经典北海道周游券，覆盖北海道所有JR线路。',
    price: {
      adult: {
        regular: 38000,
        advance: 37000
      },
      child: {
        regular: 19000,
        advance: 18500
      }
    },
    duration: [10],
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass-10day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道全域',
      '最经典北海道周游券',
      '10日连续使用',
      '覆盖北海道所有JR线路',
      '性价比高'
    ],
    disadvantages: [
      '仅限北海道地区',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行',
      '可游览北海道所有景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#hrp' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '经典周游券', '预购有优惠'],
    sortOrder: 3
  },
  {
    id: 'sapporo-furano-area-pass',
    name: {
      en: 'Sapporo-Furano Area Pass',
      jp: '札幌・富良野地区周游券',
      cn: '札幌・富良野地区周游券'
    },
    description: '札幌、富良野、美瑛的4日周游券，夏季花田热门路线，适合夏季北海道旅行。',
    price: {
      adult: {
        regular: 12000,
      },
      child: {
        regular: 6000,
      }
    },
    duration: [4],
    coverage: {
      regions: ['札幌', '富良野', '美瑛', '小樽', '旭川', '新千岁机场'],
      map: '/images/coverage/sapporo-furano-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖札幌、富良野、美瑛',
      '夏季花田热门路线',
      '4天连续使用',
      '适合夏季北海道旅行',
      '价格合理'
    ],
    disadvantages: [
      '仅限札幌、富良野、美瑛地区',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合夏季北海道旅行',
      '可游览札幌、富良野、美瑛',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#furano' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['夏季花田', '札幌富良野', '美瑛观光','预购有优惠'],
    sortOrder: 4,
    validityPeriod: {
      startDate: '2024-06-01',
      endDate: '2024-09-30',
      description: '夏季限定期间'
    }
  },
  {
    id: 'sapporo-noboribetsu-pass',
    name: {
      en: 'Sapporo-Noboribetsu Pass',
      jp: '札幌・登别周游券',
      cn: '札幌・登别周游券'
    },
    description: '札幌、登别的2日周游券，温泉观光向，适合温泉度假之旅。',
    price: {
      adult: {
        regular: 11000,
      },
      child: {
        regular: 5500,
      }
    },
    duration: [2],
    coverage: {
      regions: ['札幌', '登别','小樽','新千岁机场'],
      map: '/images/coverage/sapporo-noboribetsu-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖札幌、登别',
      '温泉观光向',
      '2天连续使用',
      '适合温泉度假之旅',
      '价格合理'
    ],
    disadvantages: [
      '仅限札幌、登别地区',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合温泉度假之旅',
      '可游览札幌、登别',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#noboribetsu' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['温泉度假', '札幌登别', '温泉观光','预购有优惠'],
    sortOrder: 5
  },
  {
    id: 'jr-east-south-hokkaido-rail-pass-6day',
    name: {
      en: 'JR East-South Hokkaido Rail Pass 6-Day',
      jp: 'JR东日本・南北海道铁路周游券 6日券',
      cn: 'JR东日本・南北海道铁路周游券6日券'
    },
    description: '东日本 + 南北海道的6日周游券，连接东京、仙台、函馆，覆盖东北和北海道南部地区。',
    price: {
      adult: {
        regular: 35370,
      },
      child: {
        regular: 17680,
      }
    },
    duration: [6],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['东京', '仙台', '函馆', '东北', '北海道南部'],
      map: '/images/coverage/jr-east-south-hokkaido-rail-pass-6day.png'
    },
    targetAudience: ['跨地区旅行者', '新干线体验者', '深度游爱好者'],
    trainTypes: ['东北新干线', '北海道新干线', '特急电车', '普通电车'],
    advantages: [
      '连接东京、仙台、函馆',
      '覆盖东北和北海道南部',
      '包含东北新干线和北海道新干线',
      '6天连续使用',
      '跨地区旅行便利'
    ],
    disadvantages: [
      '仅限东北和北海道南部',
      '不包含北海道北部',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合东北和北海道南部旅行',
      '可游览东京、仙台、函馆',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jreast.co.jp/zh-CHS/multi/pass/easthokkaido.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.eki-net.com/zh-CHS/jreast-train-reservation/reserve/wb/PurchaseTicketSelect/Index', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['东北北海道', '东京仙台函馆', '跨地区旅行'],
    sortOrder: 6
  },
  {
    id: 'sapporo-subway-1day',
    name: {
      en: 'Sapporo Subway One-day Pass',
      jp: '札幌市営地下鉄 1日乗車券',
      cn: '札幌市营地铁全线一日券'
    },
    description: '札幌地铁全线路的一日券，适合札幌市内一日游。',
    price: {
      adult: {
        regular: 830,
      },
      child: {
        regular: 420,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['札幌', '札幌地铁全线路'],
      map: '/images/coverage/sapporo-subway-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁'],
    advantages: [
      '覆盖札幌地铁全线路',
      '一自然日有效',
      '价格合理',
      '适合札幌市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限札幌地铁',
      '不包含JR线路',
      '不包含巴士',
      '仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游',
      '可游览札幌主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '札幌地铁官方', url: 'https://www.city.sapporo.jp/st/josyaken/card.html#ichinichi' }
    ],
    purchaseLinks: [
      { name: '札幌地铁官方', url: 'https://www.city.sapporo.jp/st/josyaken/ticket_h.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌全线一日游', '现金支付','购票机可购买'],
    sortOrder: 7
  },
  {
    id: 'toei-subway-2day',
    name: {
      en: 'Weekends Subway One-day Pass',
      jp: 'ドニチカキップ',
      cn: '休息日限定地铁全线一日券'
    },
    description: '休息日限定地铁全线的一日券，适合假期来札幌市内一日游。',
    price: {
      adult: {
        regular: 520,
      },
      child: {
        regular: 260,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['札幌', '札幌地铁全线路'],
      map: '/images/coverage/sapporo-subway-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁'],
    advantages: [
      '覆盖札幌地铁全线路',
      '一自然日有效',
      '价格划算',
      '适合札幌市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限札幌地铁',
      '不包含JR线路',
      '不包含巴士',
      '仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游',
      '可游览札幌主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '札幌地铁官方', url: 'https://www.city.sapporo.jp/st/josyaken/card.html#donichika' }
    ],
    purchaseLinks: [
      { name: '札幌地铁官方', url: 'https://www.city.sapporo.jp/st/josyaken/ticket_h.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '现金支付', '地铁随便坐','购票机可购买'],
    sortOrder: 8,
    isLimitedPeriod: true
  },
  {
    id: 'hakodate-travel-passport',
    name: {
      en: 'Hakodate Travel Passport',
      jp: 'はこだて旅するパスポート',
      cn: '函馆旅行一日券'
    },
    description: '函馆地区的周游券，包含函馆市内交通和主要景点门票，适合函馆深度游。',
    price: {
      adult: {
        regular: 3000,
      },
      child: {
        regular: 1500,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['函館','五稜郭','七飯','大沼公園','森','八雲','長万部','新函館北斗','木古内','奥津軽いまべつ'],
      map: '/images/coverage/hakodate-travel-passport.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['巴士', '观光电车','普通电车'],
    advantages: [
      '包含函馆市内巴士',
      '包含函馆山缆车',
      '包含五稜郭公园门票',
      '一自然日有效',
      '价格合理'
    ],
    disadvantages: [
      '仅限函馆地区',
      '不包含特急电车',
      '仅限一自然日使用'
    ],
    tips: [
      '适合函馆及周围地区深度游',
      '可游览函馆主要景点',
      '建议提前规划路线',
      '注意各景点的开放时间'
    ],
    officialLinks: [
      { name: '函馆观光协会', url: 'https://www.hakodate.travel/zh/guide/transportation/' }
    ],
    purchaseLinks: [
      { name: '函馆观光协会', url: 'https://www.hakodate.travel/zh/guide/transportation/', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆深度游', '电子票有优惠', '市内交通', '一日游'],
    sortOrder: 9
  },
  {
    id: 'hokkaido-free-pass',
    name: {
      en: 'Hokkaido Free Pass',
      jp: '北海道フリーパス',
      cn: '北海道自由券'
    },
    description: '北海道全域的自由券，覆盖北海道所有JR线路，适合北海道全域旅行。',
    price: {
      adult: {
        regular: 23000,
      },
      child: {
        regular: 11500,
      }
    },
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-free-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道全域',
      '5日连续使用',
      '覆盖北海道所有JR线路',
      '性价比高'
    ],
    disadvantages: [
      '仅限北海道地区',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行',
      '可游览北海道所有景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '经典周游券', '预购有优惠'],
    sortOrder: 10
  },
  {
    id: 'hokuhoku-one-day-stroll-pass',
    name: {
      en: 'Hokuhoku One-day Stroll Pass',
      jp: '道北一日散歩きっぷ',
      cn: '道北一日散步券'
    },
    description: '道北地区的一日散步券，适合道北地区一日游，包含旭川、富良野、美瑛等地区。',
    price: {
      adult: {
        regular: 5000,
      },
      child: {
        regular: 2500,
      }
    },
    duration: [1],
    coverage: {
      regions: ['旭川', '富良野', '美瑛', '上川', '留萌'],
      map: '/images/coverage/hokuhoku-one-day-stroll-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖道北地区',
      '一日有效',
      '价格合理',
      '适合道北一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限道北地区',
      '仅限一日使用',
      '不包含新干线'
    ],
    tips: [
      '适合道北地区一日游',
      '可游览旭川、富良野、美瑛',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['道北一日游', '旭川富良野', '美瑛观光'],
    sortOrder: 11,
    validityPeriod: {
      startDate: '2025-04-19',
      endDate: '2025-11-09',
      description: '2025年4月19日～11月9日'
    }
  },
  {
    id: 'one-day-stroll-pass',
    name: {
      en: 'One-day Stroll Pass',
      jp: '一日散歩きっぷ',
      cn: '一日散步券'
    },
    description: '北海道各地的一日散步券，适合北海道各地一日游，覆盖主要观光地区。',
    price: {
      adult: {
        regular: 3000,
      },
      child: {
        regular: 1500,
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['札幌', '小樽', '函馆', '旭川', '钏路'],
      map: '/images/coverage/one-day-stroll-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道主要地区',
      '一日有效',
      '价格合理',
      '适合一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限一日使用',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道各地一日游',
      '可游览主要观光地区',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['一日游', '主要观光地区', '价格合理'],
    sortOrder: 12
  },
  {
    id: 'adult-holiday-club-pass-hokkaido',
    name: {
      en: 'Adult Holiday Club Pass (Hokkaido)',
      jp: '大人の休日倶楽部パス（北海道）',
      cn: '成人假日俱乐部券（北海道）'
    },
    description: '成人假日俱乐部北海道券，适合成人深度游，包含北海道主要观光地区。',
    price: {
      adult: {
        regular: 15000,
      },
      child: {
        regular: 7500,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['札幌', '函馆', '旭川', '钏路', '网走'],
      map: '/images/coverage/adult-holiday-club-pass-hokkaido.png'
    },
    targetAudience: ['成人游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道主要地区',
      '3日连续使用',
      '适合成人深度游',
      '价格合理'
    ],
    disadvantages: [
      '仅限成人使用',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合成人深度游',
      '可游览北海道主要地区',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['成人深度游', '北海道主要地区', '3日游'],
    sortOrder: 13
  },
  {
    id: 'adult-holiday-pass-hokkaido-special',
    name: {
      en: 'Adult Holiday Pass (Hokkaido Special)',
      jp: '大人の休日パス(北海道スペシャル)',
      cn: '成人假日券（北海道特别版）'
    },
    description: '成人假日北海道特别版，适合成人深度游，包含北海道特别观光地区。',
    price: {
      adult: {
        regular: 18000,
      },
      child: {
        regular: 9000,
      }
    },
    duration: [4],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['札幌', '函馆', '旭川', '钏路', '网走', '知床'],
      map: '/images/coverage/adult-holiday-pass-hokkaido-special.png'
    },
    targetAudience: ['成人游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道特别地区',
      '4日连续使用',
      '适合成人深度游',
      '包含知床等特别地区'
    ],
    disadvantages: [
      '仅限成人使用',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合成人深度游',
      '可游览北海道特别地区',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['成人深度游', '北海道特别地区', '4日游', '知床观光'],
    sortOrder: 14
  },
  {
    id: 'peach-higashi-hokkaido-free-pass',
    name: {
      en: 'Peach Higashi Hokkaido Free Pass',
      jp: 'Peachひがし北海道フリーパス',
      cn: 'Peach东北海道自由券'
    },
    description: 'Peach航空合作的东北海道自由券，适合从关西地区前往北海道东部的游客。',
    price: {
      adult: {
        regular: 12000,
      },
      child: {
        regular: 6000,
      }
    },
    duration: [3],  
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['钏路', '网走', '知床', '根室', '中標津'],
      map: '/images/coverage/peach-higashi-hokkaido-free-pass.png'
    },
    targetAudience: ['Peach航空乘客', '关西地区游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖东北海道地区',
      '3日连续使用',
      '适合Peach航空乘客',
      '价格合理'
    ],
    disadvantages: [
      '仅限东北海道地区',
      '需要Peach航空机票',
      '不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道东部',
      '需要Peach航空机票',
      '可游览钏路、网走、知床',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['Peach航空乘客', '东北海道', '3日游', '知床观光'],
    sortOrder: 15
  },
  {
    id: 'fda-higashi-hokkaido-free-pass',
    name: {
      en: 'FDA Higashi Hokkaido Free Pass',
      jp: 'FDAひがし北海道フリーパス',
      cn: 'FDA东北海道自由券'
    },
    description: 'FDA航空合作的东北海道自由券，适合从关西地区前往北海道东部的游客。',
    price: {
      adult: {
        regular: 12000,
      },
      child: {
        regular: 6000,
      }
    },
    duration: [3],  
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['钏路', '网走', '知床', '根室', '中標津'],
      map: '/images/coverage/fda-higashi-hokkaido-free-pass.png'
    },
    targetAudience: ['FDA航空乘客', '关西地区游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖东北海道地区',
      '3日连续使用',
      '适合FDA航空乘客',
      '价格合理'
    ],
    disadvantages: [
      '仅限东北海道地区',
      '需要FDA航空机票',
      '不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道东部',
      '需要FDA航空机票',
      '可游览钏路、网走、知床',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['FDA航空乘客', '东北海道', '3日游', '知床观光'],
    sortOrder: 16
  },
  {
    id: 'peach-kita-hokkaido-free-pass',
    name: {
      en: 'Peach Kita Hokkaido Free Pass',
      jp: 'Peachきた北海道フリーパス',
      cn: 'Peach北北海道自由券'
    },
    description: 'Peach航空合作的北北海道自由券，适合从关西地区前往北海道北部的游客。',
    price: {
      adult: {
        regular: 12000,
      },
      child: {
        regular: 6000,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['旭川', '富良野', '美瑛', '稚内', '留萌'],
      map: '/images/coverage/peach-kita-hokkaido-free-pass.png'
    },
    targetAudience: ['Peach航空乘客', '关西地区游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北北海道地区',
      '3日连续使用',
      '适合Peach航空乘客',
      '价格合理'
    ],
    disadvantages: [
      '仅限北北海道地区',
      '需要Peach航空机票',
      '不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道北部',
      '需要Peach航空机票',
      '可游览旭川、富良野、美瑛',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['Peach航空乘客', '北北海道', '3日游', '富良野美瑛'],
    sortOrder: 17
  },
  {
    id: 'fda-kita-hokkaido-free-pass',
    name: {
      en: 'FDA Kita Hokkaido Free Pass',
      jp: 'FDAきた北海道フリーパス',
      cn: 'FDA北北海道自由券'
    },
    description: 'FDA航空合作的北北海道自由券，适合从关西地区前往北海道北部的游客。',
    price: {
      adult: {
        regular: 12000,
      },
      child: {
        regular: 6000,
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['旭川', '富良野', '美瑛', '稚内', '留萌'],
      map: '/images/coverage/fda-kita-hokkaido-free-pass.png'
    },
    targetAudience: ['FDA航空乘客', '关西地区游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北北海道地区',
      '3日连续使用',
      '适合FDA航空乘客',
      '价格合理'
    ],
    disadvantages: [
      '仅限北北海道地区',
      '需要FDA航空机票',
      '不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道北部',
      '需要FDA航空机票',
      '可游览旭川、富良野、美瑛',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['FDA航空乘客', '北北海道', '3日游', '富良野美瑛'],
    sortOrder: 18
  },
  {
    id: 'ana-kita-hokkaido-free-pass',
    name: {
      en: 'ANA Kita Hokkaido Free Pass',
      jp: 'ANAきた北海道フリーパス',
      cn: 'ANA北北海道自由券'
    },
    description: 'ANA航空合作的北北海道自由券，适合从关西地区前往北海道北部的游客。',
    price: {
      adult: {
        regular: 12000,
      },
      child: {
        regular: 6000,
      }
    },
    duration: [3],
    coverage: {
      regions: ['旭川', '富良野', '美瑛', '稚内', '留萌'],
      map: '/images/coverage/ana-kita-hokkaido-free-pass.png'
    },
    targetAudience: ['ANA航空乘客', '关西地区游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北北海道地区',
      '3日连续使用',
      '适合ANA航空乘客',
      '价格合理'
    ],
    disadvantages: [
      '仅限北北海道地区',
      '需要ANA航空机票',
      '不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道北部',
      '需要ANA航空机票',
      '可游览旭川、富良野、美瑛',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['ANA航空乘客', '北北海道', '3日游', '富良野美瑛'],
    sortOrder: 19,
    validityPeriod: {
      startDate: '2025-04-01',
      endDate: '2026-03-31',
      description: '2025年4月1日～2026年3月31日'
    }
  },
  {
    id: 'abashiri-koshimizu-shiretoko-guru-tabipassport',
    name: {
      en: 'Abashiri & Koshimizu & Shiretoko Guru Tabi Passport',
      jp: '網走＆小清水＆知床ぐる旅パスポート',
      cn: '网走＆小清水＆知床环游护照'
    },
    description: '网走、小清水、知床地区的环游护照，适合知床地区深度游，包含主要观光景点。',
    price: {
      adult: {
        regular: 8000,
      },
      child: {
        regular: 4000,
      }
    },
    duration: [2],
    coverage: {
      regions: ['网走', '小清水', '知床', '斜里', '罗臼'],
      map: '/images/coverage/abashiri-koshimizu-shiretoko-guru-tabipassport.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', '巴士'],
    advantages: [
      '覆盖网走、小清水、知床地区',
      '2日连续使用',
      '包含主要观光景点',
      '适合知床深度游'
    ],
    disadvantages: [
      '仅限知床地区',
      '不包含新干线',
      '部分特急电车需额外费用'
    ],
    tips: [
      '适合知床地区深度游',
      '可游览网走、小清水、知床',
      '建议提前规划路线',
      '注意各景点的开放时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['知床深度游', '网走小清水', '2日游', '自然观光'],
    sortOrder: 20,
    validityPeriod: {
      startDate: '2025-07-15',
      endDate: '2025-09-30',
      description: '2025年7月15日～9月30日'
    }
  },
  {
    id: 'senmo-line-free-pass',
    name: {
      en: 'Senmo Line Free Pass',
      jp: '釧網線フリーパス',
      cn: '钏网线自由券'
    },
    description: '钏网线的自由券，适合钏网线沿线观光，包含钏路、网走等地区。',
    price: {
      adult: {
        regular: 6000,
      },
      child: {
        regular: 3000,
      }
    },
    duration: [1],
    coverage: {
      regions: ['钏路', '网走', '摩周', '知床斜里', '中標津'],
      map: '/images/coverage/senmo-line-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖钏网线沿线',
      '一日有效',
      '价格合理',
      '适合钏网线观光'
    ],
    disadvantages: [
      '仅限钏网线沿线',
      '仅限一日使用',
      '不包含新干线'
    ],
    tips: [
      '适合钏网线沿线观光',
      '可游览钏路、网走',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['钏网线观光', '钏路网走', '一日游', '价格合理'],
    sortOrder: 21,
    validityPeriod: {
      startDate: '2025-08-28',
      endDate: '2026-03-13',
      description: '2025年8月28日～2026年3月13日'
    }
  },
  {
    id: 'chikyu-tansaku-tetsudo-hanasaki-line-free-pass',
    name: {
      en: 'Chikyu Tansaku Tetsudo Hanasaki Line Free Pass',
      jp: '地球探索鉄道花咲線フリーパス',
      cn: '地球探索铁道花咲线自由券'
    },
    description: '地球探索铁道花咲线的自由券，适合花咲线沿线观光，包含钏路、根室等地区。',
    price: {
      adult: {
        regular: 4000,
      },
      child: {
        regular: 2000,
      }
    },
    duration: [1],
    coverage: {
      regions: ['钏路', '根室', '中標津', '別海', '厚岸'],
      map: '/images/coverage/chikyu-tansaku-tetsudo-hanasaki-line-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖花咲线沿线',
      '一日有效',
      '价格合理',
      '适合花咲线观光'
    ],
    disadvantages: [
      '仅限花咲线沿线',
      '仅限一日使用',
      '不包含新干线'
    ],
    tips: [
      '适合花咲线沿线观光',
      '可游览钏路、根室',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方', url: 'https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['花咲线观光', '钏路根室', '一日游', '价格合理'],
    sortOrder: 22,
    validityPeriod: {
      startDate: '2025-08-28',
      endDate: '2026-03-13',
      description: '2025年8月28日～2026年3月13日'
    }
  },
  {
    id: 'sapporo-streetcar-1day',
    name: {
      en: 'Sapporo Streetcar One-day Pass',
      jp: '路面電車1日乗車券',
      cn: '札幌市电一日券'
    },
    description: '札幌市电的一日券，适合札幌市内一日游，覆盖札幌市电全线路。',
    price: {
      adult: {
        regular: 500,
      },
      child: {
        regular: 250,
      }
    },
    duration: [1],
    coverage: {
      regions: ['札幌', '札幌市电全线路'],
      map: '/images/coverage/sapporo-streetcar-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖札幌市电全线路',
      '一自然日有效',
      '价格便宜',
      '适合札幌市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限札幌市电',
      '不包含地铁',
      '不包含JR线路',
      '仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游',
      '可游览札幌主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '札幌市交通事业振兴公社', url: 'https://www.city.sapporo.jp/st/josyaken/card.html' }
    ],
    purchaseLinks: [
      { name: '札幌市交通事业振兴公社', url: 'https://www.city.sapporo.jp/st/josyaken/ticket_h.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '现金支付', '市电随便坐', '购票机可购买'],
    sortOrder: 23,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'sapporo-streetcar-24hour',
    name: {
      en: 'Sapporo Streetcar 24-Hour Pass',
      jp: '札幌市電24時間乗車券',
      cn: '札幌市电24小时券'
    },
    description: '札幌市电的24小时券，适合札幌市内24小时游，覆盖札幌市电全线路。',
    price: {
      adult: {
        regular: 600,
      },
      child: {
        regular: 300,
      }
    },
    duration: [1],
    coverage: {
      regions: ['札幌', '札幌市电全线路'],
      map: '/images/coverage/sapporo-streetcar-24hour.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖札幌市电全线路',
      '24小时有效',
      '价格合理',
      '适合札幌市内24小时游',
      '购买方便'
    ],
    disadvantages: [
      '仅限札幌市电',
      '不包含地铁',
      '不包含JR线路',
      '仅支持现金支付'
    ],
    tips: [
      '适合札幌市内24小时游',
      '可游览札幌主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '札幌市交通事业振兴公社', url: 'https://www.city.sapporo.jp/st/josyaken/card.html' }
    ],
    purchaseLinks: [
      { name: '札幌市交通事业振兴公社', url: 'https://www.city.sapporo.jp/st/josyaken/ticket_h.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌24小时游', '现金支付', '市电随便坐', '购票机可购买'],
    sortOrder: 24,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'dosanko-pass',
    name: {
      en: 'Dosanko Pass',
      jp: 'どサン子パス',
      cn: '道产子券'
    },
    description: '道产子券，适合札幌市内一日游，包含地铁和市电，覆盖札幌市内主要交通。',
    price: {
      adult: {
        regular: 1000,
      },
      child: {
        regular: 500,
      }
    },
    duration: [1],
    coverage: {
      regions: ['札幌', '札幌地铁全线路', '札幌市电全线路'],
      map: '/images/coverage/dosanko-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁', '路面电车'],
    advantages: [
      '覆盖札幌地铁和市电全线路',
      '一自然日有效',
      '价格合理',
      '适合札幌市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限札幌市内',
      '不包含JR线路',
      '不包含巴士',
      '仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游',
      '可游览札幌主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '札幌市交通事业振兴公社', url: 'https://www.city.sapporo.jp/st/josyaken/card.html' }
    ],
    purchaseLinks: [
      { name: '札幌市交通事业振兴公社', url: 'https://www.city.sapporo.jp/st/josyaken/ticket_h.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '现金支付', '地铁市电随便坐', '购票机可购买'],
    sortOrder: 25,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'hakodate-streetcar-1day',
    name: {
      en: 'Hakodate Streetcar One-day Pass',
      jp: '市電１日乗車券',
      cn: '函馆市电一日券'
    },
    description: '函馆市电的一日券，适合函馆市内一日游，覆盖函馆市电全线路。',
    price: {
      adult: {
        regular: 600,
      },
      child: {
        regular: 300,
      }
    },
    duration: [1],
    coverage: {
      regions: ['函馆', '函馆市电全线路'],
      map: '/images/coverage/hakodate-streetcar-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖函馆市电全线路',
      '一自然日有效',
      '价格合理',
      '适合函馆市内一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限函馆市电',
      '不包含巴士',
      '不包含JR线路',
      '仅支持现金支付'
    ],
    tips: [
      '适合函馆市内一日游',
      '可游览函馆主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/1day.html' }
    ],
    purchaseLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/1day.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆一日游', '现金支付', '市电随便坐', '购票机可购买'],
    sortOrder: 26,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'hakodate-smartphone-streetcar-1day',
    name: {
      en: 'Hakodate Smartphone Streetcar One-day Pass',
      jp: 'スマホ市電１日乗車券',
      cn: '函馆智能手机市电一日券'
    },
    description: '函馆智能手机市电一日券，适合函馆市内一日游，覆盖函馆市电全线路，支持智能手机购买。',
    price: {
      adult: {
        regular: 500,
      },
      child: {
        regular: 250,
      }
    },
    duration: [1],
    coverage: {
      regions: ['函馆', '函馆市电全线路'],
      map: '/images/coverage/hakodate-smartphone-streetcar-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖函馆市电全线路',
      '一自然日有效',
      '价格便宜',
      '支持智能手机购买',
      '适合函馆市内一日游'
    ],
    disadvantages: [
      '仅限函馆市电',
      '不包含巴士',
      '不包含JR线路',
      '需要智能手机'
    ],
    tips: [
      '适合函馆市内一日游',
      '支持智能手机购买',
      '可游览函馆主要景点',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html' }
    ],
    purchaseLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆一日游', '智能手机购买', '市电随便坐', '价格便宜'],
    sortOrder: 27,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'hakodate-smartphone-streetcar-24hour',
    name: {
      en: 'Hakodate Smartphone Streetcar 24-Hour Pass',
      jp: 'スマホ市電２４時間乗車券',
      cn: '函馆智能手机市电24小时券'
    },
    description: '函馆智能手机市电24小时券，适合函馆市内24小时游，覆盖函馆市电全线路，支持智能手机购买。',
    price: {
      adult: {
        regular: 700,
      },
      child: {
        regular: 350,
      }
    },
    duration: [1],
    coverage: {
      regions: ['函馆', '函馆市电全线路'],
      map: '/images/coverage/hakodate-smartphone-streetcar-24hour.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖函馆市电全线路',
      '24小时有效',
      '价格合理',
      '支持智能手机购买',
      '适合函馆市内24小时游'
    ],
    disadvantages: [
      '仅限函馆市电',
      '不包含巴士',
      '不包含JR线路',
      '需要智能手机'
    ],
    tips: [
      '适合函馆市内24小时游',
      '支持智能手机购买',
      '可游览函馆主要景点',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html' }
    ],
    purchaseLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆24小时游', '智能手机购买', '市电随便坐', '价格合理'],
    sortOrder: 28,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'hakodate-smartphone-streetcar-bus-1day',
    name: {
      en: 'Hakodate Smartphone Streetcar & Bus One-day Pass',
      jp: 'スマホ市電・函館バス共通１日乗車券',
      cn: '函馆智能手机市电・函馆巴士共通一日券'
    },
    description: '函馆智能手机市电・函馆巴士共通一日券，适合函馆市内一日游，覆盖函馆市电和巴士全线路，支持智能手机购买。',
    price: {
      adult: {
        regular: 800,
      },
      child: {
        regular: 400,
      }
    },
    duration: [1],
    coverage: {
      regions: ['函馆', '函馆市电全线路', '函馆巴士全线路'],
      map: '/images/coverage/hakodate-smartphone-streetcar-bus-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车', '巴士'],
    advantages: [
      '覆盖函馆市电和巴士全线路',
      '一自然日有效',
      '价格合理',
      '支持智能手机购买',
      '适合函馆市内一日游'
    ],
    disadvantages: [
      '仅限函馆市内',
      '不包含JR线路',
      '需要智能手机'
    ],
    tips: [
      '适合函馆市内一日游',
      '支持智能手机购买',
      '可游览函馆主要景点',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html' }
    ],
    purchaseLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆一日游', '智能手机购买', '市电巴士随便坐', '价格合理'],
    sortOrder: 29,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'hakodate-smartphone-streetcar-bus-2day',
    name: {
      en: 'Hakodate Smartphone Streetcar & Bus Two-day Pass',
      jp: 'スマホ市電・函館バス共通２日乗車券',
      cn: '函馆智能手机市电・函馆巴士共通二日券'
    },
    description: '函馆智能手机市电・函馆巴士共通二日券，适合函馆市内二日游，覆盖函馆市电和巴士全线路，支持智能手机购买。',
    price: {
      adult: {
        regular: 1200,
      },
      child: {
        regular: 600,
      }
    },
    duration: [2],
    coverage: {
      regions: ['函馆', '函馆市电全线路', '函馆巴士全线路'],
      map: '/images/coverage/hakodate-smartphone-streetcar-bus-2day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车', '巴士'],
    advantages: [
      '覆盖函馆市电和巴士全线路',
      '二日连续使用',
      '价格合理',
      '支持智能手机购买',
      '适合函馆市内二日游'
    ],
    disadvantages: [
      '仅限函馆市内',
      '不包含JR线路',
      '需要智能手机'
    ],
    tips: [
      '适合函馆市内二日游',
      '支持智能手机购买',
      '可游览函馆主要景点',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html' }
    ],
    purchaseLinks: [
      { name: '函馆市企业局交通部', url: 'https://www.city.hakodate.hokkaido.jp/koutsuu/smartphone.html', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆二日游', '智能手机购买', '市电巴士随便坐', '价格合理'],
    sortOrder: 30,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'isarihi-1day-ticket',
    name: {
      en: 'Isarihi One-day Ticket',
      jp: 'いさりび１日きっぷ',
      cn: '石狩一日券'
    },
    description: '道南いさりび鉄道的一日券，适合道南地区一日游，覆盖いさりび鉄道全线路。',
    price: {
      adult: {
        regular: 800,
      },
      child: {
        regular: 400,
      }
    },
    duration: [1],
    coverage: {
      regions: ['道南', 'いさりび鉄道全线路'],
      map: '/images/coverage/isarihi-1day-ticket.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    advantages: [
      '覆盖いさりび鉄道全线路',
      '一自然日有效',
      '价格合理',
      '适合道南地区一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限いさりび鉄道',
      '不包含JR线路',
      '不包含巴士',
      '仅支持现金支付'
    ],
    tips: [
      '适合道南地区一日游',
      '可游览道南主要景点',
      '建议提前规划路线',
      '注意各线路的运行时间'
    ],
    officialLinks: [
      { name: '道南いさりび鉄道', url: 'https://www.isaribi-line.com/' }
    ],
    purchaseLinks: [
      { name: '道南いさりび鉄道', url: 'https://www.isaribi-line.com/', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['道南一日游', '现金支付', 'いさりび鉄道随便坐', '购票机可购买'],
    sortOrder: 31,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  },
  {
    id: 'isarihi-1day-campus',
    name: {
      en: 'Isarihi One-day Campus',
      jp: 'いさりび1日カンパス',
      cn: '石狩一日校园券'
    },
    description: '道南いさりび鉄道的一日校园券，适合道南地区一日游，覆盖いさりび鉄道全线路，学生优惠价格。',
    price: {
      adult: {
        regular: 600,
      },
      child: {
        regular: 300,
      }
    },
    duration: [1],
    coverage: {
      regions: ['道南', 'いさりび鉄道全线路'],
      map: '/images/coverage/isarihi-1day-campus.png'
    },
    targetAudience: ['学生', '不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    advantages: [
      '覆盖いさりび鉄道全线路',
      '一自然日有效',
      '学生优惠价格',
      '适合道南地区一日游',
      '购买方便'
    ],
    disadvantages: [
      '仅限いさりび鉄道',
      '不包含JR线路',
      '不包含巴士',
      '仅支持现金支付'
    ],
    tips: [
      '适合道南地区一日游',
      '学生优惠价格',
      '可游览道南主要景点',
      '建议提前规划路线'
    ],
    officialLinks: [
      { name: '道南いさりび鉄道', url: 'https://www.isaribi-line.com/' }
    ],
    purchaseLinks: [
      { name: '道南いさりび鉄道', url: 'https://www.isaribi-line.com/', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['道南一日游', '学生优惠', 'いさりび鉄道随便坐', '购票机可购买'],
    sortOrder: 32,
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    }
  }
  
];