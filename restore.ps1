# Manually copy OpenNext files to assets folder for Wrangler Pages
Remove-Item -Path ".open-next/assets/_worker.js" -ErrorAction SilentlyContinue
Copy-Item -Path ".open-next/worker.js" -Destination ".open-next/assets/_worker.js" -Force
Copy-Item -Path ".open-next/cloudflare" -Destination ".open-next/assets/cloudflare" -Recurse -Force
Copy-Item -Path ".open-next/middleware" -Destination ".open-next/assets/middleware" -Recurse -Force
Copy-Item -Path ".open-next/server-functions" -Destination ".open-next/assets/server-functions" -Recurse -Force
Copy-Item -Path ".open-next/.build" -Destination ".open-next/assets/.build" -Recurse -Force
if (Test-Path ".open-next/cache") { Copy-Item -Path ".open-next/cache" -Destination ".open-next/assets/cache" -Recurse -Force }
Get-ChildItem -Path "public" | Copy-Item -Destination ".open-next/assets/" -Recurse -Force

# Deploy to Cloudflare Pages
npx wrangler pages deploy .open-next/assets --project-name chispito-mx --branch main --commit-dirty=true
