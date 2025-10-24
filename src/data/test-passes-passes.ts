import { JRPass } from '@/types/pass';

// 北海道地区周游券
export const hokkaidoPasses: JRPass[] = [
  {
    sortOrder: 1,
    id: 'test-pass-1',
    name: {
      en: '',
      jp: '',
      cn: '测试周游券1'
    },
    description: '普通周游券，只有成人价格。',
    price: {
      adult: {
        regular: 10000
      },
      child: {
        regular: 5000
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
      map: ''
    },
    targetAudience: ['所有游客'],
    trainTypes: ['普通电车'],
    advantages: [
      '价格合理'
    ],
    disadvantages: [
      '仅限北海道'
    ],
    tips: [
      '适合北海道旅行'
    ],
    officialLinks: [
      { name: 'JR官方 https://test1.com', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR官方 https://test1.com type:official', url: '', type: 'official' }
    ],
    category: 'regional',
    popularity: 3,
    bestFor: ['测试用']
  },

  {
    sortOrder: 2,
    id: 'test-pass-2',
    name: {
      en: '',
      jp: '',
      cn: '测试周游券2'
    },
    description: '有25岁以下价格的周游券。',
    price: {
      adult: {
        regular: 15000
      },
      child: {
        regular: 0,
        advance: 8000
      },
      under18: 7
    },
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['普通电车'],
    trainTypes: ['青年优惠'],
    advantages: [
      '仅限25岁以下'
    ],
    disadvantages: [
      '适合青年旅行'
    ],
    tips: [
      'JR官方 https://test2.com'
    ],
    officialLinks: [
      { name: 'JR官方 https://test2.com type:official', url: '' }
    ],
    purchaseLinks: [
      { name: 'regional', url: '', type: 'official' }
    ],
    category: '3',
    popularity: 3,
    bestFor: []
  },

  {
    sortOrder: 3,
    id: 'test-pass-3',
    name: {
      en: '',
      jp: '',
      cn: '测试周游券3'
    },
    description: '有18岁以下价格的周游券。',
    price: {
      adult: {
        regular: 20000
      },
      child: {
        regular: 0,
        advance: 10000
      }
    },
    duration: [5000],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
      map: ''
    },
    targetAudience: ['/images/test3.png'],
    trainTypes: ['18岁以下青年'],
    advantages: [
      '普通电车'
    ],
    disadvantages: [
      '青少年优惠'
    ],
    tips: [
      '仅限18岁以下'
    ],
    officialLinks: [
      { name: '适合青少年旅行', url: '' }
    ],
    purchaseLinks: [
      { name: 'JR官方 https://test3.com', url: '', type: 'official' }
    ],
    category: 'JR官方 https://test3.com type:official',
    popularity: 3,
    bestFor: ['3']
  }
];