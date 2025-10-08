'use client';

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-red-400 mb-4">🚄 FindMyJR-Pass</div>
            <p className="text-gray-400">
              您的日本铁路通票专家，帮您找到最经济实惠的旅行方案
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">产品</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/passes" className="hover:text-white transition-colors">通票查询</Link></li>
              <li><a href="#map" className="hover:text-white transition-colors">覆盖地图</a></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">用户故事</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">价格对比</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">帮助</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">使用指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">意见反馈</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">微信公众号</a></li>
              <li><a href="#" className="hover:text-white transition-colors">微博</a></li>
              <li><a href="#" className="hover:text-white transition-colors">小红书</a></li>
              <li><a href="#" className="hover:text-white transition-colors">抖音</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FindMyJR-Pass. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
