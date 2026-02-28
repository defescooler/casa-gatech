# casa-gt

## Run locally

### Prereqs
- Node.js 22+
- `pnpm` (recommended)

### Install
```bash
pnpm install
```

### Dev server
```bash
pnpm dev
```
Then open `http://localhost:3000`.

### Environment variables (optional)
The newsletter API route (`app/api/newsletter/route.ts`) expects:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_KEY`

Copy `.env.example` to `.env.local` and fill in values if you want the newsletter signup to work.
