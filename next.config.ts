import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

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
  // FTP/static hosts can serve every route from a real directory index without rewrites.
  trailingSlash: true,
  // 静态导出配置 - 用于 FTP 部署
  output: 'export',
  // 禁用图片优化以兼容静态导出
  images: {
    unoptimized: true,
  },
};

export default function config(phase: string): NextConfig {
  // Keep a running preview from overwriting production build manifests.
  if (process.env.NEXT_EXPORT_DIR) {
    return { ...nextConfig, distDir: process.env.NEXT_EXPORT_DIR };
  }
  return phase === PHASE_DEVELOPMENT_SERVER
    ? { ...nextConfig, distDir: '.next-dev' }
    : nextConfig;
}
