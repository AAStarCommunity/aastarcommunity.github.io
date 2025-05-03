import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 根据环境添加正确的资源路径前缀
export function getAssetPath(path: string): string {
  // 移除开头的斜杠以防止路径重复
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // 不再需要添加子目录前缀，因为仓库已重命名为组织主页
  return `/${cleanPath}`;
} 