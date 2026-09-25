// 大区用于计算器的粗粒度匹配，不代表具体线路或车次可使用。
export const MAJOR_REGIONS = ['北海道', '東北', '関東', '東海', '北信越', '近畿', '中国', '四国', '九州'] as const;
export type MajorRegion = typeof MAJOR_REGIONS[number];

// JRPass 接口定义了日本各类铁路/交通周游券的详细信息结构
export interface JRPass {
  id: string; // 周游券唯一标识
  name: {
    en: string; // 英文名称
    jp: string; // 日文名称
    cn: string; // 中文名称
  };
  description: string; // 周游券介绍（可来自“详情全文”或“限制事项”）
  price: {
    adult: {
      regular: number; // 从文本中尝试解析出的成人数字价格，用于排序/过滤
      phone?: number;
    };
    child: {
      regular: number;
      phone?: number;
    };
    freeText?: string; // 自由入力的票价说明（对应 CSV 中的“价格”）
  };
  duration: number[]; // 适用天数列表，如[3,5,7]，从“有效期间”解析
  majorRegions: MajorRegion[]; // 计算器使用的标准日本大区，具体线路仍以运营方为准
  coverage: {
    regions: string[]; // 原始覆盖地区标签；全国型可使用“全国”
    map: string; // 地图图片路径（对应“详情页图片链接”）
    description?: string; // 自由乘车区间文本
  };
  targetAudience: string[]; // 目标适用人群说明
  trainTypes: string[]; // 覆盖的列车/交通工具类型（对应“可利用设备”）
  officialLinks: {
    name: string; // 官方链接显示名称
    url: string;  // 官方链接地址
  }[];
  purchaseLinks?: {
    name: string; // 购票链接显示名称
    url: string; // 购票链接地址
    type?: 'official' | 'affiliate' | 'sponsored'; // 链接类型
  }[];
  category: 'national' | 'regional' | 'local' | 'city' | 'bus' | 'private' | 'special'; // 分类
  popularity: number; // 人气等级 1-5星，默认5
  bestFor: string[]; // 最适合的出行/使用场景描述
  sortOrder?: number; 
  isLimitedPeriod?: boolean; // 是否为期间限定券
  validityPeriod?: {
    startDate: string; 
    endDate: string; 
    description?: string; // 有效期间描述（对应“利用期间”）
  };
  ticket_note?: string; // 备考说明文字（如发售处、相关信息等）
  company?: string; // 公司名称
  sourceAuthority?: 'operator' | 'government' | 'partner';
  lastVerifiedAt?: string;
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
