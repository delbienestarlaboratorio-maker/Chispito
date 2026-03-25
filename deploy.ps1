Copy-Item -Path ".open-next/worker.js" -Destination ".open-next/assets/_worker.js" -Force
Copy-Item -Path ".open-next/cloudflare" -Destination ".open-next/assets/cloudflare" -Recurse -Force
Copy-Item -Path ".open-next/middleware" -Destination ".open-next/assets/middleware" -Recurse -Force
Copy-Item -Path ".open-next/server-functions" -Destination ".open-next/assets/server-functions" -Recurse -Force
Copy-Item -Path ".open-next/.build" -Destination ".open-next/assets/.build" -Recurse -Force
if (Test-Path ".open-next/cache") { Copy-Item -Path ".open-next/cache" -Destination ".open-next/assets/cache" -Recurse -Force }
Get-ChildItem -Path "public" | Copy-Item -Destination ".open-next/assets/" -Recurse -Force

@"
cloudflare
middleware
server-functions
.build
cache
"@ | Out-File -FilePath ".open-next/assets/.cfignore" -Encoding utf8

@"
{
  "version": 1,
  "include": [
    "/*"
  ],
  "exclude": [
    "/_next/*",
    "/favicon.ico",
    "/icon.svg",
    "/robots.txt",
    "/ads.txt",
    "/personajes/*",
    "/img/*",
    "/materias/*"
  ]
}
"@ | Out-File -FilePath ".open-next/assets/_routes.json" -Encoding utf8

npx wrangler pages deploy .open-next/assets --project-name chispito-mx --branch main
