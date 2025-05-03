# AAStar website

## How to deploy
### 构建静态站点: 
运行 pnpm run build。这会在 website 目录下生成一个 out 文件夹，包含所有静态文件。

设置 GitHub Actions 工作流 (推荐):
在 website/.github/workflows/ 目录下创建一个 YAML 文件 (例如 deploy.yml)。

### 配置这个工作流，使其在推送到 main 分支时触发。
工作流步骤应包括：检出代码 -> 设置 Node.js 和 pnpm -> 安装依赖 (pnpm install) -> 构建静态文件 (pnpm run build) -> 将 out 目录的内容部署到 gh-pages 分支 (可以使用 peaceiris/actions-gh-pages 等 Action)。

### 配置 GitHub 仓库:
在你的 GitHub 仓库设置中，找到 "Pages" 部分。
将部署源设置为 "Deploy from a branch"。
选择 gh-pages 作为源分支，根目录 / (root) 作为路径。

### 绑定自定义域名:
在 GitHub Pages 设置中，输入你的自定义域名并保存。GitHub 会检查 DNS 配置。
创建 CNAME 文件 (如果 GitHub 没自动创建): 在 website/public/ 目录下创建一个名为 CNAME 的文件（没有扩展名），里面只包含你的自定义域名 (例如 www.yourdomain.com)。这个文件需要随静态文件一起部署到 gh-pages 分支。

### 配置 DNS: 
在你的域名提供商处，配置 DNS 记录：
如果你使用 Apex 域名 (e.g., yourdomain.com)，创建 A 记录指向 GitHub Pages 的 IP 地址 (请查阅 GitHub Pages 最新文档获取这些 IP)。
如果你使用子域名 (e.g., www.yourdomain.com)，创建一个 CNAME 记录指向 你的用户名.github.io。
等待 DNS 记录生效（可能需要几小时）。
(推荐) 在 GitHub Pages 设置中强制 HTTPS。