# Vercel Deployment — Gap Analysis

**Project:** jerrywilliams.au  
**Date:** 2026-02-16  
**Framework:** Next.js 15.5.12 (App Router)  
**Target:** Vercel (production hosting)

---

## Executive Summary

The repo was originally scaffolded as a full SaaS platform and still carries significant SaaS infrastructure that will **bloat the deployment**, **break the build**, and create **unnecessary Vercel Function invocations**. The personal branding site lives only in the root `page.tsx` and `src/components/branding/`. Everything else is legacy cargo.

---

## Gap Analysis

### 🔴 Critical — Will Break or Block Deployment

| #   | Issue                                           | Detail                                                                                                                                                                             | Fix                                                                                     |
| --- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 1   | **`output: 'standalone'`** in `next.config.mjs` | This generates a standalone Node.js server for Docker. Vercel ignores this and it can cause unexpected build behaviour.                                                            | Remove `output: 'standalone'`                                                           |
| 2   | **SaaS API routes** (`src/app/api/`)            | Contains `cms/` and `v1/` API handlers that likely call backend services (`localhost:7071`). These will deploy as **Vercel Serverless Functions** and fail at runtime.             | Delete `src/app/api/`                                                                   |
| 3   | **Missing hero images on first load**           | `hero-dark-v6-crystalline.png` (672KB) and `hero-light-v6-crystalline.png` (474KB) are **not optimised** via `<Image>` — loading 36MB of PNGs total in `/public/images/branding/`. | Use `next/image` with `priority` for hero images; convert unused PNGs to WebP or remove |
| 4   | **macOS `com.apple.provenance`** on directory   | Blocks `next build` from writing `next-env.d.ts`. Build will fail on Vercel if the attribute persists in git.                                                                      | Run `sudo xattr -cr .` locally before committing                                        |

---

### 🟡 High — SaaS Cargo That Should Be Removed

| #   | Issue                 | Files/Dirs                                                                                                                                                                                                                | Impact                                                                                                                      |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 5   | **SaaS app routes**   | `src/app/admin/` (15), `src/app/auth/` (3), `src/app/dashboard/` (46), `src/app/workspace/` (7), `src/app/account/` (5)                                                                                                   | 76 files across 5 route groups. Each will compile to Vercel Functions. Adds build time, function count, and attack surface. |
| 6   | **SaaS components**   | `src/components/admin/`, `agents/`, `ai-stacks/`, `billing/`, `browser-agent/`, `chat/`, `extensions/`, `i-flows/`, `i-spaces/`, `mcp/`, `memory/`, `navigation/`, `projects/`, `prompts/`, `shell/`, `sota/`, `tenants/` | 17 component directories (~60 files) unused by the branding site                                                            |
| 7   | **SaaS hooks**        | `src/hooks/useAdmin.ts`, `useAgents.ts`, `useBilling.ts`, `useBrowserAgent.ts`, etc.                                                                                                                                      | 19 of 21 hooks are SaaS-only (all except `useKeyboardShortcuts.ts` and `useWaitlist.ts`)                                    |
| 8   | **SaaS library code** | `src/lib/api/` (15), `api-client.ts`, `api.ts`, `hooks.ts`, `realtime.ts`, `schemas.ts`, `query-keys.ts`, `iFlowsTypes.ts`                                                                                                | Full API client layer, Socket.io realtime, Zod schemas — none used by branding page                                         |
| 9   | **SaaS stores**       | `src/stores/` (3 files)                                                                                                                                                                                                   | Zustand stores for SaaS features                                                                                            |
| 10  | **SaaS data**         | `src/data/` (1 file), `src/contexts/` (2 files), `src/providers/FocusProvider.tsx`                                                                                                                                        | May or may not be needed — needs review                                                                                     |

---

### 🟡 Medium — Unused Dependencies

These are installed but **not imported** by any branding code. They inflate `npm install` time and `node_modules` on Vercel:

| Package                                    | Used By                    | Recommendation |
| ------------------------------------------ | -------------------------- | -------------- |
| `@clerk/nextjs`                            | Nothing (0 imports)        | **Remove**     |
| `reactflow` + `@reactflow/node-toolbar`    | `i-flows` components only  | **Remove**     |
| `socket.io-client`                         | `src/lib/realtime.ts` only | **Remove**     |
| `@dnd-kit/core` + `sortable` + `utilities` | Nothing (0 imports)        | **Remove**     |
| `@tanstack/react-query`                    | SaaS hooks only            | **Remove**     |
| `zod`                                      | `src/lib/schemas.ts` only  | **Remove**     |
| `zustand`                                  | SaaS stores only           | **Remove**     |
| `vitest` (devDep)                          | No test files remain       | **Remove**     |

