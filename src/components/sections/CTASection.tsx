'use client';

export default function CTASection() {
  return (
    <section className="bg-red-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          准备开始您的日本之旅？
        </h2>
        <p className="text-xl text-red-100 mb-8">
          立即使用我们的智能推荐系统，找到最适合您的JR通票
        </p>
        <a href="#calculator" className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          开始规划旅程
        </a>
      </div>
    </section>
  );
}
