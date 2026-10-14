import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// The Neon driver talks to Postgres over a WebSocket tunnel (wss://<db-host>/v2)
// that only Neon's cloud endpoint serves. When BASE44_PREVIEW_MODE is exactly
// "1" and NEON_WS_PROXY is set, point it at the plain-WebSocket proxy sitting in
// front of the local compose Postgres instead (see docker-compose.base44.yml).
// Any other value leaves the normal Neon cloud behaviour untouched.
if (process.env.BASE44_PREVIEW_MODE === "1" && process.env.NEON_WS_PROXY) {
  const wsProxy = process.env.NEON_WS_PROXY;
  neonConfig.wsProxy = () => `${wsProxy}/v1`;
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}

// Check for DATABASE_URL and provide helpful error message
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn("⚠️  DATABASE_URL is not set. Database functionality will be disabled.");
  console.warn("To fix this:");
  console.warn("1. Go to the 'Secrets' tab in your Replit workspace");
  console.warn("2. Add a secret named 'DATABASE_URL' with your PostgreSQL connection string");
  console.warn("3. Or provision a database from the Replit database tab");
  console.warn("4. Restart the application after setting the DATABASE_URL");
}

// Only initialize database connection if URL is available
export const pool = databaseUrl ? new Pool({ connectionString: databaseUrl }) : null;
export const db = pool ? drizzle({ client: pool, schema }) : null;