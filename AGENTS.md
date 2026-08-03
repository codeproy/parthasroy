# parthasroy — React + Vite SPA

## Commands

```sh
npm run dev       # Vite dev server (HMR)
npm run build     # Production build
npm run lint      # ESLint (all project files)
npm run preview   # Preview production build locally
npm run deploy    # Build + publish to GitHub Pages via gh-pages
```

No tests, no typecheck (plain JSX, no TypeScript).

## Architecture

- **Framework:** React 19, Vite 8, JSX (no TypeScript)
- **Routing:** React Router v7 SPA; Router `basename="/parthasroy"` matches Vite `base` config
- **Pages:** `/` (Home), `/about`, `/blog/:id`
- **Data:** Blog posts are static JSON files under `src/data/blogs/`
- **Deploy:** GitHub Pages at `https://codeproy.github.io/parthasroy/` via `gh-pages` package

## Conventions

- Use `react-markdown` for rendering markdown content (blog detail pages).
- Blog JSON fixtures live in `src/data/blogs/` — add new files there for new posts.
