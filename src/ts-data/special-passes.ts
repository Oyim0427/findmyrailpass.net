import { JRPass } from '@/types/pass';

// special地区周游券
export const specialPasses: JRPass[] = [
  {
    sortOrder: 0,
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
    bestFor: ['Peach航空乘客; 东北海道; 知床观光'],
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
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 0,
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
    bestFor: ['Peach航空乘客; 北北海道'],
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
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 0,
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
    bestFor: ['FDA航空乘客; 东北海道; 知床观光'],
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
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 0,
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
    bestFor: ['FDA航空乘客; 北北海道'],
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
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 0,
    id: 'Senmo-Line-Free-Pass',
    name: {
      en: '釧网线自由通票',
      jp: '釧网线自由通票',
      cn: '釧网线自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 4500
      },
      child: {
        regular: 2250
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
      map: '/images/coverage/Senmo-Line-Free-Pass.png'
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
    id: 'Hanasaki-Line-Free-Pass',
    name: {
      en: '地球探索铁道花咲线自由通票',
      jp: '地球探索铁道花咲线自由通票',
      cn: '地球探索铁道花咲线自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 3200
      },
      child: {
        regular: 1600
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
      map: '/images/coverage/Hanasaki-Line-Free-Pass.png'
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
    bestFor: ['现金购票; 电子购票； 各旅行事物所购票'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '～2026年3月30日'
    },
    coverage: {
      regions: ['福岛', '会津', '东北'],
      map: '/images/coverage/aizu-gurutto-card.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['特急电车', '急行电车', '普通电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3,
    isLimitedPeriod: true,
    ticket_note: `坐普通电车以外需另外加钱`
  }
];