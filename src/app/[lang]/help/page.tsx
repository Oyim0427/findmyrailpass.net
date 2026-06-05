'use client';

import NavigationSection from "@/components/sections/NavigationSection";
import FooterSection from "@/components/sections/FooterSection";
import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <NavigationSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">帮助中心</h1>
          <p className="text-xl text-gray-600">常见问题解答和使用指南</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 常见问题 */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q: 如何选择最适合的周游券？</h3>
                <p className="text-gray-700">
                  A: 首先确定您的行程范围和时间。如果只在一个地区旅行，选择地区周游券更经济；
                  如果要跨地区旅行，全国JR Pass可能更划算。使用我们的计算器可以帮您比较不同选择。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q: 周游券可以提前多久购买？</h3>
                <p className="text-gray-700">
                  A: 大部分周游券可以提前3个月购买。建议提前购买以确保有票，特别是在旅游旺季。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q: 周游券包含哪些交通工具？</h3>
                <p className="text-gray-700">
                  A: 周游券通常包含JR集团运营的列车，包括新干线、特急、急行、普通列车等。
                  部分周游券还包含JR巴士和JR渡轮。具体包含范围请查看各周游券的详细说明。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q: 如何激活和使用周游券？</h3>
                <p className="text-gray-700">
                  A: 在日本的JR车站兑换点出示护照和兑换券即可激活。激活后即可开始使用，
                  每次乘车时向检票员出示即可。注意：周游券不能用于自动检票机。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q: 周游券可以退票吗？</h3>
                <p className="text-gray-700">
                  A: 未激活的周游券通常可以退票，但可能需要支付手续费。已激活的周游券一般不能退票。
                  具体退票政策请咨询购买渠道。
                </p>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 联系支持 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">联系支持</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <p className="font-medium text-gray-900">邮箱支持</p>
                    <p className="text-sm text-gray-600">support@findmyjrpass.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💬</span>
                  <div>
                    <p className="font-medium text-gray-900">在线客服</p>
                    <p className="text-sm text-gray-600">工作日 9:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  <div>
                    <p className="font-medium text-gray-900">微信客服</p>
                    <p className="text-sm text-gray-600">FindMyJRPass</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 快速链接 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">快速链接</h3>
              <div className="space-y-3">
                <a href="/passes" className="block text-red-600 hover:text-red-700 transition-colors">
                  → 查看所有周游券
                </a>
                <Link href="/" className="block text-red-600 hover:text-red-700 transition-colors">
                  → 使用计算器
                </Link>
                <a href="/blog" className="block text-red-600 hover:text-red-700 transition-colors">
                  → 用户故事
                </a>
                <a href="/tarot" className="block text-red-600 hover:text-red-700 transition-colors">
                  → 路线占卜
                </a>
              </div>
            </div>

            {/* 使用指南 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">使用指南</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">1.</span>
                  <p className="text-sm text-gray-700">确定您的旅行时间和地区</p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">2.</span>
                  <p className="text-sm text-gray-700">使用计算器比较不同选择</p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">3.</span>
                  <p className="text-sm text-gray-700">查看详细路线和景点信息</p>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">4.</span>
                  <p className="text-sm text-gray-700">购买并激活周游券</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
