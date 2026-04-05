# Steven Meyer Portfolio

A Next.js portfolio built as a small product surface rather than a single landing page. The site combines case studies, long-form writing, a reading page with a progressive 3D enhancement, and a server-side contact workflow.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- Framer Motion
- React Three Fiber / Three.js
- Markdown content via gray-matter, remark, and Shiki
- Vercel Analytics

## Key Features

- Editorial homepage and shared design system
- Structured project case studies with static generation
- Local-first blog with reading time, table of contents, RSS, sitemap, and syntax highlighting
- Reading page that keeps the content server-rendered while enhancing desktop with a 3D bookshelf
- Server-side contact submission via Web3Forms

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact Form Setup

Copy `.env.example` to `.env.local` and set:

```bash
WEB3FORMS_ACCESS_KEY=your-key-here
```

Without that key, the contact page still renders but submissions will return a configuration message.

## Project Structure

```text
src/
  app/          App Router routes, metadata routes, feed, and server actions
  components/   Shared UI, motion wrappers, contact form, and reading showcase
  data/         Site config plus project and reading data
  lib/          Blog/content utilities and fonts
content/blog/   Markdown blog posts
```
