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