import type { NextConfig } from "next";

// GitHub组织/用户主页不需要子路径配置
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // 启用静态导出，生成out目录
  // 已移除basePath和assetPrefix配置，因为仓库是组织主页
  images: {
    domains: ['raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,  // 为静态导出禁用图片优化
  },
};

export default nextConfig; 