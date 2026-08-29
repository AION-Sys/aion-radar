# AION Radar — signup

Friday operator letter. One field. One list. Not a CRM.

Landing page posts `{ email }` to `/api/subscribe`, which calls the Supabase RPC `radar_subscribe(p_email, p_source)` with `p_source='landing'`. Duplicate emails are success. This app does not write `revenue_leads` or any other CRM table.

## Local run

```bash
cd radar-signup
cp .env.example .env.local
# fill the two values in .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`GET /api/health` returns `{ "ok": true }`.

## Env vars

Copy `.env.example`. Names only live in that file; do not commit keys.

| Name | Used by |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | `/api/subscribe` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `/api/subscribe` |

If either is missing, subscribe returns **503** with a clear error. The anon key is read from `process.env` at request time and is not hardcoded.

## Production (Vercel + Origin)

A full Vercel production deploy from Origin needs an Origin namespace and Vercel connected to Origin. Connecting GitHub solely to make Vercel work is not the path for this repo. Do not add a GitHub remote here.

## Stack

Next.js App Router (TypeScript), `@supabase/supabase-js`, no tracking pixels, no cookie banner, no auth wall.
