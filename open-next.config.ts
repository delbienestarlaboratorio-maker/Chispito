// open-next.config.ts — Configuración para Cloudflare Pages
// Uses KV namespace for incremental cache (prerendered pages)
// Without this, telesecundaria and other large pages return 404 (NoFallbackError)

import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import kvTagCache from "@opennextjs/cloudflare/overrides/tag-cache/kv-next-tag-cache";

export default defineCloudflareConfig({
    incrementalCache: kvIncrementalCache,
    tagCache: kvTagCache,
});
