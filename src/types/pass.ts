export interface JRPass {
  id: string;
  name: {
    en: string;
    jp: string;
  };
  description: string;
  price: {
    adult: {
      regular: number;
      green: number;
    };
    child: {
      regular: number;
      green: number;
    };
  };
  duration: number[]; // 可选天数
  coverage: {
    regions: string[];
    map: string; // 地图图片路径
  };
  trainTypes: string[];
  advantages: string[];
  disadvantages: string[];
  tips: string[];
  officialLinks: {
    name: string;
    url: string;
  }[];
  category: 'national' | 'regional' | 'local' | 'city';
  popularity: number; // 1-5星评级
  bestFor: string[]; // 适用场景
}

export interface Route {
  from: string;
  to: string;
  duration: number; // 天数
  regions: string[];
}

export interface PassRecommendation {
  pass: JRPass;
  savings: number;
  reason: string;
  score: number; // 推荐分数 1-100
}
