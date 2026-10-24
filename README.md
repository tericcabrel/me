# Personal Website

My personal website built with Next.js, TypeScript, and Tailwind CSS.

![demo](https://raw.githubusercontent.com/tericcabrel/me/main/public/og.png)

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme support
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 📊 Google Analytics integration
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel (recommended)
- **Linting:** Biome


## Google Analytics Setup

This project includes Google Analytics 4 (GA4) integration for tracking page views and user interactions.

### Setup Instructions

1. **Get your Google Analytics Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add your Measurement ID to environment variables:**
   Create a `.env.local` file in the root directory and add:

   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

   Replace `G-XXXXXXXXXX` with your actual Measurement ID.

3. **Verify the setup:**
   - Start your development server: `yarn dev`
   - Open your website and check the browser's developer tools
   - Look for Google Analytics requests in the Network tab
   - Check the Console for any GA-related errors

### How it works

- The `GoogleAnalytics` component automatically loads the GA4 script
- Page views are tracked automatically when users navigate between pages
- The tracking respects user privacy and only works when the `NEXT_PUBLIC_GA_ID` is set
- **Development mode protection**: Analytics are disabled in development (`NODE_ENV !== 'production`) to prevent test data from polluting your analytics

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Lint the project
yarn lint
```

## Environment Variables

Create a `.env.local` fil from `.env.example` and update the variables with your values

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Website URL (for Open Graph)
NEXT_PUBLIC_WEB_URL=https://yourdomain.com
```

## Project Structure

```
personal-website/
├── src/
│   ├── app/                    # Next.js App Router pages and layouts
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page component
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── icons/              # Custom icon components
│   │   │   └── stack/          # Technology stack icons
│   │   ├── about.tsx           # About section component
│   │   ├── articles.tsx        # Articles/blog posts component
│   │   ├── footer.tsx          # Footer component
│   │   ├── header.tsx          # Header component
│   │   ├── hero.tsx            # Hero section component
│   │   ├── projects.tsx        # Projects showcase component
│   │   ├── tech-stack.tsx      # Technology stack component
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries and configurations
│   ├── utils/                  # Helper functions and utilities
│   ├── styles/                 # Additional stylesheets
│   └── types.ts                # TypeScript type definitions
├── public/                     # Static assets
├── package.json                # Project dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── components.json             # shadcn/ui configuration
├── biome.jsonc                 # Biome linting and formatting config
└── README.md                   # Project documentation
```

## License

MIT
