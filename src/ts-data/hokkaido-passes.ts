import { JRPass } from '@/types/pass';

// 北海道地区周游券
export const hokkaidoPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'jr-east-south-hokkaido-rail-pass-6day',
    name: {
      en: 'JR东日本・南北海道铁路周游券6日券',
      jp: 'JR东日本・南北海道铁路周游券6日券',
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
      regions: ['東北', '北海道'],
      map: '/images/coverage/jr-east-south-hokkaido-rail-pass-6day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['跨地区旅行', '中途旅游']
  },

  {
    sortOrder: 2,
    id: 'hokkaido-rail-pass-5day',
    name: {
      en: '北海道铁路周游券5日券',
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
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/hokkaido-rail-pass-5day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '预购有1000円优惠']
  },

  {
    sortOrder: 3,
    id: 'hokkaido-rail-pass-7day',
    name: {
      en: '北海道铁路周游券7日券',
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
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/hokkaido-rail-pass-7day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '预购有1000円优惠']
  },

  {
    sortOrder: 4,
    id: 'hokkaido-rail-pass-10day',
    name: {
      en: '北海道铁路周游券10日券',
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
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/hokkaido-rail-pass-10day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '预购有1000円优惠']
  },

  {
    sortOrder: 5,
    id: 'sapporo-furano-area-pass',
    name: {
      en: '札幌・富良野地区周游券',
      jp: '札幌・富良野地区周游券',
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
      map: '/images/coverage/sapporo-furano-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['札幌・富良野・美瑛观光', '预购有1000円优惠']
  },

  {
    sortOrder: 6,
    id: 'sapporo-noboribetsu-pass',
    name: {
      en: '札幌・登别周游券',
      jp: '札幌・登别周游券',
      cn: '札幌・登别周游券'
    },
    description: '札幌、登别的4日周游券，温泉观光向，适合温泉度假之旅。',
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
      map: '/images/coverage/sapporo-noboribetsu-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['札幌・登别观光', '预购有1000円优惠']
  },

  {
    sortOrder: 7,
    id: 'sapporo-subway-1day',
    name: {
      en: '札幌市营地铁全线一日券',
      jp: '札幌市营地铁全线一日券',
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
      map: '/images/coverage/sapporo-subway-1day.png'
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '现金支付', '购票机可购买']
  },

  {
    sortOrder: 8,
    id: 'toei-subway-2day',
    name: {
      en: '休息日限定地铁全线一日券',
      jp: '休息日限定地铁全线一日券',
      cn: '休息日限定地铁全线一日券'
    },
    description: '土休节假日限定地铁全线的一日券，适合假期来札幌市内一日游。',
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
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/sapporo-subway-1day.png'
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 5,
    bestFor: ['札幌一日游', '现金支付', '购票机可购买'],
    isLimitedPeriod: true
  },

  {
    sortOrder: 9,
    id: 'hakodate-travel-passport',
    name: {
      en: '函馆旅行一日券',
      jp: '函馆旅行一日券',
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
      map: '/images/coverage/hakodate-travel-passport.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['巴士', '观光电车', '普通电车'],
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
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆深度游', '电子票有优惠', '市内交通', '一日游']
  },

  {
    sortOrder: 10,
    id: 'hokkaido-free-pass',
    name: {
      en: '北海道周游券',
      jp: '北海道周游券',
      cn: '北海道周游券'
    },
    description: '北海道全域的自由券，覆盖北海道所有JR线路，适合北海道全域旅行。',
    price: {
      adult: {
        regular: 23000
      },
      child: {
        regular: 11500
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
      map: '/images/coverage/hokkaido-free-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道全域;5日连续使用;覆盖北海道所有JR线路;性价比高'
    ],
    disadvantages: [
      '仅限北海道地区;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道全域旅行;可游览北海道所有景点;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域', '经典周游券', '预购有优惠']
  },

  {
    sortOrder: 11,
    id: 'hokuhoku-one-day-stroll-pass',
    name: {
      en: '道北一日散步券',
      jp: '道北一日散步券',
      cn: '道北一日散步券'
    },
    description: '道北地区的一日散步券，适合道北地区一日游，包含旭川、富良野、美瑛等地区。',
    price: {
      adult: {
        regular: 5000
      },
      child: {
        regular: 2500
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '45766',
      endDate: '45970',
      description: '2025年4月19日～11月9日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/hokuhoku-one-day-stroll-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖道北地区;一日有效;价格合理;适合道北一日游;购买方便'
    ],
    disadvantages: [
      '仅限道北地区;仅限一日使用;不包含新干线'
    ],
    tips: [
      '适合道北地区一日游;可游览旭川、富良野、美瑛;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['道北一日游', '旭川富良野', '美瑛观光']
  },

  {
    sortOrder: 12,
    id: 'one-day-stroll-pass',
    name: {
      en: '一日散步券',
      jp: '一日散步券',
      cn: '一日散步券'
    },
    description: '北海道限定区域的一日散步券，适合北海道各地一日游，覆盖主要观光地区。',
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
      map: '/images/coverage/one-day-stroll-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北海道主要地区;一日有效;价格合理;适合一日游;购买方便'
    ],
    disadvantages: [
      '仅限一日使用;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合北海道各地一日游;可游览主要观光地区;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['一日游', '主要观光地区', '价格合理']
  },

  {
    sortOrder: 13,
    id: 'peach-higashi-hokkaido-free-pass',
    name: {
      en: 'Peach东北海道周游券',
      jp: 'Peach东北海道周游券',
      cn: 'Peach东北海道周游券'
    },
    description: 'Peach航空合作的东北海道自由券，适合前往北海道东部的游客。',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 6000
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/peach-higashi-hokkaido-free-pass.png'
    },
    targetAudience: ['Peach航空乘客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖东北海道地区;3日连续使用;适合Peach航空乘客;价格合理'
    ],
    disadvantages: [
      '仅限东北海道地区;需要Peach航空机票;不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道东部;需要Peach航空机票;可游览钏路、网走、知床;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['Peach航空乘客', '东北海道', '3日游', '知床观光']
  },

  {
    sortOrder: 14,
    id: 'fda-higashi-hokkaido-free-pass',
    name: {
      en: 'FDA东北海道周游券',
      jp: 'FDA东北海道周游券',
      cn: 'FDA东北海道周游券'
    },
    description: 'FDA航空合作的东北海道自由券，适合前往北海道东部的游客。',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 6000
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/fda-higashi-hokkaido-free-pass.png'
    },
    targetAudience: ['FDA航空乘客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖东北海道地区;3日连续使用;适合FDA航空乘客;价格合理'
    ],
    disadvantages: [
      '仅限东北海道地区;需要FDA航空机票;不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道东部;需要FDA航空机票;可游览钏路、网走、知床;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['FDA航空乘客', '东北海道', '3日游', '知床观光']
  },

  {
    sortOrder: 15,
    id: 'peach-kita-hokkaido-free-pass',
    name: {
      en: 'Peach北北海道周游券',
      jp: 'Peach北北海道周游券',
      cn: 'Peach北北海道周游券'
    },
    description: 'Peach航空合作的北北海道自由券，适合前往北海道北部的游客。',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 6000
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/peach-kita-hokkaido-free-pass.png'
    },
    targetAudience: ['Peach航空乘客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北北海道地区;3日连续使用;适合Peach航空乘客;价格合理'
    ],
    disadvantages: [
      '仅限北北海道地区;需要Peach航空机票;不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道北部;需要Peach航空机票;可游览旭川、富良野、美瑛;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['Peach航空乘客', '北北海道', '3日游', '富良野美瑛']
  },

  {
    sortOrder: 16,
    id: 'fda-kita-hokkaido-free-pass',
    name: {
      en: 'FDA北北海道周游券',
      jp: 'FDA北北海道周游券',
      cn: 'FDA北北海道周游券'
    },
    description: 'FDA航空合作的北北海道自由券，适合前往北海道北部的游客。',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 6000
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/fda-kita-hokkaido-free-pass.png'
    },
    targetAudience: ['FDA航空乘客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北北海道地区;3日连续使用;适合FDA航空乘客;价格合理'
    ],
    disadvantages: [
      '仅限北北海道地区;需要FDA航空机票;不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道北部;需要FDA航空机票;可游览旭川、富良野、美瑛;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['FDA航空乘客', '北北海道', '3日游', '富良野美瑛']
  },

  {
    sortOrder: 17,
    id: 'ana-kita-hokkaido-free-pass',
    name: {
      en: 'ANA北北海道周游券',
      jp: 'ANA北北海道周游券',
      cn: 'ANA北北海道周游券'
    },
    description: 'ANA航空合作的北北海道自由券，适合前往北海道北部的游客。',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 6000
      }
    },
    duration: [3],
    validityPeriod: {
      startDate: '45748',
      endDate: '46112',
      description: '2025年4月1日～2026年3月31日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/ana-kita-hokkaido-free-pass.png'
    },
    targetAudience: ['ANA航空乘客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖北北海道地区;3日连续使用;适合ANA航空乘客;价格合理'
    ],
    disadvantages: [
      '仅限北北海道地区;需要ANA航空机票;不包含新干线'
    ],
    tips: [
      '适合从关西地区前往北海道北部;需要ANA航空机票;可游览旭川、富良野、美瑛;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['ANA航空乘客', '北北海道', '3日游', '富良野美瑛']
  },

  {
    sortOrder: 18,
    id: 'abashiri-koshimizu-shiretoko-guru-tabipassport',
    name: {
      en: '网走＆小清水＆知床环游周游券',
      jp: '网走＆小清水＆知床环游周游券',
      cn: '网走＆小清水＆知床环游周游券'
    },
    description: '网走、小清水、知床地区的环游周游券，适合知床地区深度游，包含主要观光景点。',
    price: {
      adult: {
        regular: 8000
      },
      child: {
        regular: 4000
      }
    },
    duration: [2],
    validityPeriod: {
      startDate: '45853',
      endDate: '45930',
      description: '2025年7月15日～9月30日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/abashiri-koshimizu-shiretoko-guru-tabipassport.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', '巴士'],
    advantages: [
      '覆盖网走、小清水、知床地区;2日连续使用;包含主要观光景点;适合知床深度游'
    ],
    disadvantages: [
      '仅限知床地区;不包含新干线;部分特急电车需额外费用'
    ],
    tips: [
      '适合知床地区深度游;可游览网走、小清水、知床;建议提前规划路线;注意各景点开放时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['知床深度游', '网走小清水', '2日游', '自然观光']
  },

  {
    sortOrder: 19,
    id: 'senmo-line-free-pass',
    name: {
      en: '钏网线周游券',
      jp: '钏网线周游券',
      cn: '钏网线周游券'
    },
    description: '钏网线的自由券，适合钏网线沿线观光，包含钏路、网走等地区。',
    price: {
      adult: {
        regular: 6000
      },
      child: {
        regular: 3000
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '45897',
      endDate: '46094',
      description: '2025年8月28日～2026年3月13日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/senmo-line-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖钏网线沿线;一日有效;价格合理;适合钏网线观光'
    ],
    disadvantages: [
      '仅限钏网线沿线;仅限一日使用;不包含新干线'
    ],
    tips: [
      '适合钏网线沿线观光;可游览钏路、网走;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['钏网线观光', '钏路网走', '一日游', '价格合理']
  },

  {
    sortOrder: 20,
    id: 'chikyu-tansaku-tetsudo-hanasaki-line-free-pass',
    name: {
      en: '地球探索铁道花咲线周游券',
      jp: '地球探索铁道花咲线周游券',
      cn: '地球探索铁道花咲线周游券'
    },
    description: '地球探索铁道花咲线的自由券，适合花咲线沿线观光，包含钏路、根室等地区。',
    price: {
      adult: {
        regular: 4000
      },
      child: {
        regular: 2000
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '45897',
      endDate: '46094',
      description: '2025年8月28日～2026年3月13日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/chikyu-tansaku-tetsudo-hanasaki-line-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    advantages: [
      '覆盖花咲线沿线;一日有效;价格合理;适合花咲线观光'
    ],
    disadvantages: [
      '仅限花咲线沿线;仅限一日使用;不包含新干线'
    ],
    tips: [
      '适合花咲线沿线观光;可游览钏路、根室;建议提前规划路线;注意各线路运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['花咲线观光', '钏路根室', '一日游', '价格合理']
  },

  {
    sortOrder: 21,
    id: 'sapporo-streetcar-1day',
    name: {
      en: '札幌市电一日券',
      jp: '札幌市电一日券',
      cn: '札幌市电一日券'
    },
    description: '札幌市电的一日券，适合札幌市内一日游，覆盖札幌市电全线路。',
    price: {
      adult: {
        regular: 500
      },
      child: {
        regular: 250
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
      map: '/images/coverage/sapporo-streetcar-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖札幌市电全线路;一自然日有效;价格便宜;适合札幌市内一日游;购买方便'
    ],
    disadvantages: [
      '仅限札幌市电;不包含地铁;不包含JR线路;仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游;可游览札幌主要景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '现金支付', '市电随便坐', '购票机可购买']
  },

  {
    sortOrder: 22,
    id: 'sapporo-streetcar-24hour',
    name: {
      en: '札幌市电24小时券',
      jp: '札幌市电24小时券',
      cn: '札幌市电24小时券'
    },
    description: '札幌市电的24小时券，适合札幌市内24小时游，覆盖札幌市电全线路。',
    price: {
      adult: {
        regular: 600
      },
      child: {
        regular: 300
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
      map: '/images/coverage/sapporo-streetcar-24hour.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖札幌市电全线路;24小时有效;价格合理;适合札幌市内24小时游;购买方便'
    ],
    disadvantages: [
      '仅限札幌市电;不包含地铁;不包含JR线路;仅支持现金支付'
    ],
    tips: [
      '适合札幌市内24小时游;可游览札幌主要景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌24小时游', '现金支付', '市电随便坐', '购票机可购买']
  },

  {
    sortOrder: 23,
    id: 'dosanko-pass-1day',
    name: {
      en: '道产子一日券',
      jp: '道产子一日券',
      cn: '道产子一日券'
    },
    description: '道产子一日券，适合札幌市小范围一日游，包含地铁和市电，覆盖札幌市内主要交通。',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 500
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
      map: '/images/coverage/dosanko-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁', '路面电车'],
    advantages: [
      '覆盖札幌地铁和市电全线路;一自然日有效;价格合理;适合札幌市内一日游;购买方便'
    ],
    disadvantages: [
      '仅限札幌市内;不包含JR线路;不包含巴士;仅支持现金支付'
    ],
    tips: [
      '适合札幌市内一日游;可游览札幌主要景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['札幌一日游', '现金支付', '地铁市电随便坐', '购票机可购买']
  },

  {
    sortOrder: 24,
    id: 'hakodate-streetcar-1day',
    name: {
      en: '函馆市电一日券',
      jp: '函馆市电一日券',
      cn: '函馆市电一日券'
    },
    description: '函馆市电的一日券，适合函馆市内一日游，覆盖函馆市电全线路。',
    price: {
      adult: {
        regular: 600
      },
      child: {
        regular: 300
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
      map: '/images/coverage/hakodate-streetcar-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖函馆市电全线路;一自然日有效;价格合理;适合函馆市内一日游;购买方便'
    ],
    disadvantages: [
      '仅限函馆市电;不包含巴士;不包含JR线路;仅支持现金支付'
    ],
    tips: [
      '适合函馆市内一日游;可游览函馆主要景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆一日游', '现金支付', '市电随便坐', '购票机可购买']
  },

  {
    sortOrder: 25,
    id: 'hakodate-smartphone-streetcar-24hour',
    name: {
      en: '函馆市电24小时券',
      jp: '函馆市电24小时券',
      cn: '函馆市电24小时券'
    },
    description: '函馆市电24小时券，适合函馆市内24小时游，覆盖函馆市电全线路，支持智能手机购买。',
    price: {
      adult: {
        regular: 700
      },
      child: {
        regular: 350
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
      map: '/images/coverage/hakodate-smartphone-streetcar-24hour.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖函馆市电全线路;24小时有效;价格合理;支持智能手机购买;适合函馆市内24小时游'
    ],
    disadvantages: [
      '仅限函馆市电;不包含巴士;不包含JR线路;需要智能手机'
    ],
    tips: [
      '适合函馆市内24小时游;支持智能手机购买;可游览函馆主要景点;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆24小时游', '智能手机购买', '市电随便坐', '价格合理']
  },

  {
    sortOrder: 26,
    id: 'hakodate-smartphone-streetcar-bus-1day',
    name: {
      en: '函馆市电・函馆巴士共通一日券',
      jp: '函馆市电・函馆巴士共通一日券',
      cn: '函馆市电・函馆巴士共通一日券'
    },
    description: '函馆市电・函馆巴士共通一日券，适合函馆市内一日游，覆盖函馆市电和巴士全线路，支持智能手机购买。',
    price: {
      adult: {
        regular: 800
      },
      child: {
        regular: 400
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
      map: '/images/coverage/hakodate-smartphone-streetcar-bus-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车', '巴士'],
    advantages: [
      '覆盖函馆市电和巴士全线路;一自然日有效;价格合理;支持智能手机购买;适合函馆市内一日游'
    ],
    disadvantages: [
      '仅限函馆市内;不包含JR线路;需要智能手机'
    ],
    tips: [
      '适合函馆市内一日游;支持智能手机购买;可游览函馆主要景点;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆一日游', '智能手机购买', '市电巴士随便坐', '价格合理']
  },

  {
    sortOrder: 27,
    id: 'hakodate-smartphone-streetcar-bus-2day',
    name: {
      en: '函馆市电・函馆巴士共通二日券',
      jp: '函馆市电・函馆巴士共通二日券',
      cn: '函馆市电・函馆巴士共通二日券'
    },
    description: '函馆市电・函馆巴士共通二日券，适合函馆市内二日游，覆盖函馆市电和巴士全线路，支持智能手机购买。',
    price: {
      adult: {
        regular: 1200
      },
      child: {
        regular: 600
      }
    },
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/hakodate-smartphone-streetcar-bus-2day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车', '巴士'],
    advantages: [
      '覆盖函馆市电和巴士全线路;二日连续使用;价格合理;支持智能手机购买;适合函馆市内二日游'
    ],
    disadvantages: [
      '仅限函馆市内;不包含JR线路;需要智能手机'
    ],
    tips: [
      '适合函馆市内二日游;支持智能手机购买;可游览函馆主要景点;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆二日游', '智能手机购买', '市电巴士随便坐', '价格合理']
  },

  {
    sortOrder: 28,
    id: 'hakodate-night-tram-ticket',
    name: {
      en: '函馆夜间电车券',
      jp: '函馆夜间电车券',
      cn: '函馆夜间电车券'
    },
    description: '函馆夜间电车券，适合17点以后夜间游览函馆，包含函馆市电夜间使用。',
    price: {
      adult: {
        regular: 500
      },
      child: {
        regular: 250
      }
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '【期间限定】'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/hakodate-night-tram-ticket.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    advantages: [
      '覆盖函馆市电全线路;夜间优惠价格;一自然日有效;适合夜间游览函馆;购买方便'
    ],
    disadvantages: [
      '仅限函馆市电;仅限夜间使用;不包含JR线路;不包含巴士'
    ],
    tips: [
      '适合夜间游览函馆;可游览函馆夜景;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['夜间函馆游', '现金支付', '市电随便坐', '购票机可购买'],
    isLimitedPeriod: true
  },

  {
    sortOrder: 29,
    id: 'isarihi-1day-ticket',
    name: {
      en: '渔火一日券',
      jp: '渔火一日券',
      cn: '渔火一日券'
    },
    description: '道南渔火铁道的一日券，适合道南地区一日游，覆盖渔火铁道全线路。',
    price: {
      adult: {
        regular: 800
      },
      child: {
        regular: 400
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
      map: '/images/coverage/isarihi-1day-ticket.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    advantages: [
      '覆盖いさりび鉄道全线路;一自然日有效;价格合理;适合道南地区一日游;购买方便'
    ],
    disadvantages: [
      '仅限いさりび鉄道;不包含JR线路;不包含巴士;仅支持现金支付'
    ],
    tips: [
      '适合道南地区一日游;可游览道南主要景点;建议提前规划路线;注意各线路的运行时间'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['道南一日游', '现金支付', 'いさりび鉄道随便坐', '购票机可购买']
  },

  {
    sortOrder: 30,
    id: 'isarihi-1day-campus',
    name: {
      en: '渔火一日区域券',
      jp: '渔火一日区域券',
      cn: '渔火一日区域券'
    },
    description: '道南渔火铁道的一日区域券，适合道南地区一日游，覆盖渔火铁道全线路，五菱郭区域。',
    price: {
      adult: {
        regular: 600
      },
      child: {
        regular: 300
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
      map: '/images/coverage/isarihi-1day-campus.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    advantages: [
      '覆盖いさりび鉄道全线路;一自然日有效;学生优惠价格;适合道南地区一日游;购买方便'
    ],
    disadvantages: [
      '仅限いさりび鉄道;不包含JR线路;不包含巴士;仅支持现金支付'
    ],
    tips: [
      '适合道南地区一日游;学生优惠价格;可游览道南主要景点;建议提前规划路线'
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['道南一日游', '学生优惠', 'いさりび鉄道随便坐', '购票机可购买']
  }
];