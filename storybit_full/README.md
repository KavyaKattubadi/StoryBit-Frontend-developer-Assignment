# StoryBit - Streaming Dashboard (Complete Submission)

This repository is a complete submission for the StoryBit Frontend Developer assignment.
It implements a simplified streaming dashboard using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, fetching data from TMDB.

## What's included
- Homepage with Hero Banner and 3 horizontal movie rows (Popular, Now Playing, Top Rated)
- Dynamic detail page `app/movie/[id]/page.tsx`
- Server-side fetch helpers in `lib/tmdb.ts` (uses `process.env.TMDB_API_KEY`)
- Components: Header (client), HeroBanner, MovieRow (client), MovieCard (client)
- TypeScript types in `types/movie.ts`
- `AI_Report.md`, `ASSIGNMENT_BRIEF.txt`, and `COMMITS.md` (suggested commit history)
- `.env.example` with required variables

## Local setup
1. Copy `.env.example` to `.env.local` and set your TMDB API key:
   ```
   cp .env.example .env.local
   # edit .env.local and add: TMDB_API_KEY=your_key_here
   ```

2. Install:
   ```
   npm install
   # or pnpm install
   ```

3. Run dev server:
   ```
   npm run dev
   ```

4. Open `http://localhost:3000`

## Deployment to Vercel
1. Push the project to GitHub.
2. Import into Vercel (https://vercel.com/new).
3. In Vercel project settings, add `TMDB_API_KEY` as an Environment Variable.
4. Trigger a production deploy.

## What you must still do before submission
- Add real API key to Vercel envs.
- Make Git commits with meaningful messages (see `COMMITS.md` for suggestions).
- Push to GitHub and include the repository link in `AI_Report.md`.
- Deploy to Vercel and add the Vercel URL to `AI_Report.md`.

