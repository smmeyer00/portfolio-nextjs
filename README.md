# Steven Meyer Portfolio

A quiet, single-page personal index built with Next.js. The site centers selected engineering work, keeps personal context compact, and uses a warm monochrome editorial system with minimal client-side JavaScript.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- Vercel Analytics

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run check
npm run build
```

## Structure

```text
src/
  app/          Homepage, app shell, metadata, and fallback states
  components/   Textual header and compact footer
  data/         Public site content and selected-work entries
  lib/          Self-hosted font configuration
public/         Static image and favicon assets
```

Legacy routes such as `/about`, `/reading`, `/contact`, and `/notes` redirect to the homepage while old links age out.
