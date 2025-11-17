import { JRPass } from '@/types/pass';

// 东北地区周游券
export const tohokuPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'gonosen-free-pass',
    name: {
      en: '五能线自由乘车券',
      jp: '五能线自由乘车券',
      cn: '五能线自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 3880
      },
      child: {
        regular: 1940
      }
    },
    bestFor: ['跨地区旅行', '轻松旅游'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['青森县, 秋田县'],
      map: '/images/coverage/gonosen-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 2,
    id: 'sendai-marugoto-pass',
    name: {
      en: '仙台全域通票',
      jp: '仙台全域通票',
      cn: '仙台全域通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2720
      },
      child: {
        regular: 1350
      }
    },
    bestFor: [],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['宫城县', '仙台'],
      map: '/images/coverage/sendai-marugoto-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 3,
    id: 'aizu-gurutto-card',
    name: {
      en: '会津环游卡',
      jp: '会津环游卡',
      cn: '会津环游卡'
    },
    description: '',
    price: {
      adult: {
        regular: 2720
      },
      child: {
        regular: 1360
      }
    },
    bestFor: [],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县', '会津'],
      map: '/images/coverage/aizu-gurutto-card.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 4,
    id: 'chiisana-tabi-holiday-pass',
    name: {
      en: '小旅假期通票',
      jp: '小旅假期通票',
      cn: '小旅假期通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2720
      },
      child: {
        regular: 1350
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县'],
      map: '/images/coverage/chiisana-tabi-holiday-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', 'BRT'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 5,
    id: 'iwate-holiday-pass',
    name: {
      en: '岩手假日通票',
      jp: '岩手假日通票',
      cn: '岩手假日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2510
      },
      child: {
        regular: 1250
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['岩手县'],
      map: '/images/coverage/iwate-holiday-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', 'BRT'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 6,
    id: 'aomori-holiday-pass',
    name: {
      en: '青森假日通票',
      jp: '青森假日通票',
      cn: '青森假日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2520
      },
      child: {
        regular: 1260
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['青森县'],
      map: '/images/coverage/aomori-holiday-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', 'BRT'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 14,
    id: 'daikokuten-free-pass',
    name: {
      en: '大黑天乘车券',
      jp: '大黑天乘车券',
      cn: '大黑天乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 500
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['青森县'],
      map: '/images/coverage/tsutetsu-95th-1day-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 16,
    id: 'aoimori-1day-pass',
    name: {
      en: '青森一天任意乘车券',
      jp: '青森一天任意乘车券',
      cn: '青森一天任意乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 2100
      },
      child: {
        regular: 1050
      },
      under18: 1530
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['青森县'],
      map: '/images/coverage/aomori-nonai-1coin-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 19,
    id: 'akita-nairikku-1day-pass',
    name: {
      en: '秋田内陆一天任意乘车券',
      jp: '秋田内陆一天任意乘车券',
      cn: '秋田内陆一天任意乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 2500,
        phone: 2400
      },
      child: {
        regular: 1250,
        phone: 1200
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田县'],
      map: '/images/coverage/morimori-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 20,
    id: 'akita-nairikku-2day-pass',
    name: {
      en: '秋田内陆两天任意乘车券',
      jp: '秋田内陆两天任意乘车券',
      cn: '秋田内陆两天任意乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 3500
      },
      child: {
        regular: 1750
      }
    },
    bestFor: [],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田县'],
      map: '/images/coverage/akita-nairikku-1day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 21,
    id: 'birthday-1day-free-pass',
    name: {
      en: '生日当天一日任意乘车券',
      jp: '生日当天一日任意乘车券',
      cn: '生日当天一日任意乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1500
      },
      child: {
        regular: 750
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田县'],
      map: '/images/coverage/akita-nairikku-2day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 23,
    id: 'ensen-mankitsu-toy-pass',
    name: {
      en: '沿线畅游（玩具）乘车券',
      jp: '沿线畅游（玩具）乘车券',
      cn: '沿线畅游（玩具）乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1700
      },
      child: {
        regular: 1000
      }
    },
    bestFor: ['包含玩具美術館入館料'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田县'],
      map: '/images/coverage/colopl-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 24,
    id: 'rakuraku-yuyu-pass',
    name: {
      en: '快乐漫游乘车券',
      jp: '快乐漫游乘车券',
      cn: '快乐漫游乘车券'
    },
    description: '包含玩具美術館入館料　',
    price: {
      adult: {
        regular: 1100
      },
      child: {
        regular: 500
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '土日祝日'
    },
    coverage: {
      regions: ['秋田县'],
      map: '/images/coverage/ensen-mankitsu-toy-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 25,
    id: 'igr-holiday-free-pass',
    name: {
      en: 'IGR假日自由乘车券',
      jp: 'IGR假日自由乘车券',
      cn: 'IGR假日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 3000
      },
      child: {
        regular: 1500
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['岩手县'],
      map: '/images/coverage/rakuraku-yuyu-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 29,
    id: 'rias-line-total-free-pass',
    name: {
      en: '全线任意乘车券（Rias线）',
      jp: '全线任意乘车券（Rias线）',
      cn: '全线任意乘车券（Rias线）'
    },
    description: '',
    price: {
      adult: {
        regular: 6100
      },
      child: {
        regular: 3050
      }
    },
    bestFor: [],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['岩手县'],
      map: '/images/coverage/rias-line-total-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 30,
    id: '1day-free-pass-sakari-kamaishi',
    name: {
      en: '一日任意乘车券（盛~釜石区间）',
      jp: '一日任意乘车券（盛~釜石区间）',
      cn: '一日任意乘车券（盛~釜石区间）'
    },
    description: '',
    price: {
      adult: {
        regular: 1500
      },
      child: {
        regular: 750
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '土休日'
    },
    coverage: {
      regions: ['岩手县'],
      map: '/images/coverage/1day-free-pass-sakari-kamaishi.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 31,
    id: '1day-free-pass-kamaishi-miyako',
    name: {
      en: '一日任意乘车券（釜石~宫古区间）',
      jp: '一日任意乘车券（釜石~宫古区间）',
      cn: '一日任意乘车券（釜石~宫古区间）'
    },
    description: '',
    price: {
      adult: {
        regular: 2400
      },
      child: {
        regular: 1200
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '土休日'
    },
    coverage: {
      regions: ['岩手县'],
      map: '/images/coverage/1day-free-pass-kamaishi-miyako.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 32,
    id: '1day-free-pass-miyako-kuji',
    name: {
      en: '一日任意乘车券（宫古~久慈区间）',
      jp: '一日任意乘车券（宫古~久慈区间）',
      cn: '一日任意乘车券（宫古~久慈区间）'
    },
    description: '',
    price: {
      adult: {
        regular: 2600
      },
      child: {
        regular: 1300
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '土休日'
    },
    coverage: {
      regions: ['岩手县'],
      map: '/images/coverage/1day-free-pass-miyako-kuji.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 35,
    id: 'mocchi-parent-child-grandchild-pass',
    name: {
      en: '亲子孙三代任意乘车券',
      jp: '亲子孙三代任意乘车券',
      cn: '亲子孙三代任意乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '平日'
    },
    coverage: {
      regions: ['青森县'],
      map: '/images/coverage/mocchi-parent-child-grandchild-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 36,
    id: 'weekend-holiday-free-pass',
    name: {
      en: '土休日自由乘车券',
      jp: '土休日自由乘车券',
      cn: '土休日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '土休日'
    },
    coverage: {
      regions: ['青森县'],
      map: '/images/coverage/weekend-holiday-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 37,
    id: 'subway-1day-pass',
    name: {
      en: '地铁一日乘车券',
      jp: '地铁一日乘车券',
      cn: '地铁一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 840,
        phone: 620
      },
      child: {
        regular: 420,
        phone: 310
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['宫城县', '仙台'],
      map: '/images/coverage/subway-1day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 38,
    id: 'loople-sendai-subway-1day-pass',
    name: {
      en: '仙台环游巴士- 地铁通用一日券',
      jp: '仙台环游巴士- 地铁通用一日券',
      cn: '仙台环游巴士- 地铁通用一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 920
      },
      child: {
        regular: 460
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '土休日'
    },
    coverage: {
      regions: ['宫城县', '仙台'],
      map: '/images/coverage/loople-sendai-subway-1day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 40,
    id: 'iizaka-onsen-higaeri-pass',
    name: {
      en: '饭坂温泉一日游乘车券',
      jp: '饭坂温泉一日游乘车券',
      cn: '饭坂温泉一日游乘车券'
    },
    description: '飯坂温泉入浴券付き',
    price: {
      adult: {
        regular: 1500
      },
      child: {
        regular: 750
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县'],
      map: '/images/coverage/iizaka-onsen-higaeri-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 41,
    id: 'abukyu-no-hi-free-pass',
    name: {
      en: '“阿武急之日”自由乘车券',
      jp: '“阿武急之日”自由乘车券',
      cn: '“阿武急之日”自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 600
      },
      child: {
        regular: 300
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县'],
      map: '/images/coverage/abukyu-no-hi-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 42,
    id: 'abukyu-tokudane-pass',
    name: {
      en: '阿武急特惠乘车券',
      jp: '阿武急特惠乘车券',
      cn: '阿武急特惠乘车券'
    },
    description: '毎月９のつく日',
    price: {
      adult: {
        regular: 900
      },
      child: {
        regular: 450
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年毎月９のつく日'
    },
    coverage: {
      regions: ['福岛县'],
      map: '/images/coverage/abukyu-tokudane-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 45,
    id: 'ii-den-1day-free-pass',
    name: {
      en: '好电一天任意乘车券',
      jp: '好电一天任意乘车券',
      cn: '好电一天任意乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县'],
      map: '/images/coverage/ii-den-1day-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 46,
    id: 'iizaka-onsen-yuttari-pass',
    name: {
      en: '饭坂温泉悠闲票',
      jp: '饭坂温泉悠闲票',
      cn: '饭坂温泉悠闲票'
    },
    description: '飯坂温泉日帰り入湯券',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 500
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县'],
      map: '/images/coverage/iizaka-onsen-yuttari-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 47,
    id: 'hanamomo-free-pass',
    name: {
      en: '花桃自由乘车券',
      jp: '花桃自由乘车券',
      cn: '花桃自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1500
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县'],
      map: '/images/coverage/hanamomo-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 50,
    id: 'aizu-nikko-free-pass-wakamatsu',
    name: {
      en: '会津- 日光自由乘车券（若松区域）',
      jp: '会津- 日光自由乘车券（若松区域）',
      cn: '会津- 日光自由乘车券（若松区域）'
    },
    description: '',
    price: {
      adult: {
        regular: 5150
      },
      child: {
        regular: 2610
      }
    },
    bestFor: [],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县', '会津'],
      map: '/images/coverage/aizu-nikko-free-pass-wakamatsu.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 51,
    id: 'aizu-nikko-free-pass-minamiaizu',
    name: {
      en: '会津- 日光自由乘车券（南会津区域）',
      jp: '会津- 日光自由乘车券（南会津区域）',
      cn: '会津- 日光自由乘车券（南会津区域）'
    },
    description: '',
    price: {
      adult: {
        regular: 4190
      },
      child: {
        regular: 2130
      }
    },
    bestFor: [],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛县', '会津'],
      map: '/images/coverage/aizu-nikko-free-pass-minamiaizu.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  }
];