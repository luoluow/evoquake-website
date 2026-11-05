# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The corporate marketing website for **EvoQuake CO.** (founded by Michael Luo). Positioning (since 2026-08): "Frontier AI for everyone" — the company's single product is **Kuyun**, a personal AI assistant at https://kuyun.evoquake.com/ (private beta; source in `~/code/kuyun-agent`). The site markets Kuyun and points to it; it does not host the app. Multi-page static site with a dark, technical aesthetic.

## Stack

- **Astro 5** (static output) — pages are `.astro` files, zero client JS by default.
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no `tailwind.config.js`; configured in CSS).
- TypeScript in strict mode (`astro/tsconfigs/strict`).

## Commands

- `npm install` — install deps.
- `npm run dev` — dev server at http://localhost:4321 (HMR).
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally.

There is no test suite or linter configured. `npm run build` is the de-facto check — it type-checks content collections and fails on bad Tailwind classes, so run it before considering a change done.

## Architecture & conventions

- **Content lives in `src/consts.ts`** — site name, email (`luo@evoquake.com`), tagline, the `KUYUN` object (product name/URLs/beta status), and the `NAV` array. Change nav links and global copy here, not in individual components.
- **`src/layouts/Layout.astro`** is the single page shell: `<head>` meta/OG tags, fonts, `Header`, `Footer`, and a `<slot>`. Every page wraps its content in `<Layout title=... description=...>`.
- **`src/components/Section.astro`** is the standard content block (eyebrow + title + lead + slot). Reuse it for page sections to keep spacing/typography consistent.
- **Design tokens are CSS variables** defined in `src/styles/global.css` under `@theme` (colors like `--color-bg`, `--color-accent`, fonts). Reusable component classes (`.btn-primary`, `.btn-ghost`, `.card`, `.eyebrow`, `.container-x`) are defined in the same file under `@layer components`. Re-theme the whole site by editing the tokens.
  - **Tailwind v4 gotcha:** CSS-variable arbitrary values use parens — `bg-(--color-accent)`, not `bg-[--color-accent]` (the bracket form compiles to an invalid literal and is silently ignored). Also `@apply` cannot reference another custom class. To share base styles, list selectors together (see how `.btn-primary`/`.btn-ghost` group with `.btn`) rather than `@apply btn`.
- **Blog uses Astro content collections.** Schema is in `src/content.config.ts`; posts are Markdown in `src/content/blog/*.md` with frontmatter (`title`, `description`, `pubDate`, `author`, optional `draft`). `src/pages/blog/index.astro` lists them; `src/pages/blog/[...slug].astro` renders one. To add a post, drop a new `.md` file in — no code changes needed. The post URL slug is the filename.
- **Contact is mailto-only** — no backend/form service. The contact page and CTAs build `mailto:` links (with prefilled subjects) from `SITE.email`. Beta sign-up is NOT handled here — all "Open Kuyun"/"Go to Kuyun" CTAs link to `KUYUN.url`, where users join the waitlist.

## Assets

- `public/` is served at the site root. Contains `favicon.svg` and `evoquake_logo.svg` (used in `Header` + `Footer`, so it shows on every page).
- **Logo:** `public/evoquake_logo.svg` is a **dark-theme variant** of the brand logo — "Quake" and tagline are recolored light for legibility on the dark background. The canonical light-background source lives in `Resources/` (`evoquake_logo.svg`, plus `evoquake_logo_mono.svg` and `evoquake_icon.svg`). If the brand logo changes, update both the source and this published variant.
- `Resources/MichaelLuoResume.pdf` is the founder's source résumé — kept as reference material only (the `/about` bio was written from it). It is **not** published or linked from the site. `Resources/` is gitignored.
- Ignore any `*.pdf:Zone.Identifier` files — Windows/WSL download metadata, not content.

## Deployment

Hosted on **GitHub Pages** (static), custom domain **evoquake.com**. Lives in its
own dedicated public GitHub repo — separate from the `pstar` monorepo (which is on
Bitbucket and contains private files). Pushing to `main` triggers
`.github/workflows/deploy.yml` (build via `withastro/action` → `actions/deploy-pages`).
`public/CNAME` pins the apex domain; `astro.config.mjs` sets `site` and intentionally
has no `base`. Full runbook + GoDaddy DNS records in `DEPLOY.md`.

## Context

This subdirectory lives inside a larger monorepo (git root `/home/zhluo/code/pstar`). Scope changes to this `projects/Evoquake` directory.
