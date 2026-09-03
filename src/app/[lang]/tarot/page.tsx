'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import NavigationSection from "@/components/sections/NavigationSection";
import FooterSection from "@/components/sections/FooterSection";

export default function TarotPage() {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang || 'zh';
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const tarotCards = [
    {
      id: 1,
      name: "愚者",
      emoji: "🎭",
      description: "新的开始，充满冒险精神",
      route: "东京 → 大阪 → 京都",
      meaning: "把它当作路线灵感；东京到关西跨越多个运营区域，请先比较普通票与全国券。"
    },
    {
      id: 2,
      name: "魔术师",
      emoji: "🎪",
      description: "创造力与行动力",
      route: "札幌 → 函馆 → 小樽",
      meaning: "把它当作路线灵感；是否买北海道铁路券取决于实际车次、天数和普通票合计。"
    },
    {
      id: 3,
      name: "女祭司",
      emoji: "🌙",
      description: "直觉与智慧",
      route: "福冈 → 熊本 → 鹿儿岛",
      meaning: "把它当作路线灵感；请根据北部、南部或全九州的实际覆盖范围比较。"
    },
    {
      id: 4,
      name: "皇帝",
      emoji: "👑",
      description: "权威与稳定",
      route: "全国JR网络",
      meaning: "跨区路线可以比较全国券，但并不代表一定划算；应先查普通票总价。"
    },
    {
      id: 5,
      name: "恋人",
      emoji: "💕",
      description: "爱情与选择",
      route: "高松 → 松山 → 高知",
      meaning: "把它当作路线灵感；四国票券范围可能调整，出发前请看 JR 四国官网。"
    },
    {
      id: 6,
      name: "战车",
      emoji: "🏎️",
      description: "胜利与决心",
      route: "东京 → 箱根 → 河口湖",
      meaning: "把它当作路线灵感；私铁、巴士与 JR 线路的覆盖并不相同，请逐段核对。"
    }
  ];

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
    setIsRevealed(true);
  };

  const resetTarot = () => {
    setSelectedCard(null);
    setIsRevealed(false);
  };

  return (
    <div className="min-h-screen">
      <NavigationSection lang={lang} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">路线塔罗占卜</h1>
          <p className="text-xl text-gray-600">只生成旅行灵感，不生成购票建议</p>
        </div>

        {!isRevealed ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-4">
                请静下心来，思考您想要探索的日本地区，然后选择一张塔罗牌...
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tarotCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => handleCardClick(card.id)}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">🃏</div>
                    <p className="text-sm text-gray-600">点击翻开</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {selectedCard && (
              <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                <div className="text-6xl mb-4">
                  {tarotCards[selectedCard - 1].emoji}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {tarotCards[selectedCard - 1].name}
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  {tarotCards[selectedCard - 1].description}
                </p>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">推荐路线</h3>
                  <p className="text-lg text-gray-800 mb-4">
                    {tarotCards[selectedCard - 1].route}
                  </p>
                  <p className="text-lg text-gray-700">
                    {tarotCards[selectedCard - 1].meaning}
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={resetTarot}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-lg shadow-amber-400/25"
                  >
                    重新占卜
                  </button>
                  <Link href={`/${lang}#calculator`} className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-lg shadow-amber-400/25">用官方数据比较</Link>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">占卜说明</h3>
            <p className="text-gray-700">
              此互动仅供娱乐，不影响计算器排序，也不是购票或财务建议。实际选择请根据行程、预算和运营方最新规则决定。
            </p>
          </div>
        </div>
      </main>
      <FooterSection lang={lang} />
    </div>
  );
}
