
## Speed Scanr

Speed Scanr is an API-driven app that can analyze website performance data and show recommendations on how to improve it. 

Performance is a huge concern when building websites, and the gold-standard of speed monitoring tools is [Google's PageSpeed API]([https://link](https://pagespeed.web.dev/)). Speed Scanr builds on top of the PageSpeed API by ranking perfomance audits in order of priority and by providing tips on how to improve each audit.

## Project Status

Currently, Speed Scanr is still **in development**. 

## Code Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Primary Language**: [TypeScript](https://www.typescriptlang.org/)
- **Forms**: [Formik](https://formik.org/docs/overview)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `layouts/*` - collection of container elements for pages, inlcuding things like `PageSection` and `PageContainer`
- `lib/*` - library folder with functions to fetch data from API endpoints, format data, store hooks, et cetera
- `components/*` - houses all the reusable, composable elements that I use to build up static pages 
- `pages/*` - static pages like home, about, FAQ, et cetera
- `types/*` - holds helper-files that have globally-exported type definitions
- `/pages/api*` - folder with API routes; Speed Scanr uses dynamic routes (i.e. `/api/[url]`) to keep things organized
- `public/*` - static assets including fonts and images
- `styles/*` - stores the global CSS file that serves as an entry point for TailwindCSS.


