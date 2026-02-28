# Steven Meyer - Portfolio

My personal portfolio website built with Next.js, featuring a blog, project showcase, and interactive 3D book recommendations.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: @tailwindcss/typography
- **3D Graphics**: React Three Fiber + Three.js
- **Icons**: Lucide React
- **Blog**: Markdown with gray-matter, remark, and Shiki for syntax highlighting
- **Analytics**: Vercel Analytics

## Features

- **Blog**: Markdown-based posts with syntax highlighting
- **Projects**: Project showcase with individual detail pages
- **Book Recommendations**: Interactive 3D bookshelf (desktop) and responsive grid (mobile)
- **Contact Form**: Web3Forms integration
- **SEO**: Open Graph, Twitter cards, sitemap, robots.txt, and JSON-LD structured data

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── data/            # Static data (projects, books, social links)
└── lib/             # Utilities (blog processing, fonts)
content/
└── blog/            # Markdown blog posts
```

## Deployment

Deployed on Vercel. Push to main branch to deploy automatically.
