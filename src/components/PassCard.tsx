'use client';

import { JRPass } from '@/types/pass';
import { Star, MapPin, Calendar, Train, ExternalLink, Users, Clock } from 'lucide-react';

interface PassCardProps {
  pass: JRPass;
  onClick?: () => void;
}

function PriceLabel({ price }: { price: JRPass['price'] }) {
  // 按优先级选择一个要展示的优惠/儿童价格
  const labelOrder: { key: keyof JRPass['price']; label: string }[] = [
    { key: 'over65', label: '65岁以上价格' },
    { key: 'under25', label: '25岁以下价格' },
    { key: 'under18', label: '18岁以下价格' },
    { key: 'under15', label: '15岁以下价格' }
  ];

  if (price.freeText) {
    return (
      <>
        <div className="text-sm text-gray-700 font-semibold">
          {price.freeText}
        </div>
        <div className="text-xs text-gray-400">票价说明</div>
      </>
    );
  }

  const found = labelOrder.find(
    (item) =>
      typeof price[item.key] === 'number' &&
      typeof price[item.key] === 'number' &&
      (price[item.key] as number) > 0
  );

  if (found && typeof price[found.key] === 'number') {
    const value = price[found.key] as number;
    return (
      <>
        <div className="text-lg text-gray-400">
          ¥{value.toLocaleString()}
        </div>
        <div className="text-xs text-gray-400">
          {found.label}
        </div>
      </>
    );
  }

  // 默认 fallback：如果有儿童普通价格则显示，否则不显示
  if (typeof price.child?.regular === 'number' && price.child.regular > 0) {
    return (
      <>
        <div className="text-lg text-gray-400">
          ¥{price.child.regular.toLocaleString()}
        </div>
        <div className="text-xs text-gray-400">
          儿童价格
        </div>
      </>
    );
  }

  return null;
}

export default function PassCard({ pass, onClick }: PassCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  // 支持在数据中用 ";" 分割 bestFor 字段来生成多个标签
  const bestForTags =
    Array.isArray(pass.bestFor)
      ? pass.bestFor.flatMap((tag) =>
          String(tag)
            // 同时支持半角 ";" 和全角 "；" 作为分隔符
            .split(/[;；]/)
            .map((t) => t.trim())
            .filter(Boolean)
        )
      : [];

  const hasAnyPriceInfo =
    (typeof pass.price.adult?.regular === 'number' && pass.price.adult.regular > 0) ||
    (typeof pass.price.adult?.phone === 'number' && pass.price.adult.phone > 0) ||
    (typeof pass.price.child?.regular === 'number' && pass.price.child.regular > 0) ||
    (typeof pass.price.child?.phone === 'number' && pass.price.child.phone > 0) ||
    (typeof pass.price.over65 === 'number' && pass.price.over65 > 0) ||
    (typeof pass.price.under25 === 'number' && pass.price.under25 > 0) ||
    (typeof pass.price.under18 === 'number' && pass.price.under18 > 0) ||
    (typeof pass.price.under15 === 'number' && pass.price.under15 > 0) ||
    !!pass.price.freeText;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Image */}
        <div className="relative h-20 w-full overflow-hidden rounded-xl mb-4">
          <img 
            src={pass.coverage.map || '/images/default-pass.jpg'} 
            alt={pass.name.cn}
            className="w-full h-full object-cover"
          />
          {/* 期间限定标志 */}
          {pass.isLimitedPeriod && (
            <div className="absolute top-4 left-4">
              <div className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-lg">
                <span className="text-sm font-bold">期间限定</span>
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-sm font-semibold text-gray-800">
                {pass.category === 'national' ? '全国版' : '地区版'}
              </span>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1 pr-4">
          
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {pass.name.cn}
            </h3>
            <p className="text-gray-700 text-sm mb-4">
          {pass.description}
        </p>
        <div className="flex items-center space-x-1">
              {renderStars(pass.popularity)}
              <span className="text-sm text-gray-500 ml-2">
                ({pass.popularity}/5)
              </span>
            </div>
          </div>
          {hasAnyPriceInfo && (
            <div className="text-right flex-shrink-0">
              {typeof pass.price.adult?.regular === 'number' &&
                pass.price.adult.regular > 0 && (
                  <>
                    <div className="text-2xl font-bold text-red-600">
                      ¥{pass.price.adult.regular.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      成人价格
                    </div>
                  </>
                )}
              <PriceLabel price={pass.price} />
            </div>
          )}
        </div>

        {/* Best For Tags */}
        {bestForTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {bestForTags.map((tag) => (
              <span
                key={tag}
                className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mb-4 rounded-xl border border-gray-100">
          <table className="w-full text-sm text-gray-700">
            <tbody>
              <tr className="border-b border-gray-100">
                <th className="w-28 px-4 py-3 text-left text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    使用天数
                  </div>
                </th>
                <td className="px-4 py-3">{pass.duration.join(' / ')}天</td>
              </tr>
              {pass.validityPeriod && (
                <tr className="border-b border-gray-100">
                  <th className="px-4 py-3 text-left text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      使用期限
                    </div>
                  </th>
                  <td className="px-4 py-3">
                    {pass.validityPeriod.description || '使用期限'}
                    {pass.validityPeriod.description !== '全年可用' &&
                      pass.validityPeriod.description !== '周六周日节假日限定' &&
                      `：${pass.validityPeriod.startDate} - ${pass.validityPeriod.endDate}`}
                  </td>
                </tr>
              )}
              <tr className="border-b border-gray-100">
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    覆盖范围
                  </div>
                </th>
                <td className="px-4 py-3">{pass.coverage.regions.join('、')}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    适用人群
                  </div>
                </th>
                <td className="px-4 py-3">{pass.targetAudience?.join('、') || '通用'}</td>
              </tr>
              <tr>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4" />
                    可乘车种
                  </div>
                </th>
                <td className="px-4 py-3">{pass.trainTypes.join('、')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-auto">
          {pass.purchaseLinks && pass.purchaseLinks.length > 0 ? (
            <a 
              href={pass.purchaseLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              官方购买
            </a>
          ) : (
            <button className="flex-1 bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              官方购买
            </button>
          )}
          {pass.officialLinks && pass.officialLinks.length > 0 ? (
            <a 
              href={pass.officialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              查看详情
            </a>
          ) : (
            <button 
              className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              查看详情
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
