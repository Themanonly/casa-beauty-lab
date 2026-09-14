# Casa Beauty Lab

## Architecture

This project is a static marketing website built with React + Vite, designed for a premium beauty salon in Casablanca. The structure keeps business-editable content centralized in `src/content/business.ts` so an eventual content admin or Git-backed CMS can replace the data without rewriting the UI.

## Why this stack

- Strong SEO and performance for a content-heavy salon website
- Simple deployment on Netlify
- Familiar React component model with minimal complexity
- Easy future migration to a CMS or static content source

## Local development

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview
```

## Content editing

Update the business details and services in `src/content/business.ts`.

## Admin / CMS foundation

The current architecture supports a straightforward migration to a Git-backed CMS or admin interface because all business text is centralized in one typed data file rather than scattered across components.

## Media

Images currently use Unsplash source URLs as placeholders to keep the build realistic. Replace them with locally hosted assets in the final production handoff.

## Netlify

Recommended production settings:

- Build command: `npm run build`
- Publish directory: `dist`

## Unresolved config

- No verified Instagram media embed or booking backend was identified from public sources, so the site currently uses a WhatsApp booking CTA and direct social links.
- Exact business address and hours are kept conservative and should be confirmed before launch.
