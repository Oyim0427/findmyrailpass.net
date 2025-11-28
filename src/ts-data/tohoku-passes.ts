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
    bestFor: ['现金购票; 购票机购票'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['青森', '秋田', '东北'],
      map: '/images/coverage/gonosen-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `坐普通电车以外需另外加钱`
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
    bestFor: ['现金购票; 购票机购票'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['宫城', '仙台', '东北'],
      map: '/images/coverage/sendai-marugoto-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `坐普通电车以外需另外加钱`
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
    bestFor: ['现金购票; 购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['福岛', '仙台', '东北'],
      map: '/images/coverage/chiisana-tabi-holiday-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', 'BRT'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】周末以及4月29日～5月5日,7月20日～8月31日,12月23日～1月7日の毎日
坐普通电车以外需另外加钱`
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['岩手', '盛岡', '东北'],
      map: '/images/coverage/iwate-holiday-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', 'BRT'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】周末以及4月29日～5月5日,7月20日～8月31日,12月23日～1月7日の毎日
坐普通电车以外需另外加钱`
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['青森', '东北'],
      map: '/images/coverage/aomori-holiday-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', 'BRT'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】周末以及4月29日～5月5日,7月20日～8月31日,12月23日～1月7日の毎日
坐普通电车以外需另外加钱`
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['青森', '弘前', '东北'],
      map: '/images/coverage/daikokuten-free-pass.png'
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
      en: '青森一天乘车券',
      jp: '青森一天乘车券',
      cn: '青森一天乘车券'
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
    bestFor: ['现金购票; 便利店购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['青森', '八户', '东北'],
      map: '/images/coverage/aoimori-1day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】周末以及4月29日～5月5日
7月20日～7月31日,8月8日～8月31日
12月23日～1月7日の毎日`
  },

  {
    sortOrder: 19,
    id: 'akita-nairikku-1day-pass',
    name: {
      en: '秋田内陆一天乘车券',
      jp: '秋田内陆一天乘车券',
      cn: '秋田内陆一天乘车券'
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
    bestFor: ['现金购票; 电子购票；购票机购票; 可坐急行'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田', '东北'],
      map: '/images/coverage/akita-nairikku-1day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `全線タイプ　大人：2,500円／小人：1,250円
Ａタイプ　　大人：1,500円／小人： 750円
Ｂタイプ　　大人：1,500円／小人： 750円`
  },

  {
    sortOrder: 20,
    id: 'akita-nairikku-2day-pass',
    name: {
      en: '秋田内陆两天乘车券',
      jp: '秋田内陆两天乘车券',
      cn: '秋田内陆两天乘车券'
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
    bestFor: ['现金购票; 购票机购票; 可坐急行'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田', '东北'],
      map: '/images/coverage/akita-nairikku-2day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `这些站可购买【鷹巣駅、合川駅、米内沢駅、阿仁前田温泉駅、阿仁合駅、角館駅】`
  },

  {
    sortOrder: 21,
    id: 'birthday-1day-free-pass',
    name: {
      en: '生日一日乘车券',
      jp: '生日一日乘车券',
      cn: '生日一日乘车券'
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
    bestFor: ['现金购票; 购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田', '东北'],
      map: '/images/coverage/birthday-1day-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `※申请人的生日以及前后三天中的一天（实际上是七天）
※此优惠包括本人最多可供三位宾客使用。
※需提供出生证明。
※这些站可购买【鷹巣駅、合川駅、米内沢駅、阿仁前田温泉駅、阿仁合駅、角館駅】`
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
        regular: 1480
      },
      child: {
        regular: 900
      }
    },
    bestFor: ['现金购票; 购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['秋田', '东北'],
      map: '/images/coverage/ensen-mankitsu-toy-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `※包含玩具美術館入館料`
  },

  {
    sortOrder: 24,
    id: 'rakuraku-yuyu-pass',
    name: {
      en: '乐乐游游乘车券',
      jp: '乐乐游游乘车券',
      cn: '乐乐游游乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1100
      },
      child: {
        regular: 500
      }
    },
    bestFor: ['现金购票; 购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['秋田', '东北'],
      map: '/images/coverage/rakuraku-yuyu-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】周末以及4月28日～5月6日,8月12日～8月18日,12月29日～1月3日`
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
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['秋田', '东北'],
      map: '/images/coverage/igr-holiday-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】周末以及8月1日～4日,12月30日～1月3日`
  },

  {
    sortOrder: 29,
    id: 'rias-line-total-free-pass',
    name: {
      en: '三陆铁道全线乘车券',
      jp: '三陆铁道全线乘车券',
      cn: '三陆铁道全线乘车券'
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['岩手', '东北'],
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
      en: '三陆铁道一日乘车券（盛~釜石区间）',
      jp: '三陆铁道一日乘车券（盛~釜石区间）',
      cn: '三陆铁道一日乘车券（盛~釜石区间）'
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['岩手', '东北'],
      map: '/images/coverage/1day-free-pass-sakari-kamaishi.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true
  },

  {
    sortOrder: 31,
    id: '1day-free-pass-kamaishi-miyako',
    name: {
      en: '三陆铁道一日乘车券（釜石~宫古区间）',
      jp: '三陆铁道一日乘车券（釜石~宫古区间）',
      cn: '三陆铁道一日乘车券（釜石~宫古区间）'
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['岩手', '东北'],
      map: '/images/coverage/1day-free-pass-kamaishi-miyako.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true
  },

  {
    sortOrder: 32,
    id: '1day-free-pass-miyako-kuji',
    name: {
      en: '三陆铁道一日乘车券（宫古~久慈区间）',
      jp: '三陆铁道一日乘车券（宫古~久慈区间）',
      cn: '三陆铁道一日乘车券（宫古~久慈区间）'
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['岩手', '东北'],
      map: '/images/coverage/1day-free-pass-miyako-kuji.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true
  },

  {
    sortOrder: 35,
    id: 'mocchi-parent-child-grandchild-pass',
    name: {
      en: '山形亲子孙三代乘车券',
      jp: '山形亲子孙三代乘车券',
      cn: '山形亲子孙三代乘车券'
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '平日'
    },
    coverage: {
      regions: ['山形', '东北'],
      map: '/images/coverage/mocchi-parent-child-grandchild-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `※最多1名成人可携带2名儿童（不允许成人单独使用）`
  },

  {
    sortOrder: 36,
    id: 'weekend-holiday-free-pass',
    name: {
      en: '山形土休日自由乘车券',
      jp: '山形土休日自由乘车券',
      cn: '山形土休日自由乘车券'
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
    bestFor: ['现金购票; 电子购票；购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['山形', '东北'],
      map: '/images/coverage/weekend-holiday-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `※最多1名成人可携带2名儿童（允许成人单独使用）`
  },

  {
    sortOrder: 37,
    id: 'subway-1day-pass',
    name: {
      en: '仙台地铁一日乘车券（平日）',
      jp: '仙台地铁一日乘车券（平日）',
      cn: '仙台地铁一日乘车券（平日）'
    },
    description: '',
    price: {
      adult: {
        regular: 840
      },
      child: {
        regular: 420
      }
    },
    bestFor: ['现金购票; 购票机购票；地铁车站事务所购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '平日'
    },
    coverage: {
      regions: ['宫城', '仙台', '东北'],
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
    sortOrder: 37,
    id: 'subway-1day-pass',
    name: {
      en: '仙台地铁一日乘车券（周末）',
      jp: '仙台地铁一日乘车券（周末）',
      cn: '仙台地铁一日乘车券（周末）'
    },
    description: '',
    price: {
      adult: {
        regular: 620
      },
      child: {
        regular: 310
      }
    },
    bestFor: ['现金购票; 购票机购票；地铁车站事务所购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['宫城', '仙台', '东北'],
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
      en: '仙台环游巴士+地铁通用一日券',
      jp: '仙台环游巴士+地铁通用一日券',
      cn: '仙台环游巴士+地铁通用一日券'
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
    bestFor: ['现金购票; 电子购票；购票机购票；地铁车站事务所购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['宫城', '仙台', '东北'],
      map: '/images/coverage/loople-sendai-subway-1day-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    isLimitedPeriod: true
  },

  {
    sortOrder: 40,
    id: 'iizaka-onsen-higaeri-pass',
    name: {
      en: '饭坂温泉一日游乘车券',
      jp: '饭坂温泉一日游乘车券',
      cn: '饭坂温泉一日游乘车券'
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
    bestFor: ['现金购票; 乘车券贩卖所购票；温泉券'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛', '东北'],
      map: '/images/coverage/iizaka-onsen-higaeri-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `※包含饭坂温泉入浴券`
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
    bestFor: ['现金购票; 乘车券贩卖所购票；车内购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛', '东北'],
      map: '/images/coverage/abukyu-no-hi-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】毎月第一周日と10月14日，1月1日`
  },

  {
    sortOrder: 42,
    id: 'abukyu-tokudane-pass',
    name: {
      en: '阿武急特惠乘车券',
      jp: '阿武急特惠乘车券',
      cn: '阿武急特惠乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 900
      },
      child: {
        regular: 450
      }
    },
    bestFor: ['现金购票; 乘车券贩卖所购票；'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年毎月9日，19日，29日'
    },
    coverage: {
      regions: ['福岛', '东北'],
      map: '/images/coverage/abukyu-tokudane-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `【利用期間】毎月的9日，19日，29日`
  },

  {
    sortOrder: 45,
    id: 'ii-den-1day-free-pass',
    name: {
      en: '福岛好电一天乘车券',
      jp: '福岛好电一天乘车券',
      cn: '福岛好电一天乘车券'
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
    bestFor: ['现金购票; 乘车券贩卖所购票；温泉券'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛', '东北'],
      map: '/images/coverage/ii-den-1day-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `※包含温泉入浴券
鯖湖湯/天王子寺穴原温泉/仙気の湯/八幡の湯/大門の湯/十網の湯/波来湯/導専の湯`
  },

  {
    sortOrder: 46,
    id: 'iizaka-onsen-yuttari-pass',
    name: {
      en: '饭坂温泉悠闲票',
      jp: '饭坂温泉悠闲票',
      cn: '饭坂温泉悠闲票'
    },
    description: '',
    price: {
      adult: {
        regular: 1300
      },
      child: {
        regular: 650
      }
    },
    bestFor: ['现金购票; 乘车券贩卖所购票；温泉券'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛', '东北'],
      map: '/images/coverage/iizaka-onsen-yuttari-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `※包含饭坂温泉入浴券`
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
    bestFor: ['现金购票; 乘车券贩卖所购票；温泉券'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛', '东北'],
      map: '/images/coverage/hanamomo-free-pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    ticket_note: `※包含花桃汤入館券`
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
    bestFor: ['现金购票; 乘车券贩卖所购票；车内购票'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛', '会津', '东北'],
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
    bestFor: ['现金购票; 乘车券贩卖所购票；车内购票'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['福岛', '会津', '东北'],
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