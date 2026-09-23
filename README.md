# Tortoise product website

The marketing site for [Tortoise](https://github.com/superlapie/tortoise), a transparent, safety-first Windows driver inventory and update utility.

## Stack

- Next.js App Router with React and TypeScript
- pnpm for package management
- Tailwind CSS 4.3 with a CSS-first theme and project-specific art direction
- Vercel deployment configuration and GitHub Actions CI

## Local development

```sh
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

Before opening a pull request, run:

```sh
pnpm lint
pnpm typecheck
pnpm build
```

## Deployment

Import this GitHub repository into Vercel and set `main` as the production branch. Vercel's Git integration will create preview deployments for pull requests and deploy merges to `main`. The repo includes a `vercel.json` with the Next.js framework, pnpm frozen-lockfile install, and production build settings.

Vercel Hobby is restricted to personal, non-commercial use. Tortoise is a commercial product website, so deploy it on a Pro or Enterprise account.

## Artwork and UI preview

- `public/images/tortoise-hero.webp` is the optimized generated hero illustration.
- `assets/source/tortoise-hero.png` is its original PNG source.
- `assets/source/logo-concepts.png` preserves the generated logo exploration sheet.
- `public/tortoise-mark.svg` is the site mark redrawn from the selected concept.

The in-page product interface is an illustrative preview with synthetic example data. It is labeled as such and is not a screenshot or a live scan.
