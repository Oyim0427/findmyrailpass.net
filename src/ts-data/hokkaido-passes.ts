import { JRPass } from '@/types/pass';

// 北海道地区周游券
export const hokkaidoPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'hokkaido-rail-pass-7day-all',
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
        regular: 0
      }
    },
    bestFor: ['北海道全域; 现金购票; 电子票有1000円优惠；经典周游券'],
    duration: [7],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass-7day-all.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车', '新干线不可'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4,
    ticket_note: `※使用不可：4月27日～5月6日、8月10日～19日、12月28日～1月6日
※坐快车需加钱`
  },

  {
    sortOrder: 2,
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
    bestFor: ['现金购票; 购票机购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '札幌'],
      map: '/images/coverage/sapporo-subway-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3
  },

  {
    sortOrder: 3,
    id: 'donichika-Kippu',
    name: {
      en: '札幌地铁周末节假日一日券',
      jp: '札幌地铁周末节假日一日券',
      cn: '札幌地铁周末节假日一日券'
    },
    description: '札幌地铁全线路的一日券，适合札幌市内周末节假日一日游。',
    price: {
      adult: {
        regular: 520
      },
      child: {
        regular: 260
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
      regions: ['北海道', '札幌'],
      map: '/images/coverage/Donichika-Kippu.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 4,
    isLimitedPeriod: true
  },

  {
    sortOrder: 4,
    id: 'sapporo-streetcar-1day',
    name: {
      en: '札幌市电一日券',
      jp: '札幌市电一日券',
      cn: '札幌市电一日券'
    },
    description: '札幌市电的一日券，适合札幌市内平日市电附近一日游。',
    price: {
      adult: {
        regular: 570
      },
      child: {
        regular: 290
      }
    },
    bestFor: ['现金购票; 电子购票；车内购票； 地铁车站事务所购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '平日'
    },
    coverage: {
      regions: ['北海道', '札幌'],
      map: '/images/coverage/sapporo-streetcar-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    isLimitedPeriod: true
  },

  {
    sortOrder: 5,
    id: 'sapporo-dousanko-1day',
    name: {
      en: '道产子一日券',
      jp: '道产子一日券',
      cn: '道产子一日券'
    },
    description: '札幌市电的一日券，适合札幌市内假日市电附近一日游。',
    price: {
      adult: {
        regular: 460
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['现金购票; 电子购票；车内购票； 地铁车站事务所购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['北海道', '札幌'],
      map: '/images/coverage/sapporo-dousanko-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3,
    isLimitedPeriod: true
  },

  {
    sortOrder: 6,
    id: 'sapporo-streetcar-24hour',
    name: {
      en: '札幌市电24小时券',
      jp: '札幌市电24小时券',
      cn: '札幌市电24小时券'
    },
    description: '札幌市电的24小时券，适合札幌市内市电附近跨天24小时游。',
    price: {
      adult: {
        regular: 840
      },
      child: {
        regular: 420
      }
    },
    bestFor: ['24小时券; 现金购票; 电子购票；车内购买； 地铁车站事务所购票'],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '札幌'],
      map: '/images/coverage/sapporo-streetcar-24hour.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 4
  },

  {
    sortOrder: 7,
    id: 'hakodate-streetcar-1day',
    name: {
      en: '函馆市电一日券',
      jp: '函馆市电一日券',
      cn: '函馆市电一日券'
    },
    description: '函馆市电的一日券，适合函馆市内市电附近一日游。',
    price: {
      adult: {
        regular: 600,
        phone: 600
      },
      child: {
        regular: 300,
        phone: 300
      }
    },
    bestFor: ['现金购票；电子购票；车内购票； 乘车券贩卖所购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '函館'],
      map: '/images/coverage/hakodate-streetcar-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3
  },

  {
    sortOrder: 8,
    id: 'hakodate-smartphone-streetcar-24hour',
    name: {
      en: '函馆市电24小时券',
      jp: '函馆市电24小时券',
      cn: '函馆市电24小时券'
    },
    description: '函馆市电24小时券，，适合函馆市内市电附近跨天24小时游。',
    price: {
      adult: {
        regular: 900
      },
      child: {
        regular: 450
      }
    },
    bestFor: ['24小时券; 现金购票; 电子购票；车内购票； 乘车券贩卖所购票'],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '函館'],
      map: '/images/coverage/hakodate-smartphone-streetcar-24hour.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3
  },

  {
    sortOrder: 9,
    id: 'hakodate-smartphone-streetcar-bus-1day',
    name: {
      en: '函馆市电・函馆巴士共通一日券',
      jp: '函馆市电・函馆巴士共通一日券',
      cn: '函馆市电・函馆巴士共通一日券'
    },
    description: '函馆市电・函馆巴士共通一日券，适合函馆市内全域一日游。',
    price: {
      adult: {
        regular: 0,
        phone: 1400
      },
      child: {
        regular: 0,
        phone: 700
      }
    },
    bestFor: ['电子购票；函馆全域'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '函館'],
      map: '/images/coverage/hakodate-smartphone-streetcar-bus-1day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车', '巴士'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3
  },

  {
    sortOrder: 10,
    id: 'hakodate-smartphone-streetcar-bus-2day',
    name: {
      en: '函馆市电・函馆巴士共通二日券',
      jp: '函馆市电・函馆巴士共通二日券',
      cn: '函馆市电・函馆巴士共通二日券'
    },
    description: '函馆市电・函馆巴士共通二日券，适合函馆市内全域二日游。',
    price: {
      adult: {
        regular: 0,
        phone: 2400
      },
      child: {
        regular: 0,
        phone: 1200
      }
    },
    bestFor: ['电子购票；函馆全域'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '函館'],
      map: '/images/coverage/hakodate-smartphone-streetcar-bus-2day.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['路面电车', '巴士'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3
  },

  {
    sortOrder: 11,
    id: 'isarihi-1day-ticket',
    name: {
      en: '渔火一日券',
      jp: '渔火一日券',
      cn: '渔火一日券'
    },
    description: '（函馆）道南渔火铁道的一日券，适合道南地区一日游。',
    price: {
      adult: {
        regular: 1100
      },
      child: {
        regular: 550
      }
    },
    bestFor: ['现金购票；电子购票；函館市观光所购票'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['南北海道', '函館'],
      map: '/images/coverage/isarihi-1day-ticket.png'
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
    bestFor: ['跨地区旅行; 现金购票；电子购票；购票机购票'],
    duration: [6],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['東北； 南北海道'],
      map: '/images/coverage/jr-east-south-hokkaido-rail-pass-6day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['新干线', '特急电车', '急行电车', '普通电车', 'JR巴士'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4
  },

  {
    sortOrder: 13,
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
    bestFor: ['北海道全域; 现金购票; 电子票有1000円优惠；经典周游券'],
    duration: [5],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass-5day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4
  },

  {
    sortOrder: 14,
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
    bestFor: ['北海道全域; 现金购票; 电子票有1000円优惠；经典周游券'],
    duration: [7],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass-7day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 5
  },

  {
    sortOrder: 15,
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
    bestFor: ['北海道全域; 现金购票; 电子票有1000円优惠；经典周游券'],
    duration: [10],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道全域'],
      map: '/images/coverage/hokkaido-rail-pass-10day.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4
  },

  {
    sortOrder: 16,
    id: 'sapporo-furano-area-pass',
    name: {
      en: '札幌・富良野地区周游券',
      jp: '札幌・富良野地区周游券',
      cn: '札幌・富良野地区周游券'
    },
    description: '札幌、富良野、美瑛的4日周游券，夏季花田热门路线，适合夏季北海道旅行。',
    price: {
      adult: {
        regular: 12000,
        phone: 11000
      },
      child: {
        regular: 6000,
        phone: 5500
      }
    },
    bestFor: ['护照原件; 现金购票；电子购票；预购有1000円优惠;'],
    duration: [4],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '札幌', '富良野', '美瑛'],
      map: '/images/coverage/sapporo-furano-area-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 4
  },

  {
    sortOrder: 17,
    id: 'sapporo-noboribetsu-pass',
    name: {
      en: '札幌・登别周游券',
      jp: '札幌・登别周游券',
      cn: '札幌・登别周游券'
    },
    description: '札幌、登别的4日周游券，温泉观光向，适合温泉度假之旅。',
    price: {
      adult: {
        regular: 11000,
        phone: 10000
      },
      child: {
        regular: 5500,
        phone: 5000
      }
    },
    bestFor: ['护照原件; 现金购票；电子购票；预购有1000円优惠;'],
    duration: [4],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道', '札幌', '登别'],
      map: '/images/coverage/sapporo-noboribetsu-pass.png'
    },
    targetAudience: ['持有旅游签证的外国护照游客'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  }
];