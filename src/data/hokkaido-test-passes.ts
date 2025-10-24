import { JRPass } from '@/types/pass';

// 北海道地区周游券
export const hokkaidoPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'jr-east-south-hokkaido-rail-pass-6day',
    name: {
      en: '',
      jp: '',
      cn: 'JR东日本・南北海道铁路周游券6日券'
    },
    description: '东日本 + 南北海道的6日周游券，连接东京、仙台、函馆，覆盖东北和北海道南部地区。',
    price: {
      adult: {
        regular: 35370
      },
      child: {
        regular: 17680
      }
    },
    duration: [6],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线, 特急电车, 急行电车, 普通电车, JR巴士'],
    advantages: [
      '连接东京、仙台、函馆;覆盖东北和北海道南部;包含东北新干线和北海道新干线;6天连续使用;跨地区旅行便利'
    ],
    disadvantages: [
      '仅限东北和北海道南部;不包含北海道北部;部分特急电车需额外费用'
    ],
    tips: [
      '适合东北和北海道南部旅行;可游览东京、仙台、函馆;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道 (https://www.jreast.co.jp/zh-CHS/multi/pass/easthokkaido.html)', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方 (https://www.eki-net.com/zh-CHS/jreast-train-reservation/reserve/wb/PurchaseTicketSelect/Index)', url: '', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['跨地区旅行', '中途旅游']
  },

  {
    sortOrder: 2,
    id: 'hokkaido-rail-pass-5day',
    name: {
      en: '',
      jp: '',
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
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车, 急行电车, 普通电车'],
    advantages: [
      '覆盖北海道全域;最经典北海道周游券;5日连续使用;覆盖北海道所有JR线路;性价比高'
    ],
    disadvantages: [
      '仅限北海道地区;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行;可游览北海道所有景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道 (https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#hrp)', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方 (https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1)', url: '', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '预购有1000円优惠']
  },

  {
    sortOrder: 3,
    id: 'hokkaido-rail-pass-7day',
    name: {
      en: '',
      jp: '',
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
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车, 急行电车, 普通电车'],
    advantages: [
      '覆盖北海道全域;最经典北海道周游券;7日连续使用;覆盖北海道所有JR线路;性价比高'
    ],
    disadvantages: [
      '仅限北海道地区;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行;可游览北海道所有景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道 (https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#hrp)', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方 (https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1)', url: '', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '预购有1000円优惠']
  },

  {
    sortOrder: 4,
    id: 'hokkaido-rail-pass-10day',
    name: {
      en: '',
      jp: '',
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
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车, 急行电车, 普通电车'],
    advantages: [
      '覆盖北海道全域;最经典北海道周游券;10日连续使用;覆盖北海道所有JR线路;性价比高'
    ],
    disadvantages: [
      '仅限北海道地区;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行;可游览北海道所有景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道 (https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#hrp)', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方 (https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1)', url: '', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '预购有1000円优惠']
  },

  {
    sortOrder: 5,
    id: 'sapporo-furano-area-pass',
    name: {
      en: '',
      jp: '',
      cn: '札幌・富良野地区周游券'
    },
    description: '札幌、富良野、美瑛的4日周游券，夏季花田热门路线，适合夏季北海道旅行。',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 6000
      }
    },
    duration: [4],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车, 急行电车, 普通电车'],
    advantages: [
      '覆盖札幌、富良野、美瑛;夏季花田热门路线;4天连续使用;适合夏季北海道旅行;价格合理'
    ],
    disadvantages: [
      '仅限札幌、富良野、美瑛地区;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合夏季北海道旅行;可游览札幌、富良野、美瑛;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道 (https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#furano)', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方 (https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1)', url: '', type: 'official' }
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['札幌・富良野・美瑛观光']
  },

  {
    sortOrder: 6,
    id: 'sapporo-noboribetsu-pass',
    name: {
      en: '',
      jp: '',
      cn: '札幌・登别周游券'
    },
    description: '札幌、登别的2日周游券，温泉观光向，适合温泉度假之旅。',
    price: {
      adult: {
        regular: 11000
      },
      child: {
        regular: 5500
      }
    },
    duration: [4],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车, 急行电车, 普通电车'],
    advantages: [
      '覆盖札幌、登别;温泉观光向;2天连续使用;适合温泉度假之旅;价格合理'
    ],
    disadvantages: [
      '仅限札幌、登别地区;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合温泉度假之旅;可游览札幌、登别;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      { name: 'JR北海道 https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#noboribetsu', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR北海道官方 https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1 type:official', url: '', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['札幌・登别观光', '预购有1000円优惠']
  },

  {
    sortOrder: 7,
    id: 'sapporo-subway-1day',
    name: {
      en: '',
      jp: '',
      cn: '札幌市营地铁全线一日券'
    },
    description: '札幌地铁全线路的一日券，适合札幌市内一日游。',
    price: {
      adult: {
        regular: 830
      },
      child: {
        regular: 420
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁'],
    advantages: [
      '覆盖札幌地铁全线路;一自然日有效;价格合理;适合札幌市内一日游;购买方便'
    ],
    disadvantages: [
      '仅限札幌地铁;不包含JR线路;不包含巴士;仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游;可游览札幌主要景点;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      { name: '札幌地铁官方 https://www.city.sapporo.jp/st/josyaken/card.html#ichinichi', url: '' }
    ],
    purchaseLinks: [
      { name: '札幌地铁官方 https://www.city.sapporo.jp/st/josyaken/ticket_h.html type:official', url: '', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '现金支付', '购票机可购买']
  },

  {
    sortOrder: 8,
    id: 'toei-subway-2day',
    name: {
      en: '',
      jp: '',
      cn: '休息日限定地铁全线一日券'
    },
    description: '休息日限定地铁全线的一日券，适合假期来札幌市内一日游。',
    price: {
      adult: {
        regular: 520
      },
      child: {
        regular: 260
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁'],
    advantages: [
      '覆盖札幌地铁全线路;一自然日有效;价格划算;适合札幌市内一日游;购买方便'
    ],
    disadvantages: [
      '仅限札幌地铁;不包含JR线路;不包含巴士;仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游;可游览札幌主要景点;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      { name: '札幌地铁官方 https://www.city.sapporo.jp/st/josyaken/card.html#donichika', url: '' }
    ],
    purchaseLinks: [
      { name: '札幌地铁官方 https://www.city.sapporo.jp/st/josyaken/ticket_h.html type:official', url: '', type: 'official' }
    ],
    category: 'city',
    popularity: 5,
    bestFor: ['札幌一日游', '现金支付', '购票机可购买']
  },

  {
    sortOrder: 9,
    id: 'hakodate-travel-passport',
    name: {
      en: '',
      jp: '',
      cn: '函馆旅行一日券'
    },
    description: '函馆地区的周游券，包含函馆市内交通和主要景点门票，适合函馆深度游。',
    price: {
      adult: {
        regular: 3000
      },
      child: {
        regular: 1500
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['巴士, 观光电车, 普通电车'],
    advantages: [
      '包含函馆市内巴士;包含函馆山缆车;包含五稜郭公园门票;一自然日有效;价格合理'
    ],
    disadvantages: [
      '仅限函馆地区;不包含特急电车;仅限一自然日使用'
    ],
    tips: [
      '适合函馆及周围地区深度游;可游览函馆主要景点;建议提前规划路线;注意各景点开放时间'
    ],
    officialLinks: [
      { name: '函馆观光协会 https://www.hakodate.travel/zh/guide/transportation/', url: '' }
    ],
    purchaseLinks: [
      { name: '函馆观光协会 https://www.hakodate.travel/zh/guide/transportation/ type:official', url: '', type: 'official' }
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆深度游', '电子票有优惠', '市内交通', '一日游']
  },

  {
    sortOrder: 10,
    id: 'student-discount-pass',
    name: {
      en: '',
      jp: '',
      cn: '学生优惠周游券'
    },
    description: '针对25岁以下学生的特殊优惠周游券，覆盖北海道主要线路。',
    price: {
      adult: {
        regular: 15000
      },
      child: {
        regular: 0,
        advance: 8000
      },
      under18: 8000
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['/images/coverage/student-discount-pass.png'],
    trainTypes: ['25岁以下学生'],
    advantages: [
      '特急电车, 急行电车, 普通电车'
    ],
    disadvantages: [
      '学生专属优惠;覆盖北海道主要线路;5日连续使用;价格优惠;适合学生旅行'
    ],
    tips: [
      '仅限25岁以下学生;需要学生证明;不包含新干线;部分特急电车需额外费用'
    ],
    officialLinks: [
      { name: '适合学生旅行', url: '需要携带学生证明' }
    ],
    purchaseLinks: [
      { name: 'JR北海道 https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#student', url: '', type: 'official' }
    ],
    category: 'JR北海道官方 https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1 type:official',
    popularity: 3,
    bestFor: ['3']
  },

  {
    sortOrder: 11,
    id: 'youth-pass-25',
    name: {
      en: '',
      jp: '',
      cn: '青年周游券25岁以下'
    },
    description: '专门为25岁以下青年设计的优惠周游券，覆盖北海道主要线路。',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 0,
        advance: 6000
      },
      under18: 10000
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['/images/coverage/youth-pass-25.png'],
    trainTypes: ['25岁以下青年'],
    advantages: [
      '特急电车, 急行电车, 普通电车'
    ],
    disadvantages: [
      '青年专属优惠;覆盖北海道主要线路;7日连续使用;价格优惠;适合青年旅行'
    ],
    tips: [
      '仅限25岁以下青年;需要年龄证明;不包含新干线;部分特急电车需额外费用'
    ],
    officialLinks: [
      { name: '适合青年旅行', url: '需要携带年龄证明' }
    ],
    purchaseLinks: [
      { name: 'JR北海道 https://www.jrhokkaido.co.jp/global/cn/ticket/railpass/index.html#youth', url: '', type: 'official' }
    ],
    category: 'JR北海道官方 https://www.jrhokkaido.co.jp/global/cn/ticket/reservation/index.html#sec-1 type:official',
    popularity: 3,
    bestFor: ['3']
  }
];