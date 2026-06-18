$url = "https://chispito.mx/secundaria-3/matematicas/bloque-3"
$max_retries = 40
$wait_sec = 15

for ($i = 1; $i -le $max_retries; $i++) {
    try {
        $r = Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop
        
        # Check if the content still has Next.js 404
        $hasNotFound = ($r.Content -match 'no encontrada') -or ($r.Content -match 'not-found')
        if (-not $hasNotFound) {
            Write-Host "Site is live with 200 OK and valid content!"
            exit 0
        } else {
            Write-Host "Returns 200 but has not-found content... waiting."
        }
    } catch {
        Write-Host "Still 404... waiting."
    }
    Start-Sleep -Seconds $wait_sec
}
Write-Host "Timeout reached."
exit 1
