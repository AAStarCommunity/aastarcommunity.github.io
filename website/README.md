This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is configured to use local builds for GitHub Pages deployment, which makes the deployment process faster.

### Build and Deploy Process

1. Make your changes to the website
2. Run the build-and-push script to build locally and push to GitHub:

```bash
# Make the script executable (first time only)
chmod +x build-and-push.sh

# Run the script
./build-and-push.sh
```

3. The script will:
   - Build the Next.js site locally
   - Add the generated `out` directory to git
   - Check for changes in GitHub Actions workflow files
   - Commit and push the changes
   - GitHub Actions will then automatically deploy the pre-built files to GitHub Pages

4. **Important**: If you've modified the GitHub Actions workflow files, you need to commit those separately:

```bash
# From the project root, not the website subdirectory
cd ..
git add .github/workflows/nextjs.yml
git commit -m "Update GitHub workflow file"
git push
```

### Manual Process

If you prefer to do it manually:

```bash
# Build the site
pnpm build

# Add the generated files
git add out/
git add .

# Commit
git commit -m "Update website"

# Push to GitHub
git push

# If you've modified GitHub Actions workflow files
cd ..
git add .github/workflows/
git commit -m "Update GitHub workflow files"
git push
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