> [!TIP]
> After SaaS cleanup, the only dependencies actually needed are:  
> `next`, `react`, `react-dom`, `framer-motion`, `lucide-react`, `clsx`, `class-variance-authority`, `tailwind-merge`, `tailwindcss-animate`, `@radix-ui/react-dialog`, `@radix-ui/react-slot`

---

### 🟡 Medium — Config Cleanup

| #   | Issue                                                                   | Fix                                                                 |
| --- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 11  | **Dev-only rewrites** in `next.config.mjs` proxying to `localhost:7071` | Remove the entire `rewrites()` function                             |
| 12  | **Legacy redirects** (`/dashboard/admin` → `/admin`, etc.)              | Remove the entire `redirects()` function — these routes won't exist |
| 13  | **Package name** is `@saas/web`                                         | Rename to `jerrywilliams-au` or `web.au`                            |
| 14  | **No `vercel.json`**                                                    | Optional but recommended — set framework, region                    |
| 15  | **No `.env.example`**                                                   | Create one listing required env vars (if any)                       |

---

### 🟢 Low — Image Optimisation

78 PNG files totalling **36MB** in `public/images/branding/`. Many are unused duplicates (e.g., `_rounded` variants, multiple hero versions):

| Category            | Count | Actively Used                     | Unused                                        |
| ------------------- | ----- | --------------------------------- | --------------------------------------------- |
| Hero variants       | 8     | 2 (`v6-crystalline` light + dark) | 6                                             |
| Pillar images       | 6     | 3 (`pillar_*.png`)                | 3 (`_rounded`, hyphenated variants)           |
| Portrait images     | 8     | 5                                 | 3 (`_rounded` variants)                       |
| Section screenshots | ~8    | 0 (appear to be design reference) | ~8                                            |
| Icons               | ~25   | ~19                               | ~6 (large `icon-*.png` vs small `icon_*.png`) |
| Other               | ~23   | ~5                                | ~18                                           |

> [!IMPORTANT]
> **Estimated savings:** Removing unused images and converting to WebP could reduce `public/` from **36MB → ~4MB**, substantially improving Vercel build time and bandwidth.

---

### 🟢 Low — Nice-to-Have for Vercel

| #   | Item                                                 | Benefit                                       |
| --- | ---------------------------------------------------- | --------------------------------------------- |
| 16  | Add `vercel.json` with `{ "framework": "nextjs" }`   | Explicit framework detection                  |
| 17  | Add Vercel Analytics (`@vercel/analytics`)           | Free page-view analytics                      |
| 18  | Add Vercel Speed Insights (`@vercel/speed-insights`) | Core Web Vitals monitoring                    |
| 19  | Set up `next-sitemap` for SEO                        | Auto-generates `sitemap.xml` and `robots.txt` |
| 20  | Add OG image generation via `next/og`                | Social media preview cards                    |

---

## Recommended Action Plan

### Phase 1 — Build-Breaking Fixes (do first)

1. Remove `output: 'standalone'` from `next.config.mjs`
2. Remove rewrites and redirects from `next.config.mjs`
3. Fix macOS xattr permissions (`sudo xattr -cr .`)

### Phase 2 — SaaS Cargo Removal

4. Delete: `src/app/admin/`, `src/app/auth/`, `src/app/dashboard/`, `src/app/workspace/`, `src/app/account/`, `src/app/api/`
5. Delete: all SaaS component, hook, lib, store, and context directories
6. Remove unused dependencies from `package.json`
7. Rename package from `@saas/web`

### Phase 3 — Image Optimisation

8. Remove unused image variants from `public/images/branding/`
9. Convert remaining PNGs to WebP

### Phase 4 — Vercel Enhancements

10. Add `vercel.json`, OG images, analytics, sitemap

---

## Current Vercel Readiness Score

| Area                      | Status                             | Score    |
| ------------------------- | ---------------------------------- | -------- |
| Build will succeed        | ❌ Blocked by `standalone` + xattr | 2/10     |
| Clean repo (no cargo)     | ❌ ~150 SaaS files still present   | 2/10     |
| Dependencies optimised    | ❌ 8+ unused packages              | 3/10     |
| Image assets optimised    | ⚠️ 36MB of PNGs, many unused       | 3/10     |
| Config (.gitignore, etc.) | ✅ Properly configured             | 8/10     |
| SEO & analytics           | ⚠️ Not set up                      | 4/10     |
| **Overall**               | **Needs work before deploy**       | **3/10** |
