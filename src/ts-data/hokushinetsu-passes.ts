import { JRPass } from '@/types/pass';

// 北信越地区周游券
export const hokushinetsuPasses: JRPass[] = [
  {
    sortOrder: 1,
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
    bestFor: ['现金支付; 购票机可购买'],
    duration: [1],
    validityPeriod: {
      startDate: '',
      endDate: '',
      description: '全年可用'
    },
    coverage: {
      regions: ['北海道'],
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
  }
];