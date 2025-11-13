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
  // 静态导出配置 - 用于 FTP 部署
  output: 'export',
};

export default nextConfig;
