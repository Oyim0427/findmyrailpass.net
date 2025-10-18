'use client';

import { JRPass } from '@/types/pass';
import { Star, MapPin, Clock, Train, ExternalLink, Users } from 'lucide-react';

interface PassCardProps {
  pass: JRPass;
  onClick?: () => void;
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

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
          <img 
            src={pass.coverage.map || '/images/default-pass.jpg'} 
            alt={pass.name.cn}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-gray-800">
              {pass.category === 'national' ? '全国版' : '地区版'}
            </span>
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
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold text-red-600">
              ¥{pass.price.adult.regular.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-1">
              成人价格
            </div>
            <div className="text-lg text-gray-400">
              ¥{pass.price.child.regular.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">
              儿童价格
            </div>
          </div>
        </div>


        {/* Duration */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock className="w-4 h-4 mr-2" />
          <span>{pass.duration.join(' / ')}天</span>
        </div>

        {/* Coverage */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{pass.coverage.regions.join('、')}</span>
        </div>

        {/* Target Audience */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Users className="w-4 h-4 mr-2" />
          <span>{pass.targetAudience?.join('、') || '通用'}</span>
        </div>

        {/* Train Types */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Train className="w-4 h-4 mr-2" />
          <span>{pass.trainTypes.join('、')}</span>
        </div>

        {/* Best For Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pass.bestFor.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Advantages Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">主要优势</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {pass.advantages.slice(0, 2).map((advantage, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {advantage}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-auto">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <ExternalLink className="w-4 h-4" />
            官方购买
          </button>
          <button className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            查看详情
          </button>
        </div>
      </div>
    </div>
  );
}
