'use client';

import { JRPass } from '@/types/pass';
import { Star, MapPin, Clock, Train, ExternalLink } from 'lucide-react';

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
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {pass.name.en}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{pass.name.jp}</p>
            <div className="flex items-center space-x-1">
              {renderStars(pass.popularity)}
              <span className="text-sm text-gray-500 ml-2">
                ({pass.popularity}/5)
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-red-600">
              ¥{pass.price.adult.regular.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              成人价格
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {pass.description}
        </p>

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

        {/* Train Types */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Train className="w-4 h-4 mr-2" />
          <span>{pass.trainTypes.slice(0, 2).join('、')}</span>
          {pass.trainTypes.length > 2 && (
            <span className="text-gray-400 ml-1">等{pass.trainTypes.length}种</span>
          )}
        </div>

        {/* Best For Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pass.bestFor.slice(0, 3).map((tag) => (
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
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-amber-400/25">
            查看详情
          </button>
          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
