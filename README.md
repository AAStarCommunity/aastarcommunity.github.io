# AAStar Community Website

Build Decentralized Infra for Community!

This website has been migrated from Next.js to a standard **Vite + React** tech stack and is deployed on **Cloudflare Pages**.

## Tech Stack

- **Core**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4.0
- **Deployment**: Cloudflare Pages (via GitHub Actions)

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/) installed.

### Local Development

Run the following command to start the development server:

```bash
./start.sh
# or
pnpm dev
```

The site will be available at `http://localhost:5177`.

### Local Preview

To build the static files and preview them locally:

```bash
./start.sh build
./start.sh preview
# or
pnpm build
pnpm preview
```

## Deployment

This project uses GitHub Actions for automated deployment.

### Automatic Deployment

Any push to the `main` or `static-2026` branch will trigger a GitHub Action that:
1. Builds the project (`pnpm build`).
2. Deploys the static `dist/` directory to Cloudflare Pages.

### Configuration

Ensure the following GitHub Secrets are configured in your repository:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## License

&copy; 2026 AAStar Community. All rights reserved.
