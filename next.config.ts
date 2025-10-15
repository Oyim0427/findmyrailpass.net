import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // 修复路由问题
  trailingSlash: false,
  // 确保正确的输出配置
  output: 'standalone',
};

export default nextConfig;
