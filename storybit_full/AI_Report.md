# AI Usage Report (StoryBit Streaming Dashboard)

**Candidate:** Kavya Kattubadi  
**Date:** 14-11-2025

## Tools used
- **ChatGPT (OpenAI)** — helped scaffold project files, generate TypeScript interfaces, React components, and helper functions.
- (Optionally) GitHub Copilot — for small inline completions during styling.

## What AI helped create
- Project structure: `app/`, `components/`, `lib/`, `types/`.
- TypeScript `Movie` interface and types.
- `lib/tmdb.ts` server-side fetch helpers with error handling and revalidation hints.
- UI components: `Header.tsx`, `HeroBanner.tsx`, `MovieRow.tsx`, `MovieCard.tsx`.
- Pages: `app/page.tsx` (homepage) and `app/movie/[id]/page.tsx` (detail).
- `README.md`, `.env.example`, and this `AI_Report.md`.

## Prompts & prompt-engineering notes
- Prompts specified: Next.js 14 App Router, TypeScript, Tailwind, TMDB API, server components for data fetching, and requirement for dynamic routes.
- Iterated prompts to improve: image handling with Next `<Image/>`, ensuring server-only use of `process.env.TMDB_API_KEY`, and responsive layout.

## Manual changes / candidate responsibilities
- Candidate: Kavya Kattubadi  
  Date: 14-11-2025
- GitHub repo URL: `https://github.com/KavyaKattubadi/StoryBit-Frontend-developer-Assignment.git`


## How to verify
1. Run locally with `npm run dev` and check homepage loads movie rows.
2. Click a poster to open a dynamic movie detail page.
3. Check network tab for successful server-side fetches (they run on server).

