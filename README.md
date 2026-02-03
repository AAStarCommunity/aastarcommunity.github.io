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

This project is deployed on **Cloudflare Pages** using its native GitHub integration.

### Cloudflare Pages Settings

To ensure successful builds, configure your Cloudflare Pages project with these settings:

- **Framework Preset**: `Vite`
- **Build command**: `pnpm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`
- **Node.js Version**: `20` or higher

### Automatic Deployment

Any push to the `main` branch will automatically trigger a build and deployment on Cloudflare.

## License

&copy; 2026 AAStar Community. All rights reserved.
