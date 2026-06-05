'use client';

import { JRPass } from '@/types/pass';
import { Star, MapPin, Calendar, Train, ExternalLink, Users, Clock } from 'lucide-react';

interface PassCardProps {
  pass: JRPass;
  onClick?: () => void;
  dict?: any;
}

export default function PassCard({ pass, onClick, dict }: PassCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-200'
        }`}
      />
    ));
  };

  const bestForTags = Array.isArray(pass.bestFor)
    ? pass.bestFor.flatMap((tag) => String(tag).split(/[;；]/).map((t) => t.trim()).filter(Boolean))
    : [];

  const displayPrice = pass.price?.adult?.regular || 0;
  const priceText = pass.price?.freeText || '';

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col overflow-hidden"
      onClick={onClick}
    >
      {/* Image Header */}
      <div className="relative h-48 w-full bg-gray-100">
        <img 
          src={pass.coverage?.map || '/images/default-pass.jpg'} 
          alt={pass.name?.cn}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop'; }}
        />
        {pass.isLimitedPeriod && (
          <div className="absolute top-4 left-4">
            <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              Limited Period
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
            <span className="text-xs font-semibold text-teal-700">
              {pass.category === 'national' ? 'National' : 'Regional'}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
              {pass.name?.cn || 'Unknown Pass'}
            </h3>
            <div className="flex items-center space-x-1">
              {renderStars(pass.popularity || 5)}
            </div>
          </div>
          
          <div className="text-right flex-shrink-0">
            {displayPrice > 0 ? (
              <>
                <div className="text-2xl font-bold text-teal-600">
                  ¥{displayPrice.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {dict?.priceAdult || '成人价格'}
                </div>
              </>
            ) : priceText ? (
              <div className="text-sm font-bold text-teal-600 max-w-[120px] text-right break-words">
                {priceText.substring(0, 30)}{priceText.length > 30 ? '...' : ''}
              </div>
            ) : null}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {pass.description || 'No description available.'}
        </p>

        {bestForTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {bestForTags.map((tag) => (
              <span key={tag} className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md text-xs font-medium border border-teal-100">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mb-6 space-y-3 mt-auto">
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs text-gray-500 mb-0.5">{dict?.duration || '使用天数'}</div>
              <div className="text-sm text-gray-900 font-medium">{pass.duration?.join(' / ') || 1} Days</div>
            </div>
          </div>
          
          {pass.validityPeriod?.description && (
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs text-gray-500 mb-0.5">{dict?.validity || '使用期限'}</div>
                <div className="text-sm text-gray-900 font-medium">{pass.validityPeriod.description}</div>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs text-gray-500 mb-0.5">{dict?.coverage || '覆盖范围'}</div>
              <div className="text-sm text-gray-900 font-medium line-clamp-2">{pass.coverage?.regions?.join('、') || 'N/A'}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
          {pass.officialLinks && pass.officialLinks.length > 0 ? (
            <a 
              href={pass.officialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {dict?.details || '查看详情'}
            </a>
          ) : (
            <button className="flex-1 bg-gray-50 border-2 border-gray-200 text-gray-400 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-not-allowed">
              {dict?.details || '查看详情'}
            </button>
          )}
          
          <button className="flex-1 btn-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2" onClick={(e) => e.stopPropagation()}>
            {dict?.buyNow || '官方购买'}
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
