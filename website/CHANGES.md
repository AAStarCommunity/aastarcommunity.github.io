# AAStar Website 修改日志

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