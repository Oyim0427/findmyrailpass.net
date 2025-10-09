'use client';

import NavigationSection from "@/components/sections/NavigationSection";
import FooterSection from "@/components/sections/FooterSection";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <NavigationSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">用户故事</h1>
          <p className="text-xl text-gray-600">分享您的日本铁路之旅体验</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 故事1 */}
          <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="text-4xl mb-2">🌸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">樱花季的关西之旅</h3>
              <p className="text-gray-600 text-sm mb-4">by 张小明 • 2024年3月</p>
            </div>
            <p className="text-gray-700 mb-4">
              使用关西周游券3日券，完美覆盖了大阪、京都、奈良的樱花景点。新干线到京都只需要15分钟，非常方便！
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">阅读时间: 3分钟</span>
              <button className="text-red-600 hover:text-red-700 font-medium">阅读全文 →</button>
            </div>
          </article>

          {/* 故事2 */}
          <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="text-4xl mb-2">🏔️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">北海道冬季探险</h3>
              <p className="text-gray-600 text-sm mb-4">by 李美丽 • 2024年1月</p>
            </div>
            <p className="text-gray-700 mb-4">
              北海道周游券5日券让我们轻松游览了札幌、小樽、函馆。JR特急列车温暖舒适，窗外雪景美不胜收。
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">阅读时间: 5分钟</span>
              <button className="text-red-600 hover:text-red-700 font-medium">阅读全文 →</button>
            </div>
          </article>

          {/* 故事3 */}
          <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="text-4xl mb-2">🏯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">九州温泉之旅</h3>
              <p className="text-gray-600 text-sm mb-4">by 王强 • 2024年2月</p>
            </div>
            <p className="text-gray-700 mb-4">
              九州周游券3日券带我们体验了别府温泉、熊本城、鹿儿岛。JR九州特色列车"由布院之森"特别推荐！
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">阅读时间: 4分钟</span>
              <button className="text-red-600 hover:text-red-700 font-medium">阅读全文 →</button>
            </div>
          </article>

          {/* 故事4 */}
          <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="text-4xl mb-2">🌊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">四国环岛记</h3>
              <p className="text-gray-600 text-sm mb-4">by 陈小华 • 2023年11月</p>
            </div>
            <p className="text-gray-700 mb-4">
              四国周游券4日券让我们深度游览了香川、爱媛、高知、德岛。濑户内海的美景让人难忘。
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">阅读时间: 6分钟</span>
              <button className="text-red-600 hover:text-red-700 font-medium">阅读全文 →</button>
            </div>
          </article>

          {/* 故事5 */}
          <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="text-4xl mb-2">🗼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">东京周边一日游</h3>
              <p className="text-gray-600 text-sm mb-4">by 刘芳 • 2024年4月</p>
            </div>
            <p className="text-gray-700 mb-4">
              东京广域周游券3日券性价比超高！去了箱根、河口湖、日光，每个地方都有独特的魅力。
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">阅读时间: 3分钟</span>
              <button className="text-red-600 hover:text-red-700 font-medium">阅读全文 →</button>
            </div>
          </article>

          {/* 故事6 */}
          <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="text-4xl mb-2">🚄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">全国JR Pass深度游</h3>
              <p className="text-gray-600 text-sm mb-4">by 赵大伟 • 2023年10月</p>
            </div>
            <p className="text-gray-700 mb-4">
              21日全国JR Pass让我们从北海道到九州，深度体验了日本各地的风土人情。新干线网络太发达了！
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">阅读时间: 8分钟</span>
              <button className="text-red-600 hover:text-red-700 font-medium">阅读全文 →</button>
            </div>
          </article>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-3 rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-lg shadow-amber-400/25">
            分享您的故事
          </button>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
