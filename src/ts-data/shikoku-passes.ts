import { JRPass } from '@/types/pass';

// 四国地区周游券
export const shikokuPasses: JRPass[] = [
  {
    sortOrder: 0,
    id: 'JRShikoku-FreePass',
    name: {
      en: '四国自由通票',
      jp: '四国自由通票',
      cn: '四国自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 18000
      },
      child: {
        regular: 9000
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
      regions: ['四国'],
      map: '/images/coverage/JRShikoku-FreePass.png'
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
    sortOrder: 0,
    id: 'JRShikoku-Green-Kiko',
    name: {
      en: '四国绿行通票',
      jp: '四国绿行通票',
      cn: '四国绿行通票'
    },
    description: '',
    price: {
      adult: {
        regular: 23000
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [4],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/JRShikoku-Green-Kiko.png'
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
    id: 'Shimanto-Uwakai-FreeTicket',
    name: {
      en: '四万十·宇和海自由乘车券',
      jp: '四万十·宇和海自由乘车券',
      cn: '四万十·宇和海自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 4100
      },
      child: {
        regular: 2050
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
      map: '/images/coverage/Shimanto-Uwakai-FreeTicket.png'
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
    id: 'Kotoden-JR-Kururin-Kippu',
    name: {
      en: '琴电·JR转环通票',
      jp: '琴电·JR转环通票',
      cn: '琴电·JR转环通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2200
      },
      child: {
        regular: 1100
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
      map: '/images/coverage/Kotoden-JR-Kururin-Kippu.png'
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
    id: 'JRShikoku-Weekend-Norihodai',
    name: {
      en: '周末无限乘车券',
      jp: '周末无限乘车券',
      cn: '周末无限乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 12000
      },
      child: {
        regular: 6000
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
      map: '/images/coverage/JRShikoku-Weekend-Norihodai.png'
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
    id: 'JRShikoku-Raihaku-Hayatoroku',
    name: {
      en: '四国再发现早鸟优惠券',
      jp: '四国再发现早鸟优惠券',
      cn: '四国再发现早鸟优惠券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/JRShikoku-Raihaku-Hayatoroku.png'
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
    id: 'Kotoden-1Day-FreePass',
    name: {
      en: '琴平电铁一日自由通票',
      jp: '琴平电铁一日自由通票',
      cn: '琴平电铁一日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1400
      },
      child: {
        regular: 700
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
      map: '/images/coverage/Kotoden-1Day-FreePass.png'
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
    id: 'Kotoden-Onsen-Rail-Bathing-Ticket',
    name: {
      en: '琴平温泉乘车入浴券',
      jp: '琴平温泉乘车入浴券',
      cn: '琴平温泉乘车入浴券'
    },
    description: '',
    price: {
      adult: {
        regular: 1300
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
      map: '/images/coverage/Kotoden-Onsen-Rail-Bathing-Ticket.png'
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
    id: 'Kotoden-Rail-JR-Kururin-Kippu',
    name: {
      en: '琴电·JR转环通票',
      jp: '琴电·JR转环通票',
      cn: '琴电·JR转环通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2200
      },
      child: {
        regular: 1100
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
      map: '/images/coverage/Kotoden-Rail-JR-Kururin-Kippu.png'
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
    id: 'Kotoden-Rail-Limousine-Pass',
    name: {
      en: '铁路和巴士通票',
      jp: '铁路和巴士通票',
      cn: '铁路和巴士通票'
    },
    description: '',
    price: {
      adult: {
        regular: 3000
      },
      child: {
        regular: 0
      },
      freeText: '１日×2枚'
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
      map: '/images/coverage/Kotoden-Rail-Limousine-Pass.png'
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
    id: 'Kotoden-New-Reoma-World-Set-Kippu',
    name: {
      en: '琴电×新レオマ世界套票',
      jp: '琴电×新レオマ世界套票',
      cn: '琴电×新レオマ世界套票'
    },
    description: '',
    price: {
      adult: {
        regular: 3800
      },
      child: {
        regular: 2300
      },
      under18: 2800
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
      map: '/images/coverage/Kotoden-New-Reoma-World-Set-Kippu.png'
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
    id: 'Kotoden-Digital-Kippu',
    name: {
      en: '琴电电子票24',
      jp: '琴电电子票24',
      cn: '琴电电子票24'
    },
    description: '',
    price: {
      adult: {
        regular: 1400
      },
      child: {
        regular: 700
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
      map: '/images/coverage/Kotoden-Digital-Kippu.png'
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
    id: 'Kotoden-Digital-Kippu',
    name: {
      en: '琴电电子票48',
      jp: '琴电电子票48',
      cn: '琴电电子票48'
    },
    description: '',
    price: {
      adult: {
        regular: 2700
      },
      child: {
        regular: 1350
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
      map: '/images/coverage/Kotoden-Digital-Kippu.png'
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
    id: 'Yashima-Shikoku-Mura-Shido-Line-Pass',
    name: {
      en: '八岛四国村·志度线通票',
      jp: '八岛四国村·志度线通票',
      cn: '八岛四国村·志度线通票'
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
      map: '/images/coverage/Yashima-Shikoku-Mura-Shido-Line-Pass.png'
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
    id: 'Iyotetsu-City-Tram-Suburban-1Day',
    name: {
      en: '伊予铁道市内电车·郊外电车1日票',
      jp: '伊予铁道市内电车·郊外电车1日票',
      cn: '伊予铁道市内电车·郊外电车1日票'
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
      map: '/images/coverage/Iyotetsu-City-Tram-Suburban-1Day.png'
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
    id: 'Iyotetsu-City-Tram-Limousine-Bus-1Day',
    name: {
      en: '伊予铁道市内电车·机场巴士1日票',
      jp: '伊予铁道市内电车·机场巴士1日票',
      cn: '伊予铁道市内电车·机场巴士1日票'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Iyotetsu-City-Tram-Limousine-Bus-1Day.png'
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
    id: 'Tosaden-Densha-1Day-City-Fare',
    name: {
      en: '土佐电车一日乘车券（市内均一价格区间版）',
      jp: '土佐电车一日乘车券（市内均一价格区间版）',
      cn: '土佐电车一日乘车券（市内均一价格区间版）'
    },
    description: '',
    price: {
      adult: {
        regular: 500
      },
      child: {
        regular: 250
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
      map: '/images/coverage/Tosaden-Densha-1Day-City-Fare.png'
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
    id: 'Tosaden-Densha-24Hr-City-Fare',
    name: {
      en: '土佐电车24小时票（市内均一价格区间版）',
      jp: '土佐电车24小时票（市内均一价格区间版）',
      cn: '土佐电车24小时票（市内均一价格区间版）'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Tosaden-Densha-24Hr-City-Fare.png'
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
    id: 'Tosaden-Densha-1Day-Whole-Line',
    name: {
      en: '土佐电车一日票（轨道全线版）',
      jp: '土佐电车一日票（轨道全线版）',
      cn: '土佐电车一日票（轨道全线版）'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Tosaden-Densha-1Day-Whole-Line.png'
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
    id: 'Tosaden-Densha-24Hr-Whole-Line',
    name: {
      en: '土佐电车24小时票（轨道全线版）',
      jp: '土佐电车24小时票（轨道全线版）',
      cn: '土佐电车24小时票（轨道全线版）'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Tosaden-Densha-24Hr-Whole-Line.png'
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
    id: 'Tosaden-Bus-Tram-1Day-Mobile-Ticket',
    name: {
      en: '土佐电车·巴士一日移动票',
      jp: '土佐电车·巴士一日移动票',
      cn: '土佐电车·巴士一日移动票'
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
      map: '/images/coverage/Tosaden-Bus-Tram-1Day-Mobile-Ticket.png'
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
    id: 'Kurosio-Nahari-Sen-Free-Pass',
    name: {
      en: '土佐黑潮线自由通票',
      jp: '土佐黑潮线自由通票',
      cn: '土佐黑潮线自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2200
      },
      child: {
        regular: 1100
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
      map: '/images/coverage/Kurosio-Nahari-Sen-Free-Pass.png'
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
    id: 'Kurosio-1Day-Free-Pass',
    name: {
      en: '黑潮1日自由通票',
      jp: '黑潮1日自由通票',
      cn: '黑潮1日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 0
      },
      child: {
        regular: 0
      },
      freeText: `フリー区間	タイプ	大人	小人
中村・宿毛線(全線)	普通列車	2,080円	1,040円
中村線(窪川～中村)	特急自由席
普通列車	2,600円	1,300円`
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
      map: '/images/coverage/Kurosio-1Day-Free-Pass.png'
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
    id: 'Shikoku-Shimanto-Uwakai-Free-Pass',
    name: {
      en: '四万十·宇和海自由乘车券',
      jp: '四万十·宇和海自由乘车券',
      cn: '四万十·宇和海自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 4100
      },
      child: {
        regular: 2050
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
      map: '/images/coverage/Shikoku-Shimanto-Uwakai-Free-Pass.png'
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