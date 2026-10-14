# Working in this repo (Base44 sandbox notes)

Replit-exported Express + Vite app. `server/index.ts` serves the API **and** the
Vite dev server from one process on port **5000** (hardcoded), so the sandbox
compose maps host `3000` -> container `5000`.

## Run it

```bash
docker compose -f docker-compose.base44.yml up -d --build
curl -s http://localhost:3000/ | head
```

`npm run dev` runs `tsx server/index.ts` with `NODE_ENV=development`, which is
what switches `app.get("env")` to the Vite middleware path instead of serving
`dist/`. There is no build step for development.

## The Neon driver needs a WebSocket proxy

`server/db.ts` uses `@neondatabase/serverless`, which reaches Postgres over a
WebSocket tunnel (`wss://<host>/v2`), **not** plain TCP. A local `postgres:16`
container cannot answer that. The compose file therefore runs Neon's own
`ghcr.io/neondatabase/wsproxy` (env `APPEND_PORT=db:5432`) next to the database.

`server/db.ts` retargets the driver only when the sandbox flag is on:

```ts
if (process.env.BASE44_PREVIEW_MODE === "1" && process.env.NEON_WS_PROXY) {
  neonConfig.wsProxy = () => `${wsProxy}/v1`;   // path must be /v1, not the default /v2
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}
```

- Enabled (`BASE44_PREVIEW_MODE=1`): driver goes through `wsproxy` to local Postgres.
- Unset or any other value: original behaviour — direct connection to the
  `DATABASE_URL` host (a real Neon endpoint) over secure WebSockets.

Without `NEON_WS_PROXY`/`wsproxy`, `POST /api/contact` would fail with a generic
500 because the WebSocket handshake to `db:5432` 404s.

## Database

- Tables come from `shared/schema.ts`; apply them with `npm run db:push`
  (`drizzle-kit push`). The one-shot `db-migrate` compose service does this on
  startup and must finish before `app` starts.
- `drizzle-kit` uses a normal TCP `pg` connection, so it talks to `db:5432`
  directly and does not need the proxy.
- Local infra credentials (`lhoman`/`lhoman`, db `lhoman`) are generated here and
  live inline in the compose file; nothing external is required to boot.

## Verifying the app works

- Frontend renders: `curl -s http://localhost:3000/ | grep -q 'src="/src/main.tsx"'`
- API + DB round trip: `curl -s http://localhost:3000/api/contact` (returns `[]`
  on a fresh database) and `POST /api/contact` with
  `{"firstName","lastName","email","message"}` — a successful write returns
  `{"success":true}`. Submissions are only visible through that GET endpoint.
- Compose healthchecks cover all of it: `app` probes both `/` and `/api/contact`
  and reports which one failed.
