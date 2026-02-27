# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint check
```

**Known issue:** If `npm run dev` or `build` fails with `MODULE_NOT_FOUND` for next, fix the broken symlink:
```bash
rm node_modules/.bin/next && ln -s ../next/dist/bin/next node_modules/.bin/next
```

## Architecture

Hebrew RTL hosting dashboard built from Figma designs. Stack: **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4**.

### RTL / Locale
- Root layout (`src/app/layout.tsx`) sets `<html lang="he" dir="rtl">` — all layout decisions flow from this.
- Font stack: custom **Polin** (woff2 files in `/public/fonts/`) with **Noto Sans Hebrew** (Google Fonts) as fallback.

### Tailwind v4
- No `tailwind.config.js`. All custom tokens are declared via `@theme { }` in `src/app/globals.css`.
- Custom tokens: `--color-primary` (#006eff), `--color-navy` (#001c51), `--color-content-bg` (#eff6ff), `--color-badge-bg` (#e1f0ff), `--font-polin`, `--font-hebrew`.
- Use `font-polin` (Tailwind utility) for Polin font; `font-extrabold` triggers the 800-weight variant.
- Two global CSS classes: `.nav-active` (glass sidebar highlight), `.btn-primary` (gradient button).

### Dashboard shell (`src/app/dashboard/layout.tsx`)
The shell is a full-viewport flex row: navy `<aside>` (sidebar, 280px, RTL-right) + light-blue `<main>` (flex-1, rounded card on md+). The layout is a Client Component that owns `sidebarOpen` state and passes it down to `<Sidebar>` and `<Header>`.

### Component structure
```
src/
  app/
    layout.tsx                  # Root layout — RTL, fonts
    page.tsx                    # Redirects → /login
    login/page.tsx
    dashboard/
      layout.tsx                # Shell: Sidebar + Header + content slot
      page.tsx                  # Main dashboard (hosting card, stats)
      permissions/page.tsx
      partners/page.tsx
      payments/page.tsx
  components/layout/
    Sidebar.tsx                 # Nav links + QuickActionsMenu toggle
    Header.tsx                  # Avatar, notifications, info-center + dropdown menus
    ProfileMenu.tsx
    NotificationsMenu.tsx
    ManageMenu.tsx
    QuickActionsMenu.tsx
  lib/
    assets.ts                   # All Figma image URLs (expire every 7 days)
```

### Figma assets (`src/lib/assets.ts`)
All images are loaded directly from Figma CDN URLs. They expire after ~7 days and must be refreshed via the Figma MCP (`nlH8fv7PUpD3nnAgLbQDF3`). Never inline asset URLs in components — import from `assets.ts`.

### Pixel-perfect design tokens
- Button gradient: `linear-gradient(99.7deg, #006eff 0%, #004299 100%)` — use `.btn-primary` class.
- Button radius: `rounded-[7px]`; cards: `rounded-[27px]` (dashboard) / `rounded-[35px]` (payments, permissions).
- Header: `h-[79px] px-[54px] gap-[50px]`; avatar `size-[59px]`.
- Nav icon containers: `size-[37px] rounded-[7px] p-[6px]`.
- Stats labels: `font-polin text-[18px]`.
