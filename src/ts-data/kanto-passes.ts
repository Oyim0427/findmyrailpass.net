import { JRPass } from '@/types/pass';

// 关东地区周游券
export const kantoPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'JR-Tokunai-Pass',
    name: {
      en: '东京23区内一日自由乘车券',
      jp: '东京23区内一日自由乘车券',
      cn: '东京23区内一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 760
      },
      child: {
        regular: 380
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
      regions: ['东京都'],
      map: '/images/coverage/JR-Tokunai-Pass.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁', '电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3
  },

  {
    sortOrder: 2,
    id: 'JR-Tokyo-Free-Ticket',
    name: {
      en: '东京自由通票',
      jp: '东京自由通票',
      cn: '东京自由通票'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['东京都'],
      map: '/images/coverage/JR-Tokyo-Free-Ticket.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁', '电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 3
  },

  {
    sortOrder: 3,
    id: 'JR-Yokohama-MinatoMirai',
    name: {
      en: '横滨·港未来票',
      jp: '横滨·港未来票',
      cn: '横滨·港未来票'
    },
    description: '',
    price: {
      adult: {
        regular: 530
      },
      child: {
        regular: 260
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
      regions: ['横浜'],
      map: '/images/coverage/JR-Yokohama-MinatoMirai.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁', '电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'city',
    popularity: 4
  },

  {
    sortOrder: 4,
    id: 'JR-Holiday-Odekake',
    name: {
      en: '假日出行通票',
      jp: '假日出行通票',
      cn: '假日出行通票'
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
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['东京都；'],
      map: '/images/coverage/JR-Holiday-Odekake.png'
    },
    targetAudience: ['不问国籍所有游客皆可购买'],
    trainTypes: ['地铁', '电车'],
    officialLinks: [
      
    ],
    purchaseLinks: [
      
    ],
    category: 'regional',
    popularity: 3
  },

  {
    sortOrder: 5,
    id: 'JR-Nonbiri-Holiday-Suica',
    name: {
      en: '悠闲假日Suica通票',
      jp: '悠闲假日Suica通票',
      cn: '悠闲假日Suica通票'
    },
    description: '',
    price: {
      adult: {
        regular: 2670
      },
      child: {
        regular: 1330
      }
    },
    bestFor: ['现金支付; 购票机可购买; Suica限定'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/JR-Nonbiri-Holiday-Suica.png'
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
    sortOrder: 6,
    id: 'JR-Monorail-Tokunai',
    name: {
      en: '单轨电车与东京23区内套票（手机Suica）',
      jp: '单轨电车与东京23区内套票（手机Suica）',
      cn: '单轨电车与东京23区内套票（手机Suica）'
    },
    description: '',
    price: {
      adult: {
        regular: 1350
      },
      child: {
        regular: 0
      }
    },
    bestFor: ['现金支付; 购票机可购买; Suica限定'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/JR-Monorail-Tokunai.png'
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
    id: 'JR-Gunma-Local',
    name: {
      en: '群马区域一日通票（手机）',
      jp: '群马区域一日通票（手机）',
      cn: '群马区域一日通票（手机）'
    },
    description: '',
    price: {
      adult: {
        regular: 2500
      },
      child: {
        regular: 1250
      }
    },
    bestFor: ['现金支付; 购票机可购买; Suica限定'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/JR-Gunma-Local.png'
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
    id: 'Yagan-Site-Pass',
    name: {
      en: '会津鬼怒川线史迹巡游往返优惠票',
      jp: '会津鬼怒川线史迹巡游往返优惠票',
      cn: '会津鬼怒川线史迹巡游往返优惠票'
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
      map: '/images/coverage/Yagan-Site-Pass.png'
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
    id: 'Yagan-Free-Pass',
    name: {
      en: '野岩铁道全线自由乘车券',
      jp: '野岩铁道全线自由乘车券',
      cn: '野岩铁道全线自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 2100
      },
      child: {
        regular: 1060
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
      map: '/images/coverage/Yagan-Free-Pass.png'
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
    id: 'Yagan-Aizu-All-Free',
    name: {
      en: '野岩・会津全线自由乘车券',
      jp: '野岩・会津全线自由乘车券',
      cn: '野岩・会津全线自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 4820
      },
      child: {
        regular: 2420
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
      map: '/images/coverage/Yagan-Aizu-All-Free.png'
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
    id: 'Yagan-Shiobara',
    name: {
      en: '盐原温泉·野岩铁道畅游券',
      jp: '盐原温泉·野岩铁道畅游券',
      cn: '盐原温泉·野岩铁道畅游券'
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
      map: '/images/coverage/Yagan-Shiobara.png'
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
    id: 'Mooka-Joso-Pass',
    name: {
      en: '常总线・真冈铁道共通一日通票',
      jp: '常总线・真冈铁道共通一日通票',
      cn: '常总线・真冈铁道共通一日通票'
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
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Mooka-Joso-Pass.png'
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
    id: 'LRT-Day-Pass',
    name: {
      en: '宇都宫LRT一日乘车券',
      jp: '宇都宫LRT一日乘车券',
      cn: '宇都宫LRT一日乘车券'
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
      regions: ['北海道'],
      map: '/images/coverage/LRT-Day-Pass.png'
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
    id: 'Watarase-Free',
    name: {
      en: '渡良濑溪谷铁路一日自由乘车券',
      jp: '渡良濑溪谷铁路一日自由乘车券',
      cn: '渡良濑溪谷铁路一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1880
      },
      child: {
        regular: 940
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
      map: '/images/coverage/Watarase-Free.png'
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
    id: 'Jomo-Akagi-Free',
    name: {
      en: '赤城南麓一日自由票',
      jp: '赤城南麓一日自由票',
      cn: '赤城南麓一日自由票'
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
      regions: ['北海道'],
      map: '/images/coverage/Jomo-Akagi-Free.png'
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
    id: 'Jomo-Senior-Pass',
    name: {
      en: '驾照返还者优惠一日通票',
      jp: '驾照返还者优惠一日通票',
      cn: '驾照返还者优惠一日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 500
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
      map: '/images/coverage/Jomo-Senior-Pass.png'
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
    id: 'Joshin-Free',
    name: {
      en: '上信电铁全线自由乘车券',
      jp: '上信电铁全线自由乘车券',
      cn: '上信电铁全线自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 2260
      },
      child: {
        regular: 1130
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
      map: '/images/coverage/Joshin-Free.png'
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
    id: 'Joshin-Ueno-Sanpi',
    name: {
      en: '上野三碑纪念乘车券',
      jp: '上野三碑纪念乘车券',
      cn: '上野三碑纪念乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1140
      },
      child: {
        regular: 570
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
      map: '/images/coverage/Joshin-Ueno-Sanpi.png'
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
    id: 'Minato-Free',
    name: {
      en: '湊线一日自由通票',
      jp: '湊线一日自由通票',
      cn: '湊线一日自由通票'
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
      regions: ['北海道'],
      map: '/images/coverage/Minato-Free.png'
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
    id: 'Minato-Free-Ride',
    name: {
      en: '湊线一日自由乘车券',
      jp: '湊线一日自由乘车券',
      cn: '湊线一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 950
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
      map: '/images/coverage/Minato-Free-Ride.png'
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
    id: 'Minato-Park-Free',
    name: {
      en: '含海滨公园门票湊线一日通票',
      jp: '含海滨公园门票湊线一日通票',
      cn: '含海滨公园门票湊线一日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1200,
        phone: 1600
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
      map: '/images/coverage/Minato-Park-Free.png'
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
    id: 'Minato-Support-Free',
    name: {
      en: '含应援券湊线一日自由通票',
      jp: '含应援券湊线一日自由通票',
      cn: '含应援券湊线一日自由通票'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Minato-Support-Free.png'
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
    id: 'Kantetsu-Croquette-Free',
    name: {
      en: '龙铁可乐饼自由乘车券',
      jp: '龙铁可乐饼自由乘车券',
      cn: '龙铁可乐饼自由乘车券'
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
    bestFor: ['竜ヶ崎支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Kantetsu-Croquette-Free.png'
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
    id: 'Kantetsu-Joso-Free',
    name: {
      en: '常总线一日自由通票',
      jp: '常总线一日自由通票',
      cn: '常总线一日自由通票'
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
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Kantetsu-Joso-Free.png'
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
    id: 'Kantetsu-Mooka-Joso-Pass',
    name: {
      en: '常总线・真冈铁道共通一日票',
      jp: '常总线・真冈铁道共通一日票',
      cn: '常总线・真冈铁道共通一日票'
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
      description: '周六、周日、节假日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Kantetsu-Mooka-Joso-Pass.png'
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
    id: 'Ryutetsu-Free',
    name: {
      en: '流铁流山线一日自由通票',
      jp: '流铁流山线一日自由通票',
      cn: '流铁流山线一日自由通票'
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
      map: '/images/coverage/Ryutetsu-Free.png'
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
    id: 'Maihama-1Day-Free',
    name: {
      en: '舞滨Resort Line一日通票',
      jp: '舞滨Resort Line一日通票',
      cn: '舞滨Resort Line一日通票'
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
      map: '/images/coverage/Maihama-1Day-Free.png'
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
    id: 'Maihama-2Day-Free',
    name: {
      en: '舞滨Resort Line二日通票',
      jp: '舞滨Resort Line二日通票',
      cn: '舞滨Resort Line二日通票'
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
      map: '/images/coverage/Maihama-2Day-Free.png'
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
    id: 'Maihama-3Day-Free',
    name: {
      en: '舞滨Resort Line三日通票',
      jp: '舞滨Resort Line三日通票',
      cn: '舞滨Resort Line三日通票'
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
      map: '/images/coverage/Maihama-3Day-Free.png'
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
    id: 'Maihama-4Day-Free',
    name: {
      en: '舞滨Resort Line四日通票',
      jp: '舞滨Resort Line四日通票',
      cn: '舞滨Resort Line四日通票'
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
      regions: ['北海道'],
      map: '/images/coverage/Maihama-4Day-Free.png'
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
    id: 'Yamaman-1Day',
    name: {
      en: '山万一日乘车券',
      jp: '山万一日乘车券',
      cn: '山万一日乘车券'
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
      map: '/images/coverage/Yamaman-1Day.png'
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
    id: 'Choshi-Komawari',
    name: {
      en: '犬吠铁路弧廻手形通票',
      jp: '犬吠铁路弧廻手形通票',
      cn: '犬吠铁路弧廻手形通票'
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
      map: '/images/coverage/Choshi-Komawari.png'
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
    id: 'Choshi-Tabibito',
    name: {
      en: '犬吠铁路旅人一日通票',
      jp: '犬吠铁路旅人一日通票',
      cn: '犬吠铁路旅人一日通票'
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
      map: '/images/coverage/Choshi-Tabibito.png'
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
    id: 'Choshi-Good-Ride',
    name: {
      en: '犬吠铁路Good Ride通票',
      jp: '犬吠铁路Good Ride通票',
      cn: '犬吠铁路Good Ride通票'
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
      map: '/images/coverage/Choshi-Good-Ride.png'
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
    id: 'Choshi-Inubo-Line',
    name: {
      en: '犬吠崖峭壁线一日乘车券',
      jp: '犬吠崖峭壁线一日乘车券',
      cn: '犬吠崖峭壁线一日乘车券'
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
      map: '/images/coverage/Choshi-Inubo-Line.png'
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
    id: 'Choshi-Beica',
    name: {
      en: '犬吠铁路电子一日券（Beica）',
      jp: '犬吠铁路电子一日券（Beica）',
      cn: '犬吠铁路电子一日券（Beica）'
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
      map: '/images/coverage/Choshi-Beica.png'
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
    id: 'Isumi-Weekday',
    name: {
      en: '夷隅铁道一日自由乘车券（平日）',
      jp: '夷隅铁道一日自由乘车券（平日）',
      cn: '夷隅铁道一日自由乘车券（平日）'
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
      map: '/images/coverage/Isumi-Weekday.png'
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
    id: 'Isumi-Holiday',
    name: {
      en: '夷隅铁道一日自由乘车券（节假日）',
      jp: '夷隅铁道一日自由乘车券（节假日）',
      cn: '夷隅铁道一日自由乘车券（节假日）'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Isumi-Holiday.png'
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
    id: 'Isumi-iSumica',
    name: {
      en: '夷隅铁道iSumica电子票',
      jp: '夷隅铁道iSumica电子票',
      cn: '夷隅铁道iSumica电子票'
    },
    description: '',
    price: {
      adult: {
        regular: 1100
      },
      child: {
        regular: 560
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
      map: '/images/coverage/Isumi-iSumica.png'
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
    id: 'Kominato-Free',
    name: {
      en: '小湊铁道一日自由乘车券',
      jp: '小湊铁道一日自由乘车券',
      cn: '小湊铁道一日自由乘车券'
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
      map: '/images/coverage/Kominato-Free.png'
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
    id: 'Kominato-Kazusa-Takataki',
    name: {
      en: '上总鹤舞・高滝周游乘车券',
      jp: '上总鹤舞・高滝周游乘车券',
      cn: '上总鹤舞・高滝周游乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1420
      },
      child: {
        regular: 710
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
      map: '/images/coverage/Kominato-Kazusa-Takataki.png'
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
    id: 'Kominato-Satoyama',
    name: {
      en: '里山一日自由乘车券',
      jp: '里山一日自由乘车券',
      cn: '里山一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1400
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
      map: '/images/coverage/Kominato-Satoyama.png'
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
    id: 'Chiba-Holiday-Free',
    name: {
      en: '千叶都市单轨假日自由通票',
      jp: '千叶都市单轨假日自由通票',
      cn: '千叶都市单轨假日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 630
      },
      child: {
        regular: 320
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
      map: '/images/coverage/Chiba-Holiday-Free.png'
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
    id: 'Chiba-2Day-Free',
    name: {
      en: '千叶都市单轨两日自由通票',
      jp: '千叶都市单轨两日自由通票',
      cn: '千叶都市单轨两日自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1050
      },
      child: {
        regular: 530
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
      map: '/images/coverage/Chiba-2Day-Free.png'
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
    id: 'Chiba-Afternoon-Free',
    name: {
      en: '午后自由出游券',
      jp: '午后自由出游券',
      cn: '午后自由出游券'
    },
    description: '',
    price: {
      adult: {
        regular: 630
      },
      child: {
        regular: 320
      }
    },
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '平日'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Chiba-Afternoon-Free.png'
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
    id: 'Tobu-Chichibu-Platinum',
    name: {
      en: '东武·秩父白金路线乘车券',
      jp: '东武·秩父白金路线乘车券',
      cn: '东武·秩父白金路线乘车券'
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
      map: '/images/coverage/Tobu-Chichibu-Platinum.png'
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
    id: 'Chichibu-Smart-Free',
    name: {
      en: '秩父观光一日电子通票',
      jp: '秩父观光一日电子通票',
      cn: '秩父观光一日电子通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1700
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
      map: '/images/coverage/Chichibu-Smart-Free.png'
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
    id: 'SaitamaMetro-1Day',
    name: {
      en: '埼玉高速铁道一日乘车券',
      jp: '埼玉高速铁道一日乘车券',
      cn: '埼玉高速铁道一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 580
      },
      child: {
        regular: 290
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
      map: '/images/coverage/SaitamaMetro-1Day.png'
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
    id: 'SaitamaShuttle-1Day',
    name: {
      en: '埼玉新都市交通一日自由乘车券',
      jp: '埼玉新都市交通一日自由乘车券',
      cn: '埼玉新都市交通一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 720
      },
      child: {
        regular: 360
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
      map: '/images/coverage/SaitamaShuttle-1Day.png'
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
    id: 'Saitama-InaCycling',
    name: {
      en: '伊奈租赁自行车票',
      jp: '伊奈租赁自行车票',
      cn: '伊奈租赁自行车票'
    },
    description: '',
    price: {
      adult: {
        regular: 1020
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
      map: '/images/coverage/Saitama-InaCycling.png'
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
    id: 'Keisei-Shitamachi-Day',
    name: {
      en: '京成下町游通票',
      jp: '京成下町游通票',
      cn: '京成下町游通票'
    },
    description: '',
    price: {
      adult: {
        regular: 510
      },
      child: {
        regular: 260
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
      map: '/images/coverage/Keisei-Shitamachi-Day.png'
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
    id: 'Tobu-Skytree-Free',
    name: {
      en: '东京晴空塔周边自由通票',
      jp: '东京晴空塔周边自由通票',
      cn: '东京晴空塔周边自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 510
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
      map: '/images/coverage/Tobu-Skytree-Free.png'
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
    id: 'Tobu-TaitoSumida-Free',
    name: {
      en: '台东·墨田东京下町周游券1日券',
      jp: '台东·墨田东京下町周游券1日券',
      cn: '台东·墨田东京下町周游券1日券'
    },
    description: '',
    price: {
      adult: {
        regular: 500
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
      map: '/images/coverage/Tobu-TaitoSumida-Free.png'
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
    id: 'Tobu-TaitoSumida-Free',
    name: {
      en: '台东·墨田东京下町周游券2日券',
      jp: '台东·墨田东京下町周游券2日券',
      cn: '台东·墨田东京下町周游券2日券'
    },
    description: '',
    price: {
      adult: {
        regular: 700
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
      map: '/images/coverage/Tobu-TaitoSumida-Free.png'
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
    id: 'Tobu-Nikko-Kinugawa-Free',
    name: {
      en: '日光·鬼怒川地区铁道畅乘票',
      jp: '日光·鬼怒川地区铁道畅乘票',
      cn: '日光·鬼怒川地区铁道畅乘票'
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
      map: '/images/coverage/Tobu-Nikko-Kinugawa-Free.png'
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
    id: 'Tobu-Nikko-Ouchijuku-Free',
    name: {
      en: '日光·大内宿自由通票',
      jp: '日光·大内宿自由通票',
      cn: '日光·大内宿自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 4860
      },
      child: {
        regular: 2410
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
      map: '/images/coverage/Tobu-Nikko-Ouchijuku-Free.png'
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
    id: 'Seibu-Moomin-Valley',
    name: {
      en: '携带型姆明谷公园游玩券',
      jp: '携带型姆明谷公园游玩券',
      cn: '携带型姆明谷公园游玩券'
    },
    description: '',
    price: {
      adult: {
        regular: 4100
      },
      child: {
        regular: 2400
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
      map: '/images/coverage/Seibu-Moomin-Valley.png'
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
    id: 'TokyoMetro-24Hour',
    name: {
      en: '东京地铁24小时券',
      jp: '东京地铁24小时券',
      cn: '东京地铁24小时券'
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
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/TokyoMetro-24Hour.png'
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
    id: 'Metro-Toei-Common-1Day',
    name: {
      en: '都营地铁·东京地铁通用一日乘车券',
      jp: '都营地铁·东京地铁通用一日乘车券',
      cn: '都营地铁·东京地铁通用一日乘车券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Metro-Toei-Common-1Day.png'
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
    id: 'Toei-Marugoto-Pass',
    name: {
      en: '都营一日自由乘车券',
      jp: '都营一日自由乘车券',
      cn: '都营一日自由乘车券'
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
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Toei-Marugoto-Pass.png'
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
    id: 'Toei-Toden-1Day',
    name: {
      en: '都电一日乘车券',
      jp: '都电一日乘车券',
      cn: '都电一日乘车券'
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
      map: '/images/coverage/Toei-Toden-1Day.png'
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
    id: 'Tokyu-Setagaya-Walk',
    name: {
      en: '世田谷线散步票',
      jp: '世田谷线散步票',
      cn: '世田谷线散步票'
    },
    description: '',
    price: {
      adult: {
        regular: 380
      },
      child: {
        regular: 190
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
      map: '/images/coverage/Tokyu-Setagaya-Walk.png'
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
    id: 'Tokyu-Triangle-Pass',
    name: {
      en: '东急线三角游回票',
      jp: '东急线三角游回票',
      cn: '东急线三角游回票'
    },
    description: '',
    price: {
      adult: {
        regular: 470
      },
      child: {
        regular: 240
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
      map: '/images/coverage/Tokyu-Triangle-Pass.png'
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
    id: 'Tokyu-Yokohama-Chinatown',
    name: {
      en: '横滨中华街美食游通票',
      jp: '横滨中华街美食游通票',
      cn: '横滨中华街美食游通票'
    },
    description: '',
    price: {
      adult: {
        regular: 3300
      },
      child: {
        regular: 2200
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
      map: '/images/coverage/Tokyu-Yokohama-Chinatown.png'
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
    id: 'Tokyu-1Day-Pass',
    name: {
      en: '东急线一日通票',
      jp: '东急线一日通票',
      cn: '东急线一日通票'
    },
    description: '',
    price: {
      adult: {
        regular: 780
      },
      child: {
        regular: 390
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
      map: '/images/coverage/Tokyu-1Day-Pass.png'
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
    id: 'Tokyu-Bus-1Day',
    name: {
      en: '东急线・东急巴士一日畅乘券',
      jp: '东急线・东急巴士一日畅乘券',
      cn: '东急线・东急巴士一日畅乘券'
    },
    description: '',
    price: {
      adult: {
        regular: 1110,
        phone: 1060
      },
      child: {
        regular: 560
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
      map: '/images/coverage/Tokyu-Bus-1Day.png'
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
    id: 'Tokyu-Minatomirai-Pass',
    name: {
      en: '东急线港未来线一日票',
      jp: '东急线港未来线一日票',
      cn: '东急线港未来线一日票'
    },
    description: '',
    price: {
      adult: {
        regular: 1220,
        phone: 1190
      },
      child: {
        regular: 610
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
      map: '/images/coverage/Tokyu-Minatomirai-Pass.png'
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
    id: 'Tokyu-Ikegami-Tamagawa-1Day',
    name: {
      en: '池上线・东急多摩川线一日乘车券',
      jp: '池上线・东急多摩川线一日乘车券',
      cn: '池上线・东急多摩川线一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 440
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
      map: '/images/coverage/Tokyu-Ikegami-Tamagawa-1Day.png'
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
    id: 'Sotetsu-Tokyu-Common-1Day',
    name: {
      en: '相铁・东急共通一日乘车券',
      jp: '相铁・东急共通一日乘车券',
      cn: '相铁・东急共通一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 1300
      },
      child: {
        regular: 520
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
      map: '/images/coverage/Sotetsu-Tokyu-Common-1Day.png'
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
    id: 'Tokyu-TokyoMetro-Common-1Day',
    name: {
      en: '东急线·东京地铁一日共通票',
      jp: '东急线·东京地铁一日共通票',
      cn: '东急线·东京地铁一日共通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1280
      },
      child: {
        regular: 640
      }
    },
    bestFor: ['「PASMO」が必要'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Tokyu-TokyoMetro-Common-1Day.png'
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
    id: 'Tokyu-TokyoMetro-Toei-Common-1Day',
    name: {
      en: '东急线·都营地铁·东京地铁通用一日票',
      jp: '东急线·都营地铁·东京地铁通用一日票',
      cn: '东急线·都营地铁·东京地铁通用一日票'
    },
    description: '',
    price: {
      adult: {
        regular: 1680
      },
      child: {
        regular: 840
      }
    },
    bestFor: ['「PASMO」が必要'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Tokyu-TokyoMetro-Toei-Common-1Day.png'
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
    id: 'Keikyu-Yokohama-1Day',
    name: {
      en: '横滨1日票',
      jp: '横滨1日票',
      cn: '横滨1日票'
    },
    description: '',
    price: {
      adult: {
        regular: 1070
      },
      child: {
        regular: 530
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
      map: '/images/coverage/Keikyu-Yokohama-1Day.png'
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
    id: 'Keikyu-Tokyo-1Day',
    name: {
      en: '东京1日票',
      jp: '东京1日票',
      cn: '东京1日票'
    },
    description: '',
    price: {
      adult: {
        regular: 910
      },
      child: {
        regular: 450
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
      map: '/images/coverage/Keikyu-Tokyo-1Day.png'
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
    id: 'Keikyu-Miura-1Day',
    name: {
      en: '三浦半岛一日票',
      jp: '三浦半岛一日票',
      cn: '三浦半岛一日票'
    },
    description: '',
    price: {
      adult: {
        regular: 1260
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
      regions: ['北海道'],
      map: '/images/coverage/Keikyu-Miura-1Day.png'
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
    id: 'Keikyu-Miura-Marugoto',
    name: {
      en: '三浦半岛通票',
      jp: '三浦半岛通票',
      cn: '三浦半岛通票'
    },
    description: '',
    price: {
      adult: {
        regular: 4500,
        phone: 4300
      },
      child: {
        regular: 3420,
        phone: 3420
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
      map: '/images/coverage/Keikyu-Miura-Marugoto.png'
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
    id: 'Keikyu-Yokosuka-FullEnjoy',
    name: {
      en: '横须贺畅游票',
      jp: '横须贺畅游票',
      cn: '横须贺畅游票'
    },
    description: '',
    price: {
      adult: {
        regular: 3210,
        phone: 3010
      },
      child: {
        regular: 2500,
        phone: 2500
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
      map: '/images/coverage/Keikyu-Yokosuka-FullEnjoy.png'
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
    id: 'Keikyu-WholeLine-Free',
    name: {
      en: '京急全线一日自由乘车券',
      jp: '京急全线一日自由乘车券',
      cn: '京急全线一日自由乘车券'
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
      map: '/images/coverage/Keikyu-WholeLine-Free.png'
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
    sortOrder: 78,
    id: 'Keikyu-LineBus-Free',
    name: {
      en: '京急线·京急巴士一日自由乘车券',
      jp: '京急线·京急巴士一日自由乘车券',
      cn: '京急线·京急巴士一日自由乘车券'
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
      regions: ['北海道'],
      map: '/images/coverage/Keikyu-LineBus-Free.png'
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
    sortOrder: 79,
    id: 'Keikyu-TokyoTour',
    name: {
      en: '東京周遊パス',
      jp: '東京周遊パス',
      cn: '東京周遊パス'
    },
    description: '',
    price: {
      adult: {
        regular: 1110
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
      map: '/images/coverage/Keikyu-TokyoTour.png'
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
    sortOrder: 80,
    id: 'Odakyu-Tanzawa-Oyama-Pass',
    name: {
      en: '丹泽·大山自由通票',
      jp: '丹泽·大山自由通票',
      cn: '丹泽·大山自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1750,
        phone: 790
      },
      child: {
        regular: 880,
        phone: 400
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
      map: '/images/coverage/Odakyu-Tanzawa-Oyama-Pass.png'
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
    sortOrder: 81,
    id: 'Odakyu-Enoshima-Kamakura',
    name: {
      en: '江之岛·镰仓自由通票',
      jp: '江之岛·镰仓自由通票',
      cn: '江之岛·镰仓自由通票'
    },
    description: '',
    price: {
      adult: {
        regular: 810
      },
      child: {
        regular: 410
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
      map: '/images/coverage/Odakyu-Enoshima-Kamakura.png'
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
    sortOrder: 82,
    id: 'Odakyu-AllLine-1Day',
    name: {
      en: '小田急全线一日自由乘车券',
      jp: '小田急全线一日自由乘车券',
      cn: '小田急全线一日自由乘车券'
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
      map: '/images/coverage/Odakyu-AllLine-1Day.png'
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
    sortOrder: 83,
    id: 'Keio-1Day-Keio-Inokashira',
    name: {
      en: '京王线·井之头线一日乘车券',
      jp: '京王线·井之头线一日乘车券',
      cn: '京王线·井之头线一日乘车券'
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
      map: '/images/coverage/Keio-1Day-Keio-Inokashira.png'
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
    sortOrder: 84,
    id: 'Keio-Amusement-Pass',
    name: {
      en: '京王线游乐通票',
      jp: '京王线游乐通票',
      cn: '京王线游乐通票'
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
      map: '/images/coverage/Keio-Amusement-Pass.png'
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
    sortOrder: 85,
    id: 'Keio-Inokashira-Outing',
    name: {
      en: '井之头线上出游通票',
      jp: '井之头线上出游通票',
      cn: '井之头线上出游通票'
    },
    description: '',
    price: {
      adult: {
        regular: 580
      },
      child: {
        regular: 290
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
      map: '/images/coverage/Keio-Inokashira-Outing.png'
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
    sortOrder: 86,
    id: 'Yurikamome-Enjoy-1Day',
    name: {
      en: '百合鸥一日乘车券',
      jp: '百合鸥一日乘车券',
      cn: '百合鸥一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 820
      },
      child: {
        regular: 410
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
      map: '/images/coverage/Yurikamome-Enjoy-1Day.png'
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
    sortOrder: 87,
    id: 'Yurikamome-Enjoy-24hr',
    name: {
      en: '百合鸥24小时乘车券',
      jp: '百合鸥24小时乘车券',
      cn: '百合鸥24小时乘车券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [24],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Yurikamome-Enjoy-24hr.png'
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
    sortOrder: 88,
    id: 'Yurikamome-Enjoy-TokyoSubway',
    name: {
      en: '百合鸥一日乘车券+东京地铁24小时券',
      jp: '百合鸥一日乘车券+东京地铁24小时券',
      cn: '百合鸥一日乘车券+东京地铁24小时券'
    },
    description: '',
    price: {
      adult: {
        regular: 1620
      },
      child: {
        regular: 810
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
      map: '/images/coverage/Yurikamome-Enjoy-TokyoSubway.png'
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
    sortOrder: 89,
    id: 'Rinkai-1Day',
    name: {
      en: 'りんかい線一日乗車券',
      jp: 'りんかい線一日乗車券',
      cn: 'りんかい線一日乗車券'
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
      map: '/images/coverage/Rinkai-1Day.png'
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
    sortOrder: 90,
    id: 'Monorail-1Day',
    name: {
      en: '东京单轨电车沿线漫步一日通票',
      jp: '东京单轨电车沿线漫步一日通票',
      cn: '东京单轨电车沿线漫步一日通票'
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
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Monorail-1Day.png'
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
    sortOrder: 91,
    id: 'Tama-1Day',
    name: {
      en: '多摩单轨一日乘车券',
      jp: '多摩单轨一日乘车券',
      cn: '多摩单轨一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 890
      },
      child: {
        regular: 450
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
      map: '/images/coverage/Tama-1Day.png'
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
    sortOrder: 92,
    id: 'Tama-Set-Ticket',
    name: {
      en: '多摩单轨电车套票',
      jp: '多摩单轨电车套票',
      cn: '多摩单轨电车套票'
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
      map: '/images/coverage/Tama-Set-Ticket.png'
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
    sortOrder: 93,
    id: 'MinatoMirai-Line-1Day',
    name: {
      en: '港未来线一日乘车券',
      jp: '港未来线一日乘车券',
      cn: '港未来线一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 460
      },
      child: {
        regular: 230
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
      map: '/images/coverage/MinatoMirai-Line-1Day.png'
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
    sortOrder: 94,
    id: 'Seaside-Line-1Day',
    name: {
      en: '横滨海岸线一日乘车券',
      jp: '横滨海岸线一日乘车券',
      cn: '横滨海岸线一日乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 680
      },
      child: {
        regular: 340
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
      map: '/images/coverage/Seaside-Line-1Day.png'
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
    sortOrder: 95,
    id: 'Shonan-Monorail-1Day',
    name: {
      en: '湘南单轨一日自由乘车券',
      jp: '湘南单轨一日自由乘车券',
      cn: '湘南单轨一日自由乘车券'
    },
    description: '',
    price: {
      adult: {
        regular: 610
      },
      child: {
        regular: 310
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
      map: '/images/coverage/Shonan-Monorail-1Day.png'
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
    sortOrder: 96,
    id: 'Enoden-1Day',
    name: {
      en: '江之电一日乘车券',
      jp: '江之电一日乘车券',
      cn: '江之电一日乘车券'
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: '/images/coverage/Enoden-1Day.png'
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
    sortOrder: 97,
    id: 'Enoden-SeaLife-Set',
    name: {
      en: '江之电一日乘车券&新江之岛水族馆套票',
      jp: '江之电一日乘车券&新江之岛水族馆套票',
      cn: '江之电一日乘车券&新江之岛水族馆套票'
    },
    description: '',
    price: {
      adult: {
        regular: 3050
      },
      child: {
        regular: 1480
      },
      under18: 2330
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
      map: '/images/coverage/Enoden-SeaLife-Set.png'
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
    sortOrder: 98,
    id: 'Kamakura-Free-Eco',
    name: {
      en: '镰仓自由环保通票',
      jp: '镰仓自由环保通票',
      cn: '镰仓自由环保通票'
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
      map: '/images/coverage/Kamakura-Free-Eco.png'
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
    sortOrder: 99,
    id: 'Hakone-FreePass',
    name: {
      en: '箱根自由通票２日券',
      jp: '箱根自由通票２日券',
      cn: '箱根自由通票２日券'
    },
    description: '',
    price: {
      adult: {
        regular: 5000
      },
      child: {
        regular: 1000
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
      map: '/images/coverage/Hakone-FreePass.png'
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
    sortOrder: 100,
    id: 'Hakone-FreePass',
    name: {
      en: '箱根自由通票３日券',
      jp: '箱根自由通票３日券',
      cn: '箱根自由通票３日券'
    },
    description: '',
    price: {
      adult: {
        regular: 5400
      },
      child: {
        regular: 1250
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
      map: '/images/coverage/Hakone-FreePass.png'
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
    sortOrder: 101,
    id: 'Hakone-LightPass',
    name: {
      en: '箱根乘物轻量通票',
      jp: '箱根乘物轻量通票',
      cn: '箱根乘物轻量通票'
    },
    description: '',
    price: {
      adult: {
        regular: 3800
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
      map: '/images/coverage/Hakone-LightPass.png'
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
    sortOrder: 102,
    id: 'Hakone-Owakudani',
    name: {
      en: '大涌谷通票',
      jp: '大涌谷通票',
      cn: '大涌谷通票'
    },
    description: '',
    price: {
      adult: {
        regular: 3700
      },
      child: {
        regular: 980
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
      map: '/images/coverage/Hakone-Owakudani.png'
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
    sortOrder: 103,
    id: 'Hakone-Nanbiri',
    name: {
      en: '悠闲箱根通票',
      jp: '悠闲箱根通票',
      cn: '悠闲箱根通票'
    },
    description: '',
    price: {
      adult: {
        regular: 1580
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
      map: '/images/coverage/Hakone-Nanbiri.png'
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
    sortOrder: 104,
    id: 'Daiyuzan-Kintaro',
    name: {
      en: '金太郎通票',
      jp: '金太郎通票',
      cn: '金太郎通票'
    },
    description: '',
    price: {
      adult: {
        regular: 620
      },
      child: {
        regular: 320
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
      map: '/images/coverage/Daiyuzan-Kintaro.png'
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