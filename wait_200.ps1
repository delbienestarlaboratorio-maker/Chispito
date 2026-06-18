$url = "https://chispito.mx/secundaria-3/matematicas/bloque-6"
$max_retries = 30
$wait_sec = 10

for ($i = 1; $i -le $max_retries; $i++) {
    try {
        $r = Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop
        Write-Host "Got 200 OK! Deployment is LIVE!"
        exit 0
    } catch {
        Write-Host "Got HTTP error (probably 404), waiting..."
    }
    Start-Sleep -Seconds $wait_sec
}
Write-Host "Timeout."
exit 1
