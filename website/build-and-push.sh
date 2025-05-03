#!/bin/bash

# 确保脚本在出错时停止
set -e

echo "=== 开始本地构建和推送流程 ==="

# 1. 确保在正确的目录
if [ ! -f "package.json" ]; then
  echo "错误：请在网站根目录下运行此脚本"
  exit 1
fi

# 2. 构建项目
echo "=== 正在构建项目 ==="
pnpm build

# 3. 确保out目录存在
if [ ! -d "out" ]; then
  echo "错误：构建失败，没有生成out目录。请确保next.config.ts中设置了 output: 'export'"
  exit 1
fi

echo "=== 构建成功! 生成的静态文件在 ./out 目录 ==="

# 检查父目录中的工作流文件是否有更改
if [ -f "../.github/workflows/nextjs.yml" ]; then
  GIT_STATUS=$(cd .. && git status --porcelain .github/workflows/nextjs.yml)
  if [ ! -z "$GIT_STATUS" ]; then
    echo ""
    echo "警告: 检测到../.github/workflows/nextjs.yml有更改但未提交"
    echo "请确保在推送后，使用以下命令提交工作流文件更改:"
    echo "  cd .. && git add .github/workflows/nextjs.yml && git commit -m \"更新工作流文件\" && git push"
    echo ""
  fi
fi

# 4. 添加并提交变更
echo "=== 添加和提交静态文件 ==="
git add out/
git add .
git status

echo ""
echo "请检查上面的文件变更，并确认是否继续提交"
read -p "是否继续? (y/n) " -n 1 -r
echo 
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "操作已取消"
  exit 1
fi

# 提交信息
read -p "请输入提交信息: " commit_message
if [ -z "$commit_message" ]; then
  commit_message="更新网站静态文件"
fi

git commit -m "$commit_message"

# 5. 推送到远程仓库
echo "=== 推送到远程仓库 ==="
git push

echo "=== 完成! ==="
echo "网站将在GitHub Actions完成后自动部署" 