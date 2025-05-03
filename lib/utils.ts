import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 根据环境添加正确的资源路径前缀
export function getAssetPath(path: string): string {
  // 移除开头的斜杠以防止路径重复
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // 在生产环境中添加basePath前缀
  if (process.env.NODE_ENV === 'production') {
    return `/AAStar-Website/${cleanPath}`;
  }
  
  // 开发环境使用相对路径
  return `/${cleanPath}`;
}
