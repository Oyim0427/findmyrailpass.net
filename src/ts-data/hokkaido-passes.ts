import { JRPass } from '@/types/pass';

// 北海道地区周游券
export const hokkaidoPasses: JRPass[] = [
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['现金支付; 购票机可购买']
  },

  {
    sortOrder: 8,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['函馆深度游; 电子票有优惠; 市内交通']
  },

  {
    sortOrder: 10,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['主要观光地区; 价格合理']
  },

  {
    sortOrder: 15,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['现金支付; 市电随便坐; 购票机可购买']
  },

  {
    sortOrder: 16,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['24小时券; 现金支付; 市电随便坐; 购票机可购买']
  },

  {
    sortOrder: 17,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['现金支付； 地铁市电随便坐； 购票机可购买']
  },

  {
    sortOrder: 18,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['现金支付； 市电随便坐； 购票机可购买']
  },

  {
    sortOrder: 19,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['24小时券； 智能手机购买； 市电随便坐； 价格合理']
  },

  {
    sortOrder: 20,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['智能手机购买； 市电巴士随便坐； 价格合理']
  },

  {
    sortOrder: 21,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['智能手机购买； 市电巴士随便坐； 价格合理']
  },

  {
    sortOrder: 22,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['现金支付；', 'いさりび鉄道随便坐；购票机可购买']
  },

  {
    sortOrder: 23,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['学生优惠； いさりび鉄道随便坐；购票机可购买']
  },

  {
    sortOrder: 24,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 5,
    bestFor: ['现金支付', '购票机可购买'],
    isLimitedPeriod: true
  },

  {
    sortOrder: 30,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    bestFor: ['夜间函馆游；现金支付； 市电随便坐； 购票机可购买'],
    isLimitedPeriod: true
  },

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
      regions: ['東北, 北海道'],
      map: '/images/coverage/jr-east-south-hokkaido-rail-pass-6day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    advantages: [
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['跨地区旅行; 中途旅游']
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
        phone: 22000
      },
      child: {
        regular: 11500,
        phone: 11000
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域; 预购有1000円优惠']
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
        phone: 28000
      },
      child: {
        regular: 14500,
        phone: 14000
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域; 预购有1000円优惠']
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
        phone: 37000
      },
      child: {
        regular: 19000,
        phone: 18500
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域; 预购有1000円优惠']
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['札幌・富良野・美瑛观光; 预购有1000円优惠']
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['札幌・登别观光; 预购有1000円优惠']
  },

  {
    sortOrder: 9,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    bestFor: ['北海道全域; 经典周游券; 预购有优惠']
  },

  {
    sortOrder: 11,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['Peach航空乘客; 东北海道; 知床观光']
  },

  {
    sortOrder: 13,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['Peach航空乘客; 北北海道']
  },

  {
    sortOrder: 12,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['FDA航空乘客; 东北海道; 知床观光']
  },

  {
    sortOrder: 14,
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
      
    ],
    disadvantages: [
      
    ],
    tips: [
      
    ],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['FDA航空乘客; 北北海道']
  }
];