import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 迁移到新的 turbopack 配置
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // 修复路由问题
  trailingSlash: false,
  // 移除可能导致问题的输出配置
  // output: 'standalone',
};

export default nextConfig;
