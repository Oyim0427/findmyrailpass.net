import { JRPass } from '@/types/pass';

// 中国地区周游券
export const chukokuPasses: JRPass[] = [
  {
    sortOrder: 0,
    id: 'Chizu-Kyuko-Chizu-Line-Ordinary-Train-1Day-Ticket',
    name: {
      en: '智头线普通列车一日乘车券',
      jp: '智头线普通列车一日乘车券',
      cn: '智头线普通列车一日乘车券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Chizu-Kyuko-Chizu-Line-Ordinary-Train-1Day-Ticket.png'
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
    id: 'Wakasa-Railway-1Day-Free',
    name: {
      en: '若狭铁道一日自由乘车券',
      jp: '若狭铁道一日自由乘车券',
      cn: '若狭铁道一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 760
      },
      child: {
        regular: 500
      }
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Wakasa-Railway-1Day-Free.png'
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
    id: 'Wakasa-Han-Joho-Techo-Pass',
    name: {
      en: '鸟取藩无限乘车手形',
      jp: '鸟取藩无限乘车手形',
      cn: '鸟取藩无限乘车手形'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Wakasa-Han-Joho-Techo-Pass.png'
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
    id: 'Wakasa-Parent-Child-Ticket',
    name: {
      en: '亲子票',
      jp: '亲子票',
      cn: '亲子票'
    },
    description: '',
    price: {
      adult: {
        regular: 760
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Wakasa-Parent-Child-Ticket.png'
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
    id: 'Ichibata-Railway-Free-Ticket',
    name: {
      en: '一畑电车自由乘车券',
      jp: '一畑电车自由乘车券',
      cn: '一畑电车自由乘车券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Ichibata-Railway-Free-Ticket.png'
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
    id: 'Ichibata-Railway-Silver-Kippu',
    name: {
      en: '一畑电车银发票',
      jp: '一畑电车银发票',
      cn: '一畑电车银发票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      over65: 1700
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Ichibata-Railway-Silver-Kippu.png'
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
    id: 'Vogel-Free-Ticket',
    name: {
      en: 'Vogel &自由票',
      jp: 'Vogel &自由票',
      cn: 'Vogel &自由票'
    },
    description: '',
    price: {
      adult: {
        regular: 2300
      },
      child: {
        regular: 1200
      },
      under15: 1800
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
      map: '/images/coverage/Vogel-Free-Ticket.png'
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
    id: 'Kodai-Izumo-Rekihaku-Ticket-Free',
    name: {
      en: '古代出云历史博物馆入场券&自由券',
      jp: '古代出云历史博物馆入场券&自由券',
      cn: '古代出云历史博物馆入场券&自由券'
    },
    description: '',
    price: {
      adult: {
        regular: 1900
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Kodai-Izumo-Rekihaku-Ticket-Free.png'
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
    id: 'Matsue-Izumo-Travel-PASS-2Days',
    name: {
      en: '松江·出云旅行票 2日券',
      jp: '松江·出云旅行票 2日券',
      cn: '松江·出云旅行票 2日券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [2],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Matsue-Izumo-Travel-PASS-2Days.png'
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
    id: 'Okayama-Tram-1Day-Ticket',
    name: {
      en: '冈山电车一日票',
      jp: '冈山电车一日票',
      cn: '冈山电车一日票'
    },
    description: '',
    price: {
      adult: {
        regular: 400
      },
      child: {
        regular: 200
      }
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Okayama-Tram-1Day-Ticket.png'
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
    id: 'Hiroden-Train-1Day-Ticket',
    name: {
      en: '广电电车一日券',
      jp: '广电电车一日券',
      cn: '广电电车一日券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Hiroden-Train-1Day-Ticket.png'
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
    id: 'Hiroden-Train-1Day-Ticket',
    name: {
      en: '广电电车一日券8（手机票）',
      jp: '广电电车一日券8（手机票）',
      cn: '广电电车一日券8（手机票）'
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
      regions: ['北海道'],
      map: '/images/coverage/Hiroden-Train-1Day-Ticket.png'
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
    id: 'Hiroden-Mobile-Train-Ticket',
    name: {
      en: '广电电车乘车券24（手机票）',
      jp: '广电电车乘车券24（手机票）',
      cn: '广电电车乘车券24（手机票）'
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
      map: '/images/coverage/Hiroden-Mobile-Train-Ticket.png'
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
    id: 'Hiroden-Train-Boat-1Day-Ticket',
    name: {
      en: '广电电车+船一日券',
      jp: '广电电车+船一日券',
      cn: '广电电车+船一日券'
    },
    description: '',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 550
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
      map: '/images/coverage/Hiroden-Train-Boat-1Day-Ticket.png'
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
    id: 'Hiroden-Mobile-Train-Boat-Ticket',
    name: {
      en: '广电电车+船乘车券（手机票）',
      jp: '广电电车+船乘车券（手机票）',
      cn: '广电电车+船乘车券（手机票）'
    },
    description: '',
    price: {
      adult: {
        regular: 1000
      },
      child: {
        regular: 550
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
      map: '/images/coverage/Hiroden-Mobile-Train-Boat-Ticket.png'
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
    id: 'Hiroshima-Tabi-Pass-Paper-Ticket',
    name: {
      en: '广岛旅游通票（纸票）1',
      jp: '广岛旅游通票（纸票）1',
      cn: '广岛旅游通票（纸票）1'
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
      map: '/images/coverage/Hiroshima-Tabi-Pass-Paper-Ticket.png'
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
    id: 'Hiroshima-Tabi-Pass-Paper-Ticket',
    name: {
      en: '广岛旅游通票（纸票）2',
      jp: '广岛旅游通票（纸票）2',
      cn: '广岛旅游通票（纸票）2'
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
      regions: ['北海道'],
      map: '/images/coverage/Hiroshima-Tabi-Pass-Paper-Ticket.png'
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
    id: 'Hiroshima-Tabi-Pass-Paper-Ticket',
    name: {
      en: '广岛旅游通票（纸票）3',
      jp: '广岛旅游通票（纸票）3',
      cn: '广岛旅游通票（纸票）3'
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
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Hiroshima-Tabi-Pass-Paper-Ticket.png'
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
    id: 'Hiroshima-Tabi-Pass-Digital-Ticket',
    name: {
      en: '广岛旅游通票（电子票）24',
      jp: '广岛旅游通票（电子票）24',
      cn: '广岛旅游通票（电子票）24'
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
      map: '/images/coverage/Hiroshima-Tabi-Pass-Digital-Ticket.png'
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
    id: 'Hiroshima-Tabi-Pass-Digital-Ticket',
    name: {
      en: '广岛旅游通票（电子票）48',
      jp: '广岛旅游通票（电子票）48',
      cn: '广岛旅游通票（电子票）48'
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
      regions: ['北海道'],
      map: '/images/coverage/Hiroshima-Tabi-Pass-Digital-Ticket.png'
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
    id: 'Hiroshima-Tabi-Pass-Digital-Ticket',
    name: {
      en: '广岛旅游通票（电子票）72',
      jp: '广岛旅游通票（电子票）72',
      cn: '广岛旅游通票（电子票）72'
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
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Hiroshima-Tabi-Pass-Digital-Ticket.png'
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
    id: 'Hiroshima-Tabi-Pass-Middle-Area',
    name: {
      en: '广岛旅游通票（中区）',
      jp: '广岛旅游通票（中区）',
      cn: '广岛旅游通票（中区）'
    },
    description: '',
    price: {
      adult: {
        regular: 4500
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [3],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Hiroshima-Tabi-Pass-Middle-Area.png'
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
    id: 'Hiroden-Digital-City-Pass',
    name: {
      en: '广电数字城市通票',
      jp: '广电数字城市通票',
      cn: '广电数字城市通票'
    },
    description: '',
    price: {
      adult: {
        regular: 440
      },
      child: {
        regular: 220
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
      map: '/images/coverage/Hiroden-Digital-City-Pass.png'
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
    id: 'Nishikigawa-Railway-1Day-Free',
    name: {
      en: '锦川铁道一日自由券',
      jp: '锦川铁道一日自由券',
      cn: '锦川铁道一日自由券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Nishikigawa-Railway-1Day-Free.png'
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