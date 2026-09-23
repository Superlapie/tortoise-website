# Tortoise product website

The product website for [Tortoise](https://github.com/Superlapie/Tortoise), a transparent, safety-first Windows driver inventory and update utility.

## Stack

- Next.js App Router with React and TypeScript
- pnpm for package management
- Tailwind CSS 4.3 with a CSS-first theme and project-specific art direction
- Static HTML export for Cloudflare Pages
- GitHub Actions CI

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

`pnpm build` creates the static site in `out/`.

## Cloudflare Pages deployment

Connect this repository through **Workers & Pages → Create application → Pages → Connect to Git**. Choose `main` as the production branch and use:

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Build output directory | `out` |
| `NODE_VERSION` | `22.23.2` |
| `PNPM_VERSION` | `11.22.0` |
| `NEXT_PUBLIC_SITE_URL` | Optional custom production URL, such as `https://tortoise.example.com` |

Cloudflare Pages Git integration deploys production changes from `main` and creates preview deployments for other branches and pull requests. Cloudflare's `CF_PAGES_URL` supplies the deployment hostname for metadata. Set `NEXT_PUBLIC_SITE_URL` only when using a custom domain.

## Artwork and UI preview

- `src/components/product-preview.tsx` renders a static, interactive preview of the Windows app. Its radio controls and screen states work without client-side JavaScript; all data is clearly labeled as illustrative.
- `assets/source/tortoise-hero.png` and `assets/source/tortoise-hero.webp` preserve the generated mascot artwork for future use. The landing page does not load it.
- `assets/source/logo-concepts.png` preserves the generated logo exploration sheet.
- `public/tortoise-mark.svg` is the site mark redrawn from the selected concept.

The app interface is an illustrative preview, not a product screenshot or a live scan.
