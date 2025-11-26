import { JRPass } from '@/types/pass';

// 九州地区周游券
export const kyushuPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'jr-kyushu-rail-pass-all-kyushu-3day',
    name: {
      en: 'JR九州铁路周游券（全九州）3日券',
      jp: 'JR九州铁路周游券（全九州）3日券',
      cn: 'JR九州铁路周游券（全九州）3日券'
    },
    description: '九州全岛的3日周游券，覆盖熊本、鹿儿岛、博多，九州最全面的周游券。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['九州全岛', '新干线体验', '3日旅行'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-kyushu-rail-pass-all-kyushu-3day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/47-kyushu-rail-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/47-kyushu-rail-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/kyushu-rail-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 5
  },

  {
    sortOrder: 2,
    id: 'jr-kyushu-rail-pass-all-kyushu-5day',
    name: {
      en: 'JR九州铁路周游券（全九州）5日券',
      jp: 'JR九州铁路周游券（全九州）5日券',
      cn: 'JR九州铁路周游券（全九州）5日券'
    },
    description: '九州全岛的5日周游券，覆盖熊本、鹿儿岛、博多，九州最全面的周游券。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['九州全岛', '新干线体验', '5日旅行'],
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-kyushu-rail-pass-all-kyushu-5day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/47-kyushu-rail-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/47-kyushu-rail-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/kyushu-rail-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 5
  },

  {
    sortOrder: 3,
    id: 'jr-kyushu-rail-pass-all-kyushu-7day',
    name: {
      en: 'JR九州铁路周游券（全九州）7日券',
      jp: 'JR九州铁路周游券（全九州）7日券',
      cn: 'JR九州铁路周游券（全九州）7日券'
    },
    description: '九州全岛的7日周游券，覆盖熊本、鹿儿岛、博多，九州最全面的周游券。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['九州全岛', '新干线体验', '7日旅行'],
    duration: [7],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-kyushu-rail-pass-all-kyushu-7day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/47-kyushu-rail-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/47-kyushu-rail-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/kyushu-rail-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 5
  },

  {
    sortOrder: 4,
    id: 'jr-northern-kyushu-pass-3day',
    name: {
      en: 'JR北九州周游券3日券',
      jp: 'JR北九州周游券3日券',
      cn: 'JR北九州周游券3日券'
    },
    description: '北九州（博多→长崎）的3日周游券，北部专用，适合北九州地区旅行。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['北九州地区', '博多长崎', '3日旅行'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-northern-kyushu-pass-3day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/64-northern-kyushu-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/64-northern-kyushu-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/northern-kyushu-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 4
  },

  {
    sortOrder: 5,
    id: 'jr-southern-kyushu-pass',
    name: {
      en: 'JR南九州周游券',
      jp: 'JR南九州周游券',
      cn: 'JR南九州周游券'
    },
    description: '鹿儿岛、宫崎的3日周游券，热带南部风光，适合南九州地区旅行。',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['南九州地区', '鹿儿岛宫崎', '热带风光'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/jr-southern-kyushu-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      { name: 'JR九州', url: 'https://www.jrkyushu.co.jp/' }
    ],
    purchaseLinks: [
      { name: 'JR九州官方', url: 'https://www.jrkyushu.co.jp/', type: 'official' },
      { name: 'Klook购买', url: 'https://www.klook.com/zh-CN/activity/65-southern-kyushu-pass/', type: 'official' },
      { name: 'KKday购买', url: 'https://www.kkday.com/zh-tw/product/65-southern-kyushu-pass', type: 'official' },
      { name: 'Voyagin购买', url: 'https://www.voyagin.com/zh-cn/activities/southern-kyushu-pass', type: 'official' }
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 6,
    id: 'JRKyushu-Tabibito-Kyushu-Manzoku',
    name: {
      en: '九州畅游旅名人通票',
      jp: '九州畅游旅名人通票',
      cn: '九州畅游旅名人通票'
    },
    description: '購入日より３ヶ月の任意の３日(回)',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 12000
      }
    },
    bestFor: ['九州全岛', '新干线体验', '3日旅行'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Tabibito-Kyushu-Manzoku.png'
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
    sortOrder: 7,
    id: 'JRKyushu-Burari-Omura-Line-Kippu',
    name: {
      en: '大村线悠闲通票',
      jp: '大村线悠闲通票',
      cn: '大村线悠闲通票'
    },
    description: '',
    price: {
      adult: {
        regular: 3700
      },
      child: {
        regular: 1850
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
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Burari-Omura-Line-Kippu.png'
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
    sortOrder: 8,
    id: 'JRKyushu-Yufuin-1Day-Rail-Bus',
    name: {
      en: '由布院一日铁路&巴士票',
      jp: '由布院一日铁路&巴士票',
      cn: '由布院一日铁路&巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 2670
      },
      child: {
        regular: 1340
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
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Yufuin-1Day-Rail-Bus.png'
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
    sortOrder: 9,
    id: 'JRKyushu-Gurutto-Kyushu-Kippu',
    name: {
      en: '九州巡游通票',
      jp: '九州巡游通票',
      cn: '九州巡游通票'
    },
    description: '',
    price: {
      adult: {
        regular: 15800,
        phone: 14300
      },
      child: {
        regular: 7900,
        phone: 7150
      }
    },
    bestFor: [],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Gurutto-Kyushu-Kippu.png'
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
    sortOrder: 10,
    id: 'JRKyushu-Miyako-Bus-Nichinan-1Day-Free-Pass',
    name: {
      en: 'JR & 宫交巴士日南一日自由通票',
      jp: 'JR & 宫交巴士日南一日自由通票',
      cn: 'JR & 宫交巴士日南一日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2300
      },
      child: {
        regular: 1150
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
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Miyako-Bus-Nichinan-1Day-Free-Pass.png'
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
    sortOrder: 11,
    id: 'JRKyushu-Miyako-Bus-Shopping-Digital-Kippu',
    name: {
      en: 'JR & 宫交巴士购物数字票',
      jp: 'JR & 宫交巴士购物数字票',
      cn: 'JR & 宫交巴士购物数字票'
    },
    description: '',
    price: {
      adult: {
        regular: 1600
      },
      child: {
        regular: 1220
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
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Miyako-Bus-Shopping-Digital-Kippu.png'
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
    sortOrder: 12,
    id: 'JRKyushu-Miyako-Bus-Takanabe-Digital-Kippu',
    name: {
      en: 'JR & 宫交巴士高锅数字票',
      jp: 'JR & 宫交巴士高锅数字票',
      cn: 'JR & 宫交巴士高锅数字票'
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
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Miyako-Bus-Takanabe-Digital-Kippu.png'
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
    sortOrder: 13,
    id: 'JRKyushu-Miyako-Bus-Kijo-Digital-Kippu',
    name: {
      en: 'JR & 宫交巴士木城数字票',
      jp: 'JR & 宫交巴士木城数字票',
      cn: 'JR & 宫交巴士木城数字票'
    },
    description: '',
    price: {
      adult: {
        regular: 1900
      },
      child: {
        regular: 950
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
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Miyako-Bus-Kijo-Digital-Kippu.png'
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
    sortOrder: 14,
    id: 'MinamiAso-Tabi-Rail-Bus',
    name: {
      en: '南阿苏旅的铁路巴士票',
      jp: '南阿苏旅的铁路巴士票',
      cn: '南阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 2000
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/MinamiAso-Tabi-Rail-Bus.png'
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
    sortOrder: 15,
    id: 'Aso-Tabi-Rail-Bus',
    name: {
      en: '阿苏旅的铁路巴士票',
      jp: '阿苏旅的铁路巴士票',
      cn: '阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 3200
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Aso-Tabi-Rail-Bus.png'
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
    id: 'JRKyushu-Hello-Free-Time-Net-Pass-Kyushu',
    name: {
      en: 'Hello!自由时间网络通票(全九州版)',
      jp: 'Hello!自由时间网络通票(全九州版)',
      cn: 'Hello!自由时间网络通票(全九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 22800
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Hello-Free-Time-Net-Pass-Kyushu.png'
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
    sortOrder: 17,
    id: 'JRKyushu-Hello-Free-Time-Net-Pass-North-Kyushu',
    name: {
      en: 'Hello!自由时间网络通票(北九州版)',
      jp: 'Hello!自由时间网络通票(北九州版)',
      cn: 'Hello!自由时间网络通票(北九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 11300
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Hello-Free-Time-Net-Pass-North-Kyushu.png'
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
    sortOrder: 18,
    id: 'JRKyushu-Hello-Free-Time-Green-Net-Pass-Kyushu',
    name: {
      en: 'Hello!自由时间绿网络通票(全九州版)',
      jp: 'Hello!自由时间绿网络通票(全九州版)',
      cn: 'Hello!自由时间绿网络通票(全九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 26000
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Hello-Free-Time-Green-Net-Pass-Kyushu.png'
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
    id: 'JRKyushu-Hello-Free-Time-Green-Net-Pass-North-Kyushu',
    name: {
      en: 'Hello!自由时间绿网络通票(北九州版)',
      jp: 'Hello!自由时间绿网络通票(北九州版)',
      cn: 'Hello!自由时间绿网络通票(北九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 13500
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/JRKyushu-Hello-Free-Time-Green-Net-Pass-North-Kyushu.png'
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
    id: 'Solaseed-Kagoshima-Miyazaki-Free-Kippu',
    name: {
      en: '鹿儿岛·宫崎自由通票2',
      jp: '鹿儿岛·宫崎自由通票2',
      cn: '鹿儿岛·宫崎自由通票2'
    },
    description: '',
    price: {
      adult: {
        regular: 7100,
        phone: 6390
      },
      child: {
        regular: 3600,
        phone: 3240
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Kagoshima-Miyazaki-Free-Kippu.png'
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
    id: 'Solaseed-Kagoshima-Miyazaki-Free-Kippu',
    name: {
      en: '鹿儿岛·宫崎自由通票3',
      jp: '鹿儿岛·宫崎自由通票3',
      cn: '鹿儿岛·宫崎自由通票3'
    },
    description: '',
    price: {
      adult: {
        regular: 8400,
        phone: 4200
      },
      child: {
        regular: 7560,
        phone: 3780
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Kagoshima-Miyazaki-Free-Kippu.png'
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
    sortOrder: 22,
    id: 'Solaseed-Yufuin-Beppu-Free-Kippu',
    name: {
      en: '由布院·别府自由通票2',
      jp: '由布院·别府自由通票2',
      cn: '由布院·别府自由通票2'
    },
    description: '',
    price: {
      adult: {
        regular: 9600,
        phone: 8640
      },
      child: {
        regular: 4800,
        phone: 4320
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Yufuin-Beppu-Free-Kippu.png'
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
    id: 'Solaseed-Yufuin-Beppu-Free-Kippu',
    name: {
      en: '由布院·别府自由通票3',
      jp: '由布院·别府自由通票3',
      cn: '由布院·别府自由通票3'
    },
    description: '',
    price: {
      adult: {
        regular: 10900,
        phone: 9810
      },
      child: {
        regular: 5500,
        phone: 4950
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Yufuin-Beppu-Free-Kippu.png'
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
    id: 'Solaseed-West-Kyushu-Free-Kippu',
    name: {
      en: '西九州自由通票2',
      jp: '西九州自由通票2',
      cn: '西九州自由通票2'
    },
    description: '',
    price: {
      adult: {
        regular: 11500,
        phone: 10350
      },
      child: {
        regular: 5800,
        phone: 5220
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-West-Kyushu-Free-Kippu.png'
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
    id: 'Solaseed-West-Kyushu-Free-Kippu',
    name: {
      en: '西九州自由通票3',
      jp: '西九州自由通票3',
      cn: '西九州自由通票3'
    },
    description: '',
    price: {
      adult: {
        regular: 12600,
        phone: 11340
      },
      child: {
        regular: 6300,
        phone: 5670
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-West-Kyushu-Free-Kippu.png'
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
    sortOrder: 26,
    id: 'Solaseed-Central-Kyushu-Free-Kippu',
    name: {
      en: '中九州自由通票2',
      jp: '中九州自由通票2',
      cn: '中九州自由通票2'
    },
    description: '',
    price: {
      adult: {
        regular: 12400,
        phone: 11160
      },
      child: {
        regular: 6200,
        phone: 5580
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Central-Kyushu-Free-Kippu.png'
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
    sortOrder: 27,
    id: 'Solaseed-Central-Kyushu-Free-Kippu',
    name: {
      en: '中九州自由通票3',
      jp: '中九州自由通票3',
      cn: '中九州自由通票3'
    },
    description: '',
    price: {
      adult: {
        regular: 13800,
        phone: 12420
      },
      child: {
        regular: 6900,
        phone: 6210
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Central-Kyushu-Free-Kippu.png'
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
    sortOrder: 28,
    id: 'Solaseed-Whole-Kyushu-Free-Kippu',
    name: {
      en: '全九州自由通票3',
      jp: '全九州自由通票3',
      cn: '全九州自由通票3'
    },
    description: '',
    price: {
      adult: {
        regular: 36100,
        phone: 32490
      },
      child: {
        regular: 18100,
        phone: 16290
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Whole-Kyushu-Free-Kippu.png'
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
    id: 'Solaseed-Whole-Kyushu-Free-Kippu',
    name: {
      en: '全九州自由通票4',
      jp: '全九州自由通票4',
      cn: '全九州自由通票4'
    },
    description: '',
    price: {
      adult: {
        regular: 37400,
        phone: 33660
      },
      child: {
        regular: 18700,
        phone: 16830
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Whole-Kyushu-Free-Kippu.png'
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
    id: 'Solaseed-Whole-Kyushu-Free-Kippu',
    name: {
      en: '全九州自由通票5',
      jp: '全九州自由通票5',
      cn: '全九州自由通票5'
    },
    description: '',
    price: {
      adult: {
        regular: 38700,
        phone: 34830
      },
      child: {
        regular: 19400,
        phone: 17460
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
      regions: ['北海道'],
      map: '/images/coverage/Solaseed-Whole-Kyushu-Free-Kippu.png'
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
    id: 'Nishitetsu-Fukuoka-1Day-Pass',
    name: {
      en: '福冈一日乘车券',
      jp: '福冈一日乘车券',
      cn: '福冈一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 2800
      },
      child: {
        regular: 1400
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
      regions: ['九州'],
      map: '/images/coverage/Nishitetsu-Fukuoka-1Day-Pass.png'
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
    id: 'Nishitetsu-Tenjin-Dazaifu-1Day-Free',
    name: {
      en: '福冈(天神)⇔太宰府一日自由乘车券',
      jp: '福冈(天神)⇔太宰府一日自由乘车券',
      cn: '福冈(天神)⇔太宰府一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 820
      },
      child: {
        regular: 420
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
      regions: ['北海道'],
      map: '/images/coverage/Nishitetsu-Tenjin-Dazaifu-1Day-Free.png'
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
    sortOrder: 33,
    id: 'Kitakyushu-Express-Railway-1Day',
    name: {
      en: '北九州高速铁道一日券',
      jp: '北九州高速铁道一日券',
      cn: '北九州高速铁道一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 700
      },
      child: {
        regular: 350
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
      regions: ['北海道'],
      map: '/images/coverage/Kitakyushu-Express-Railway-1Day.png'
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
    sortOrder: 34,
    id: 'Chikuhou-Dentetsu-Heichiku-OneDay-Kippu',
    name: {
      en: '筑丰电铁一日自由通票',
      jp: '筑丰电铁一日自由通票',
      cn: '筑丰电铁一日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1600
      },
      child: {
        regular: 800
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
      regions: ['九州'],
      map: '/images/coverage/Chikuhou-Dentetsu-Heichiku-OneDay-Kippu.png'
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
    id: 'Chikuhou-Dentetsu-24Hr-Free-Kippu',
    name: {
      en: '筑铁24小时自由通票',
      jp: '筑铁24小时自由通票',
      cn: '筑铁24小时自由通票'
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
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Chikuhou-Dentetsu-24Hr-Free-Kippu.png'
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
    id: 'Fukuoka-City-Transportation-1Day',
    name: {
      en: '福冈市1日乘车券',
      jp: '福冈市1日乘车券',
      cn: '福冈市1日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 640
      },
      child: {
        regular: 320
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
      regions: ['九州'],
      map: '/images/coverage/Fukuoka-City-Transportation-1Day.png'
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
    id: 'Fukuoka-FamiChika-Kippu',
    name: {
      en: '家族亲密通票',
      jp: '家族亲密通票',
      cn: '家族亲密通票'
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
      regions: ['九州'],
      map: '/images/coverage/Fukuoka-FamiChika-Kippu.png'
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
    id: 'Fukuoka-Family-Pair-Ticket',
    name: {
      en: '家庭两人券',
      jp: '家庭两人券',
      cn: '家庭两人券'
    },
    description: '',
    price: {
      adult: {
        regular: 800
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
      regions: ['九州'],
      map: '/images/coverage/Fukuoka-Family-Pair-Ticket.png'
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
    sortOrder: 39,
    id: 'Fukuoka-Children-100yen-Pass',
    name: {
      en: '小学生100日元票',
      jp: '小学生100日元票',
      cn: '小学生100日元票'
    },
    description: '',
    price: {
      adult: {
        regular: 100
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
      description: '春休み：2025年3月25日～2024年4月6日
夏休み：2025年7月19日～2025年8月26日
冬休み：2025年12月24日～2026年1月6日'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Fukuoka-Children-100yen-Pass.png'
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
    id: 'Amagi-Railway-1Day-Free-Kippu',
    name: {
      en: '甘木铁路一日自由券',
      jp: '甘木铁路一日自由券',
      cn: '甘木铁路一日自由券'
    },
    description: '',
    price: {
      adult: {
        regular: 860
      },
      child: {
        regular: 430
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
      regions: ['九州'],
      map: '/images/coverage/Amagi-Railway-1Day-Free-Kippu.png'
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
    id: 'Matsuura-Railway-1Day-Pass',
    name: {
      en: '松浦铁路一日券',
      jp: '松浦铁路一日券',
      cn: '松浦铁路一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 2500
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
      regions: ['九州'],
      map: '/images/coverage/Matsuura-Railway-1Day-Pass.png'
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
    id: 'Nishihei-Bus-Sasebo-Bus-Matsuura-Railway-1Day',
    name: {
      en: '西肥巴士·佐世保巴士·松浦铁路一日通券',
      jp: '西肥巴士·佐世保巴士·松浦铁路一日通券',
      cn: '西肥巴士·佐世保巴士·松浦铁路一日通券'
    },
    description: '',
    price: {
      adult: {
        regular: 4000
      },
      child: {
        regular: 2000
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
      regions: ['九州'],
      map: '/images/coverage/Nishihei-Bus-Sasebo-Bus-Matsuura-Railway-1Day.png'
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
    sortOrder: 43,
    id: 'Matsuura-Railway-Silver-Members-1Day',
    name: {
      en: '银会员专用一日券',
      jp: '银会员专用一日券',
      cn: '银会员专用一日券'
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
      regions: ['九州'],
      map: '/images/coverage/Matsuura-Railway-Silver-Members-1Day.png'
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
    sortOrder: 44,
    id: 'Nagasaki-Dentetsu-Densha-1Day-Ticket',
    name: {
      en: '长崎电铁电车一日乘车券',
      jp: '长崎电铁电车一日乘车券',
      cn: '长崎电铁电车一日乘车券'
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
      regions: ['九州'],
      map: '/images/coverage/Nagasaki-Dentetsu-Densha-1Day-Ticket.png'
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
    id: 'Nagasaki-Dentetsu-24Hr-Ticket',
    name: {
      en: '24小时乘车券',
      jp: '24小时乘车券',
      cn: '24小时乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 700
      },
      child: {
        regular: 350
      }
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Nagasaki-Dentetsu-24Hr-Ticket.png'
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
    id: 'Shimabara-Tetsudo-Free-Pass',
    name: {
      en: '島原铁道自由通票1',
      jp: '島原铁道自由通票1',
      cn: '島原铁道自由通票1'
    },
    description: '',
    price: {
      adult: {
        regular: 3000
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
      regions: ['九州'],
      map: '/images/coverage/Shimabara-Tetsudo-Free-Pass.png'
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
    id: 'Shimabara-Tetsudo-Free-Pass',
    name: {
      en: '島原铁道自由通票2',
      jp: '島原铁道自由通票2',
      cn: '島原铁道自由通票2'
    },
    description: '',
    price: {
      adult: {
        regular: 4000
      },
      child: {
        regular: 0
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
      regions: ['九州'],
      map: '/images/coverage/Shimabara-Tetsudo-Free-Pass.png'
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
    sortOrder: 48,
    id: 'Shimabara-Tetsudo-School-Kippu',
    name: {
      en: '島原铁道学校票',
      jp: '島原铁道学校票',
      cn: '島原铁道学校票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      under18: 1500
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '土・日・祝日
春・夏・冬休み期間'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Shimabara-Tetsudo-School-Kippu.png'
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
    sortOrder: 49,
    id: 'Kumamoto-Wakuwaku-1Day-Pass',
    name: {
      en: '熊本欢乐一日通票',
      jp: '熊本欢乐一日通票',
      cn: '熊本欢乐一日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      under18: 800
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Kumamoto-Wakuwaku-1Day-Pass.png'
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
    id: 'Kumamoto-Wakuwaku-1Day-Pass',
    name: {
      en: '熊本欢乐一日通票',
      jp: '熊本欢乐一日通票',
      cn: '熊本欢乐一日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      under18: 1000
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Kumamoto-Wakuwaku-1Day-Pass.png'
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
    id: 'Kumamoto-Wakuwaku-1Day-Pass',
    name: {
      en: '熊本欢乐一日通票',
      jp: '熊本欢乐一日通票',
      cn: '熊本欢乐一日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      under18: 2200
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Kumamoto-Wakuwaku-1Day-Pass.png'
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
    sortOrder: 52,
    id: 'Kumamoto-Wakuwaku-24Hr-Pass',
    name: {
      en: '熊本欢乐24小时通票',
      jp: '熊本欢乐24小时通票',
      cn: '熊本欢乐24小时通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      under18: 800
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Kumamoto-Wakuwaku-24Hr-Pass.png'
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
    sortOrder: 53,
    id: 'Kumamoto-Wakuwaku-24Hr-Pass',
    name: {
      en: '熊本欢乐24小时通票',
      jp: '熊本欢乐24小时通票',
      cn: '熊本欢乐24小时通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      under18: 1000
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Kumamoto-Wakuwaku-24Hr-Pass.png'
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
    sortOrder: 54,
    id: 'Kumamoto-Wakuwaku-24Hr-Pass',
    name: {
      en: '熊本欢乐24小时通票',
      jp: '熊本欢乐24小时通票',
      cn: '熊本欢乐24小时通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      under18: 2200
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Kumamoto-Wakuwaku-24Hr-Pass.png'
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
    sortOrder: 55,
    id: 'Kumamoto-City-Tram-1Day',
    name: {
      en: '熊本市电一日券',
      jp: '熊本市电一日券',
      cn: '熊本市电一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 700,
        phone: 500
      },
      child: {
        regular: 350,
        phone: 250
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
      regions: ['北海道'],
      map: '/images/coverage/Kumamoto-City-Tram-1Day.png'
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
    sortOrder: 56,
    id: 'Kumamoto-City-Tram-24Hr',
    name: {
      en: '熊本市电24小时券',
      jp: '熊本市电24小时券',
      cn: '熊本市电24小时券'
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
      regions: ['九州'],
      map: '/images/coverage/Kumamoto-City-Tram-24Hr.png'
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
    sortOrder: 57,
    id: 'Minamiaso-Rail-Free-Kippu',
    name: {
      en: '南阿苏铁路一日自由券',
      jp: '南阿苏铁路一日自由券',
      cn: '南阿苏铁路一日自由券'
    },
    description: '',
    price: {
      adult: {
        regular: 1200
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
      regions: ['北海道'],
      map: '/images/coverage/Minamiaso-Rail-Free-Kippu.png'
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
    sortOrder: 58,
    id: 'Minamiaso-Rail-24Hr-Free',
    name: {
      en: '南阿苏铁路24小时自由通票',
      jp: '南阿苏铁路24小时自由通票',
      cn: '南阿苏铁路24小时自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1200
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
      regions: ['九州'],
      map: '/images/coverage/Minamiaso-Rail-24Hr-Free.png'
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
    sortOrder: 59,
    id: 'Minamiaso-Tabi-Rail-Bus',
    name: {
      en: '南阿苏旅的铁路巴士票',
      jp: '南阿苏旅的铁路巴士票',
      cn: '南阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 2000
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Minamiaso-Tabi-Rail-Bus.png'
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
    sortOrder: 60,
    id: 'Aso-Tabi-Rail-Bus',
    name: {
      en: '阿苏旅的铁路巴士票',
      jp: '阿苏旅的铁路巴士票',
      cn: '阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 3200
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Aso-Tabi-Rail-Bus.png'
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
    sortOrder: 61,
    id: 'Kumagawa-Hitoyoshi-Kuma-DokoDemo-Kippu',
    name: {
      en: '人吉球磨不限乘车券',
      jp: '人吉球磨不限乘车券',
      cn: '人吉球磨不限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 2000
      },
      child: {
        regular: 1000
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
      regions: ['九州'],
      map: '/images/coverage/Kumagawa-Hitoyoshi-Kuma-DokoDemo-Kippu.png'
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
    sortOrder: 62,
    id: 'Kumagawa-Rail-1Day-Bus-Included',
    name: {
      en: '熊川铁路一日乘车券（含代行巴士）',
      jp: '熊川铁路一日乘车券（含代行巴士）',
      cn: '熊川铁路一日乘车券（含代行巴士）'
    },
    description: '',
    price: {
      adult: {
        regular: 1200
      },
      child: {
        regular: 600
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
      regions: ['北海道'],
      map: '/images/coverage/Kumagawa-Rail-1Day-Bus-Included.png'
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
    sortOrder: 63,
    id: 'Kumagawa-Rail-1Day-Rail-Only',
    name: {
      en: '熊川铁路一日乘车券（仅限铁路）',
      jp: '熊川铁路一日乘车券（仅限铁路）',
      cn: '熊川铁路一日乘车券（仅限铁路）'
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
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Kumagawa-Rail-1Day-Rail-Only.png'
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
    sortOrder: 64,
    id: 'Orange-Rail-1Day-Free-Kippu',
    name: {
      en: '橘铁一日自由券',
      jp: '橘铁一日自由券',
      cn: '橘铁一日自由券'
    },
    description: '',
    price: {
      adult: {
        regular: 3000
      },
      child: {
        regular: 1500
      },
      over65: 1500
    },
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Orange-Rail-1Day-Free-Kippu.png'
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
    sortOrder: 65,
    id: 'North-Satsuma-Great-Pass',
    name: {
      en: '北薩摩大通票1',
      jp: '北薩摩大通票1',
      cn: '北薩摩大通票1'
    },
    description: '',
    price: {
      adult: {
        regular: 3000
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
      regions: ['九州'],
      map: '/images/coverage/North-Satsuma-Great-Pass.png'
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
    sortOrder: 66,
    id: 'North-Satsuma-Great-Pass',
    name: {
      en: '北薩摩大通票3',
      jp: '北薩摩大通票3',
      cn: '北薩摩大通票3'
    },
    description: '',
    price: {
      adult: {
        regular: 7000
      },
      child: {
        regular: 0
      }
    },
    bestFor: [],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/North-Satsuma-Great-Pass.png'
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
    sortOrder: 67,
    id: 'Kagoshima-City-Tram-Bus-City-View-1Day',
    name: {
      en: '鹿儿岛市电·巴士·市景一日乘车券',
      jp: '鹿儿岛市电·巴士·市景一日乘车券',
      cn: '鹿儿岛市电·巴士·市景一日乘车券'
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
      regions: ['九州'],
      map: '/images/coverage/Kagoshima-City-Tram-Bus-City-View-1Day.png'
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
    sortOrder: 68,
    id: 'Kagoshima-City-Tram-Bus-City-View-24Hr',
    name: {
      en: '鹿儿岛市电·巴士·市景24小时乘车券',
      jp: '鹿儿岛市电·巴士·市景24小时乘车券',
      cn: '鹿儿岛市电·巴士·市景24小时乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 800
      },
      child: {
        regular: 400
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
      regions: ['九州'],
      map: '/images/coverage/Kagoshima-City-Tram-Bus-City-View-24Hr.png'
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
    sortOrder: 69,
    id: 'Cute-Kagoshima',
    name: {
      en: 'Cute鹿儿岛票1',
      jp: 'Cute鹿儿岛票1',
      cn: 'Cute鹿儿岛票1'
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
    bestFor: [],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Cute-Kagoshima.png'
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
    sortOrder: 70,
    id: 'Cute-Kagoshima',
    name: {
      en: 'Cute鹿儿岛票2',
      jp: 'Cute鹿儿岛票2',
      cn: 'Cute鹿儿岛票2'
    },
    description: '',
    price: {
      adult: {
        regular: 1900
      },
      child: {
        regular: 950
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
      regions: ['九州'],
      map: '/images/coverage/Cute-Kagoshima.png'
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
    sortOrder: 71,
    id: 'Okinawa-Monorail-1Day-Or-2Day',
    name: {
      en: '冲绳都市单轨1日/2日通票',
      jp: '冲绳都市单轨1日/2日通票',
      cn: '冲绳都市单轨1日/2日通票'
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
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Okinawa-Monorail-1Day-Or-2Day.png'
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
    sortOrder: 72,
    id: 'Okinawa-Monorail-1Day-Or-2Day',
    name: {
      en: '冲绳都市单轨1日/2日通票',
      jp: '冲绳都市单轨1日/2日通票',
      cn: '冲绳都市单轨1日/2日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1800
      },
      child: {
        regular: 900
      }
    },
    bestFor: [],
    duration: [48],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['九州'],
      map: '/images/coverage/Okinawa-Monorail-1Day-Or-2Day.png'
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
    sortOrder: 73,
    id: 'Bus-Mono-Pass',
    name: {
      en: '巴士单轨通票',
      jp: '巴士单轨通票',
      cn: '巴士单轨通票'
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
      regions: ['九州'],
      map: '/images/coverage/Bus-Mono-Pass.png'
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
    sortOrder: 74,
    id: 'Okinawa-24Hour-Free-Pass',
    name: {
      en: '24小时无限乘车券',
      jp: '24小时无限乘车券',
      cn: '24小时无限乘车券'
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
      regions: ['北海道'],
      map: '/images/coverage/Okinawa-24Hour-Free-Pass.png'
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
    sortOrder: 75,
    id: 'Okinawa-Day-Pass',
    name: {
      en: '当日无限乘车券',
      jp: '当日无限乘车券',
      cn: '当日无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 800
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
      regions: ['北海道'],
      map: '/images/coverage/Okinawa-Day-Pass.png'
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
    sortOrder: 76,
    id: 'Okinawa-48Hour-Free-Pass',
    name: {
      en: '48小时无限乘车券',
      jp: '48小时无限乘车券',
      cn: '48小时无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1800
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
      regions: ['北海道'],
      map: '/images/coverage/Okinawa-48Hour-Free-Pass.png'
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
    sortOrder: 77,
    id: 'Okinawa-Weekday-Off-Peak-Pass',
    name: {
      en: '平日非高峰无限乘车券',
      jp: '平日非高峰无限乘车券',
      cn: '平日非高峰无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 600
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
      regions: ['北海道'],
      map: '/images/coverage/Okinawa-Weekday-Off-Peak-Pass.png'
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