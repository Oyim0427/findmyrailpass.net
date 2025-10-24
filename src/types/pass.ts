// JRPass 接口定义了日本各类铁路/交通周游券的详细信息结构
export interface JRPass {
  id: string; // 周游券唯一标识
  name: {
    en: string; // 英文名称
    jp: string; // 日文名称
    cn: string; // 中文名称
  };
  description: string; // 周游券介绍
  price: {
    adult: {
      regular: number; // 成人常规价格
      advance?: number; // 成人预购价格（可选）
    };
    child: {
      regular: number; // 儿童常规价格
      advance?: number; // 儿童预购价格（可选）
    };
    under25?: number; // 25岁以下价格（可选）
    under18?: number; // 18岁以下价格（可选）
  };
  duration: number[]; // 适用天数列表，如[3,5,7]
  coverage: {
    regions: string[]; // 覆盖地区名称数组
    map: string; // 地图图片路径
  };
  targetAudience: string[]; // 目标适用人群说明
  trainTypes: string[]; // 覆盖的列车/交通工具类型
  advantages: string[]; // 优势列表
  disadvantages: string[]; // 劣势列表
  tips: string[]; // 使用建议与提示
  officialLinks: {
    name: string; // 官方链接显示名称
    url: string;  // 官方链接地址
  }[];
  purchaseLinks?: {
    name: string; // 购票链接显示名称
    url: string; // 购票链接地址
    type?: 'official'; // 链接类型（如官方，可选）
  }[];
  category: 'national' | 'regional' | 'local' | 'city' | 'bus' | 'private' | 'special'; // 分类
  popularity: number; // 人气等级 1-5星，用于排序与推荐
  bestFor: string[]; // 最适合的出行/使用场景描述
  sortOrder?: number; // 地区内手动设定的排序权重（可选）
  isLimitedPeriod?: boolean; // 是否为期间限定券（可选）
  validityPeriod?: {
    startDate: string; // 有效起始日期，格式 YYYY-MM-DD
    endDate: string; // 有效截止日期，格式 YYYY-MM-DD
    description?: string; // 有效期间描述（如2024年度）
  };
}

// Route 接口用于描述行程路线的结构
export interface Route {
  from: string; // 出发地
  to: string;   // 目的地
  duration: number; // 行程天数
  regions: string[]; // 涉及的地区
}

// PassRecommendation 用于推荐最合适周游券的结构
export interface PassRecommendation {
  pass: JRPass; // 推荐的周游券
  savings: number; // 预计节省金额（单位：日元）
  reason: string; // 推荐理由
  score: number; // 推荐分数（1-100分，用于排序）
}
