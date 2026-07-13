# Portfolio

My personal portfolio site. Built with Next.js and deployed on Vercel.

**Live:** https://dawoodkhan.vercel.app

## Stack

- Next.js 16 (App Router) with React 19
- TypeScript
- Tailwind CSS v4
- simple-icons for the technology logos in the skills section

## Structure

```
src/
  app/
    layout.tsx          root layout, fonts, metadata, shared background
    page.tsx            homepage, composes the sections
    globals.css         theme tokens and animations
    icon.svg            favicon
    projects/[slug]/    one prerendered page per project
  components/
    Navbar.tsx          floating nav with scroll spy
    Starfield.tsx       background stars
    CursorGlow.tsx      glow that follows the cursor
    Reveal.tsx          fade-in-on-scroll wrapper
    ProjectGallery.tsx  screenshot carousel
    sections/           hero, about, projects, skills, experience, education, contact
  lib/
    data.ts             all site content
```

Content lives in `src/lib/data.ts`, so text and projects can be updated without
touching the components.

## Notes

- Every page is statically prerendered at build time, including the project pages.
- The starfield uses a seeded random number generator so the server and client
  produce identical markup and React doesn't report a hydration mismatch.
- The cursor glow is skipped on touch devices.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build    # production build
npm run lint     # eslint
```
