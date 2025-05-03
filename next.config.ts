import type { NextConfig } from "next";

// 获取存储库名称作为基础路径
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';

// 确定 basePath 和 assetPrefix
const basePath = isGithubActions ? `/${repoName}` : '';
const assetPrefix = isGithubActions ? `/${repoName}/` : '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // 启用静态导出，生成out目录
  basePath: process.env.NODE_ENV === 'production' ? '/AAStar-Website' : '',  // 为GitHub Pages设置子路径
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AAStar-Website/' : '',  // 为资源设置前缀
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
