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
    sortOrder: 0,
    id: 'JRKyushu-Tabibito-Kyushu-Manzoku',
    name: {
      en: '九州畅游旅名人通票',
      jp: '九州畅游旅名人通票',
      cn: '九州畅游旅名人通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Burari-Omura-Line-Kippu',
    name: {
      en: '大村线悠闲通票',
      jp: '大村线悠闲通票',
      cn: '大村线悠闲通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Yufuin-1Day-Rail-Bus',
    name: {
      en: '由布院一日铁路&巴士票',
      jp: '由布院一日铁路&巴士票',
      cn: '由布院一日铁路&巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Gurutto-Kyushu-Kippu',
    name: {
      en: '九州巡游通票',
      jp: '九州巡游通票',
      cn: '九州巡游通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Miyako-Bus-Nichinan-1Day-Free-Pass',
    name: {
      en: 'JR & 宫交巴士日南一日自由通票',
      jp: 'JR & 宫交巴士日南一日自由通票',
      cn: 'JR & 宫交巴士日南一日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Miyako-Bus-Shopping-Digital-Kippu',
    name: {
      en: 'JR & 宫交巴士购物数字票',
      jp: 'JR & 宫交巴士购物数字票',
      cn: 'JR & 宫交巴士购物数字票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Miyako-Bus-Takanabe-Digital-Kippu',
    name: {
      en: 'JR & 宫交巴士高锅数字票',
      jp: 'JR & 宫交巴士高锅数字票',
      cn: 'JR & 宫交巴士高锅数字票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Miyako-Bus-Kijo-Digital-Kippu',
    name: {
      en: 'JR & 宫交巴士木城数字票',
      jp: 'JR & 宫交巴士木城数字票',
      cn: 'JR & 宫交巴士木城数字票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'MinamiAso-Tabi-Rail-Bus',
    name: {
      en: '南阿苏旅的铁路巴士票',
      jp: '南阿苏旅的铁路巴士票',
      cn: '南阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Aso-Tabi-Rail-Bus',
    name: {
      en: '阿苏旅的铁路巴士票',
      jp: '阿苏旅的铁路巴士票',
      cn: '阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Hello-Free-Time-Net-Pass-Kyushu',
    name: {
      en: 'Hello!自由时间网络通票(全九州版)',
      jp: 'Hello!自由时间网络通票(全九州版)',
      cn: 'Hello!自由时间网络通票(全九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Hello-Free-Time-Net-Pass-North-Kyushu',
    name: {
      en: 'Hello!自由时间网络通票(北九州版)',
      jp: 'Hello!自由时间网络通票(北九州版)',
      cn: 'Hello!自由时间网络通票(北九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Hello-Free-Time-Green-Net-Pass-Kyushu',
    name: {
      en: 'Hello!自由时间绿网络通票(全九州版)',
      jp: 'Hello!自由时间绿网络通票(全九州版)',
      cn: 'Hello!自由时间绿网络通票(全九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-Hello-Free-Time-Green-Net-Pass-North-Kyushu',
    name: {
      en: 'Hello!自由时间绿网络通票(北九州版)',
      jp: 'Hello!自由时间绿网络通票(北九州版)',
      cn: 'Hello!自由时间绿网络通票(北九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'JRKyushu-JQ-Card-Odekake-Net-Pass-Kyushu',
    name: {
      en: 'JQ卡外出网络通票(全九州版)',
      jp: 'JQ卡外出网络通票(全九州版)',
      cn: 'JQ卡外出网络通票(全九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
      map: '/images/coverage/JRKyushu-JQ-Card-Odekake-Net-Pass-Kyushu.png'
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
    sortOrder: 0,
    id: 'JRKyushu-JQ-Card-Odekake-Net-Pass-North-Kyushu',
    name: {
      en: 'JQ卡外出网络通票(北九州版)',
      jp: 'JQ卡外出网络通票(北九州版)',
      cn: 'JQ卡外出网络通票(北九州版)'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
      map: '/images/coverage/JRKyushu-JQ-Card-Odekake-Net-Pass-North-Kyushu.png'
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
    sortOrder: 0,
    id: 'Solaseed-Kagoshima-Miyazaki-Free-Kippu',
    name: {
      en: '鹿儿岛·宫崎自由通票',
      jp: '鹿儿岛·宫崎自由通票',
      cn: '鹿儿岛·宫崎自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Solaseed-Yufuin-Beppu-Free-Kippu',
    name: {
      en: '由布院·别府自由通票',
      jp: '由布院·别府自由通票',
      cn: '由布院·别府自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Solaseed-West-Kyushu-Free-Kippu',
    name: {
      en: '西九州自由通票',
      jp: '西九州自由通票',
      cn: '西九州自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Solaseed-Central-Kyushu-Free-Kippu',
    name: {
      en: '中九州自由通票',
      jp: '中九州自由通票',
      cn: '中九州自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Solaseed-Whole-Kyushu-Free-Kippu',
    name: {
      en: '全九州自由通票',
      jp: '全九州自由通票',
      cn: '全九州自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Nishitetsu-Fukuoka-1Day-Pass',
    name: {
      en: '福冈一日乘车券',
      jp: '福冈一日乘车券',
      cn: '福冈一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Nishitetsu-Tenjin-Dazaifu-1Day-Free',
    name: {
      en: '福冈(天神)⇔太宰府一日自由乘车券',
      jp: '福冈(天神)⇔太宰府一日自由乘车券',
      cn: '福冈(天神)⇔太宰府一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kitakyushu-Express-Railway-1Day',
    name: {
      en: '北九州高速铁道一日券',
      jp: '北九州高速铁道一日券',
      cn: '北九州高速铁道一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Chikuhou-Dentetsu-Heichiku-OneDay-Kippu',
    name: {
      en: '筑丰电铁一日自由通票',
      jp: '筑丰电铁一日自由通票',
      cn: '筑丰电铁一日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Chikuhou-Dentetsu-24Hr-Free-Kippu',
    name: {
      en: '筑铁24小时自由通票',
      jp: '筑铁24小时自由通票',
      cn: '筑铁24小时自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Fukuoka-City-Transportation-1Day',
    name: {
      en: '福冈市1日乘车券',
      jp: '福冈市1日乘车券',
      cn: '福冈市1日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Fukuoka-FamiChika-Kippu',
    name: {
      en: '家族亲密通票',
      jp: '家族亲密通票',
      cn: '家族亲密通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Fukuoka-Family-Pair-Ticket',
    name: {
      en: '家庭两人券',
      jp: '家庭两人券',
      cn: '家庭两人券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Fukuoka-Children-100yen-Pass',
    name: {
      en: '小学生100日元票',
      jp: '小学生100日元票',
      cn: '小学生100日元票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Amagi-Railway-1Day-Free-Kippu',
    name: {
      en: '甘木铁路一日自由券',
      jp: '甘木铁路一日自由券',
      cn: '甘木铁路一日自由券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Matsuura-Railway-1Day-Pass',
    name: {
      en: '松浦铁路一日券',
      jp: '松浦铁路一日券',
      cn: '松浦铁路一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Nishihei-Bus-Sasebo-Bus-Matsuura-Railway-1Day',
    name: {
      en: '西肥巴士·佐世保巴士·松浦铁路一日通券',
      jp: '西肥巴士·佐世保巴士·松浦铁路一日通券',
      cn: '西肥巴士·佐世保巴士·松浦铁路一日通券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Matsuura-Railway-Silver-Members-1Day',
    name: {
      en: '银会员专用一日券',
      jp: '银会员专用一日券',
      cn: '银会员专用一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Nagasaki-Dentetsu-Densha-1Day-Ticket',
    name: {
      en: '长崎电铁电车一日乘车券',
      jp: '长崎电铁电车一日乘车券',
      cn: '长崎电铁电车一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Nagasaki-Dentetsu-24Hr-Ticket',
    name: {
      en: '24小时乘车券',
      jp: '24小时乘车券',
      cn: '24小时乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Shimabara-Tetsudo-Free-Pass',
    name: {
      en: '島原铁道自由通票',
      jp: '島原铁道自由通票',
      cn: '島原铁道自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
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
    sortOrder: 0,
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
    sortOrder: 0,
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
    sortOrder: 0,
    id: 'Kumamoto-City-Tram-1Day',
    name: {
      en: '熊本市电一日券',
      jp: '熊本市电一日券',
      cn: '熊本市电一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kumamoto-City-Tram-Repeat',
    name: {
      en: '熊本市电一日券（重复列出）',
      jp: '熊本市电一日券（重复列出）',
      cn: '熊本市电一日券（重复列出）'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
      map: '/images/coverage/Kumamoto-City-Tram-Repeat.png'
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
    sortOrder: 0,
    id: 'Kumamoto-City-Tram-24Hr',
    name: {
      en: '熊本市电24小时券',
      jp: '熊本市电24小时券',
      cn: '熊本市电24小时券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Minamiaso-Rail-Free-Kippu',
    name: {
      en: '南阿苏铁路一日自由券',
      jp: '南阿苏铁路一日自由券',
      cn: '南阿苏铁路一日自由券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Minamiaso-Rail-24Hr-Free',
    name: {
      en: '南阿苏铁路24小时自由通票',
      jp: '南阿苏铁路24小时自由通票',
      cn: '南阿苏铁路24小时自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Minamiaso-Tabi-Rail-Bus',
    name: {
      en: '南阿苏旅的铁路巴士票',
      jp: '南阿苏旅的铁路巴士票',
      cn: '南阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Aso-Tabi-Rail-Bus',
    name: {
      en: '阿苏旅的铁路巴士票',
      jp: '阿苏旅的铁路巴士票',
      cn: '阿苏旅的铁路巴士票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kumagawa-Hitoyoshi-Kuma-DokoDemo-Kippu',
    name: {
      en: '人吉球磨不限乘车券',
      jp: '人吉球磨不限乘车券',
      cn: '人吉球磨不限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kumagawa-Rail-1Day-Bus-Included',
    name: {
      en: '熊川铁路一日乘车券（含代行巴士）',
      jp: '熊川铁路一日乘车券（含代行巴士）',
      cn: '熊川铁路一日乘车券（含代行巴士）'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kumagawa-Rail-1Day-Rail-Only',
    name: {
      en: '熊川铁路一日乘车券（仅限铁路）',
      jp: '熊川铁路一日乘车券（仅限铁路）',
      cn: '熊川铁路一日乘车券（仅限铁路）'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kumagawa-Natsume-Yuujin-cho-Kinen-Kippu',
    name: {
      en: '夏目友人帐纪念乘车券',
      jp: '夏目友人帐纪念乘车券',
      cn: '夏目友人帐纪念乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
      map: '/images/coverage/Kumagawa-Natsume-Yuujin-cho-Kinen-Kippu.png'
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
    sortOrder: 0,
    id: 'Orange-Rail-1Day-Free-Kippu',
    name: {
      en: '橘铁一日自由券',
      jp: '橘铁一日自由券',
      cn: '橘铁一日自由券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'North-Satsuma-Great-Pass',
    name: {
      en: '北薩摩大通票',
      jp: '北薩摩大通票',
      cn: '北薩摩大通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kagoshima-City-Tram-Bus-City-View-1Day',
    name: {
      en: '鹿儿岛市电·巴士·市景一日乘车券',
      jp: '鹿儿岛市电·巴士·市景一日乘车券',
      cn: '鹿儿岛市电·巴士·市景一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kagoshima-City-Tram-Bus-City-View-24Hr',
    name: {
      en: '鹿儿岛市电·巴士·市景24小时乘车券',
      jp: '鹿儿岛市电·巴士·市景24小时乘车券',
      cn: '鹿儿岛市电·巴士·市景24小时乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Cute-Kagoshima',
    name: {
      en: 'Cute鹿儿岛票',
      jp: 'Cute鹿儿岛票',
      cn: 'Cute鹿儿岛票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Kagoshima-City-Bus-Night-Pass',
    name: {
      en: '鹿儿岛市电·巴士·市景夜间通票',
      jp: '鹿儿岛市电·巴士·市景夜间通票',
      cn: '鹿儿岛市电·巴士·市景夜间通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
      map: '/images/coverage/Kagoshima-City-Bus-Night-Pass.png'
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
    sortOrder: 0,
    id: 'Okinawa-Monorail-1Day-Or-2Day',
    name: {
      en: '冲绳都市单轨1日/2日通票',
      jp: '冲绳都市单轨1日/2日通票',
      cn: '冲绳都市单轨1日/2日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Bus-Mono-Pass',
    name: {
      en: '巴士单轨通票',
      jp: '巴士单轨通票',
      cn: '巴士单轨通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Okinawa-24Hour-Free-Pass',
    name: {
      en: '24小时无限乘车券',
      jp: '24小时无限乘车券',
      cn: '24小时无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Okinawa-Day-Pass',
    name: {
      en: '当日无限乘车券',
      jp: '当日无限乘车券',
      cn: '当日无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Okinawa-48Hour-Free-Pass',
    name: {
      en: '48小时无限乘车券',
      jp: '48小时无限乘车券',
      cn: '48小时无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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
    sortOrder: 0,
    id: 'Okinawa-Weekday-Off-Peak-Pass',
    name: {
      en: '平日非高峰无限乘车券',
      jp: '平日非高峰无限乘车券',
      cn: '平日非高峰无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 0
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