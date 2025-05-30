# AAStar Website 修改日志

## 版本 0.1.9 (2024-05-03)

### 修复
- 修复CSS和图片加载问题
- 移除next.config.ts中的basePath和assetPrefix配置，直接使用根路径
- 更新getAssetPath函数，不再添加'/AAStar-Website'前缀
- 更新页面中的图片路径引用，直接使用相对路径

### 影响的文件
- next.config.ts - 更新资源路径配置
- lib/utils.ts - 更新资源路径工具函数
- app/page.tsx - 更新图片引用路径

### 潜在影响
- 修复了GitHub Pages部署后CSS和图片加载问题
- 确保网站在组织主页上能正确显示所有资源

## 版本 0.1.8 (2024-05-03)

### 修复
- 修复GitHub Actions工作流文件中的路径配置
- 更新artifact上传路径为`'./out'`而不是`'./website/out'`

### 影响的文件
- .github/workflows/nextjs.yml - 更新路径配置

### 潜在影响
- 修复了GitHub Actions部署失败的问题
- 确保自动部署使用正确的静态文件目录

## 版本 0.1.7 (2024-05-03)

### 重大调整
- 将所有网站文件从website子目录移动到仓库根目录
- 调整GitHub Actions工作流配置，直接使用根目录的out
- 重新构建网站确保路径正确

### 影响的文件
- 整个项目结构 - 从子目录移动到根目录

### 潜在影响
- 修复了CSS和图片加载问题
- 简化了部署流程
- 确保GitHub Pages能正确加载所有资源

## 版本 0.1.6 (2024-05-03)

### 优化
- 仓库重命名为aastarcommunity.github.io，启用GitHub组织主页
- 移除next.config.ts中的basePath和assetPrefix配置
- 更新getAssetPath函数，移除子路径前缀
- 网站URL从子路径变更为根路径：https://aastarcommunity.github.io/

### 影响的文件
- next.config.ts - 移除子路径配置
- lib/utils.ts - 更新资源路径处理

### 潜在影响
- 网站现在可以通过更简洁的URL访问：https://aastarcommunity.github.io/
- 改善了URL结构和可读性
- 更符合GitHub Pages的最佳实践

## 版本 0.1.5 (2024-05-03)

### 修复
- 修复GitHub Pages部署后CSS和资源无法加载的问题
- 在next.config.ts中添加basePath和assetPrefix配置
- 添加getAssetPath工具函数处理资源路径前缀
- 修改图片引用路径，使用动态生成的路径

### 影响的文件
- website/next.config.ts - 添加GitHub Pages子路径支持
- website/lib/utils.ts - 添加资源路径处理工具函数
- website/app/page.tsx - 更新图片路径引用

### 潜在影响
- 修复了GitHub Pages部署后CSS和资源加载问题
- 确保网站在GitHub Pages子路径下能正确显示

## 版本 0.1.4 (2024-05-03)

### 修复
- 修复GitHub Actions工作流文件未被正确提交的问题
- 确保GitHub Actions直接部署静态内容，完全跳过构建步骤

### 影响的文件
- ../.github/workflows/nextjs.yml - 确保工作流文件被正确提交

### 潜在影响
- 修复了GitHub Actions仍尝试检测包管理器的问题
- 确保GitHub Actions直接部署静态内容，无需在线构建

## 版本 0.1.3 (2024-05-03)

### 修复
- 在next.config.ts中添加静态导出配置 `output: 'export'`
- 为静态导出添加图片优化禁用配置 `unoptimized: true`
- 更新build-and-push.sh脚本，改进错误提示

### 影响的文件
- website/next.config.ts - 添加静态导出配置
- website/build-and-push.sh - 改进错误提示

### 潜在影响
- 修复了本地构建不生成out目录的问题
- 确保静态导出时图片能正常显示

## 版本 0.1.2 (2024-05-03)

### 优化
- 简化GitHub Actions工作流，移除在线构建步骤，直接部署本地构建的静态文件
- 修改.gitignore文件，不再忽略out目录，允许提交构建后的静态文件
- 添加build-and-push.sh脚本，简化本地构建和推送流程
- 更新README.md，添加GitHub Pages部署说明

### 影响的文件
- .github/workflows/nextjs.yml - 简化为仅部署预构建的静态文件
- website/.gitignore - 允许提交out目录
- website/build-and-push.sh - 新增脚本
- website/README.md - 添加部署说明

### 潜在影响
- 加快了GitHub Pages部署速度
- 减少了GitHub Actions中的构建错误可能性
- 提供了更简单的本地构建和部署流程

## 版本 0.1.1 (2024-05-03)

### 修复
- 修复GitHub Actions工作流，添加对pnpm包管理器的支持
- 更新工作流缓存配置以包含pnpm-lock.yaml
- 使用pnpm/action-setup安装pnpm
- 修复构建命令使用检测到的包管理器而非硬编码yarn

### 影响的文件
- .github/workflows/nextjs.yml - 添加pnpm支持

### 潜在影响
- 修复了GitHub Actions自动部署失败问题
- 优化了CI/CD流程对pnpm的支持

## 版本 0.1.0 (2024-05-03)

### 修复
- 配置next.config.ts允许从raw.githubusercontent.com加载图片
- 修复导航菜单中过时的Link组件用法，移除legacyBehavior属性
- 解决favicon.ico文件冲突，删除app/favicon.ico，保留public/favicon.ico

### 影响的文件
- website/next.config.ts - 添加images配置以允许外部图片域名
- website/app/page.tsx - 修复Link组件的写法
- 删除了app/favicon.ico以解决文件冲突

### 潜在影响
- 修复了Header组件中的外部图片加载
- 优化了导航菜单的实现，删除了过时的API用法
- 解决了favicon加载冲突问题 