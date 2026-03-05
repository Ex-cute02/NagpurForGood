# Nagpur For Good

Nagpur For Good is a curated NGO discovery platform for Nagpur, built with a premium dark "Noir Luxe" interface and source-first transparency.

## What this project includes

- NGO listing experience with search and category filters
- Detailed NGO profile pages with leadership, mission, and milestones
- Transparency links that point to primary/official sources
- Modern animated UI with glassmorphism styling

## Tech stack

- React 19 + Vite 7
- React Router DOM 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion
- Lucide React
- React Helmet Async

## Repository structure

- `app/` - Frontend application (Vite + React)
- `docs/assets/` - Screenshots and visual assets
- `ngo_data_raw.json` - Raw NGO source dataset

## Getting started

Run all app commands from the `app` directory.

```bash
cd app
npm install
npm run dev
```

Open the local URL shown by Vite (typically `http://localhost:5173` or next available port).

## Production build

```bash
cd app
npm run build
npm run preview
```

## Runtime requirement

Vite 7 requires Node.js `20.19+` (or `22.12+`). If you are on `20.17.0`, upgrade Node to remove runtime warnings.
