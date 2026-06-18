$urls = @(
    "https://chispito.mx/cuadernillos",
    "https://chispito.mx/universo",
    "https://chispito.mx/planes",
    "https://chispito.mx/blog",
    "https://chispito.mx/maestros",
    "https://chispito.mx/login",
    "https://chispito.mx/preescolar-1",
    "https://chispito.mx/preescolar-2",
    "https://chispito.mx/preescolar-3",
    "https://chispito.mx/primaria-1",
    "https://chispito.mx/primaria-2",
    "https://chispito.mx/primaria-3",
    "https://chispito.mx/primaria-4",
    "https://chispito.mx/primaria-5",
    "https://chispito.mx/primaria-6",
    "https://chispito.mx/secundaria-1",
    "https://chispito.mx/secundaria-2",
    "https://chispito.mx/secundaria-3",
    "https://chispito.mx/telesecundaria-1",
    "https://chispito.mx/telesecundaria-2",
    "https://chispito.mx/telesecundaria-3",
    "https://chispito.mx/bachillerato-1",
    "https://chispito.mx/bachillerato-2",
    "https://chispito.mx/bachillerato-3",
    "https://chispito.mx/bachillerato-4",
    "https://chispito.mx/bachillerato-5",
    "https://chispito.mx/bachillerato-6",
    "https://chispito.mx/enfermeria",
    "https://chispito.mx/materias/chispito_plus",
    "https://chispito.mx/materias/matematicas",
    "https://chispito.mx/materias/espanol",
    "https://chispito.mx/materias/historia",
    "https://chispito.mx/materias/ciencias",
    "https://chispito.mx/materias/geografia",
    "https://chispito.mx/materias/civica",
    "https://chispito.mx/materias/formacion",
    "https://chispito.mx/materias/conocimiento",
    "https://chispito.mx/materias/artes",
    "https://chispito.mx/materias/ingles",
    "https://chispito.mx/materias/tecnologia",
    "https://chispito.mx/materias/filosofia",
    "https://chispito.mx/materias/educacion_fisica",
    "https://chispito.mx/materias/orientacion",
    "https://chispito.mx/materias/lenguas",
    "https://chispito.mx/materias/etica_naturaleza",
    "https://chispito.mx/materias/humano_comunitario",
    "https://chispito.mx/materias/lenguajes_nem",
    "https://chispito.mx/materias/saberes_cientificos",
    "https://chispito.mx/materias/multiples_lenguajes",
    "https://chispito.mx/materias/proyectos_nem",
    "https://chispito.mx/privacidad",
    "https://chispito.mx/terminos",
    "https://chispito.mx/nosotros",
    "https://chispito.mx/contacto",
    "https://chispito.mx/cookies",
    "https://chispito.mx/kinder"
)

$results = @()
foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
        $title = ""
        if ($r.Content -match '<title>([^<]+)</title>') {
            $title = $matches[1]
            if ($title.Length -gt 80) { $title = $title.Substring(0, 80) }
        }
        $has404 = ($r.Content -match 'class="not-found"') -or ($r.Content -match 'data-nextjs-not-found') -or ($r.Content -match 'NEXT_NOT_FOUND')
        $hasNotFoundText = ($r.Content -match 'no encontrada') -or ($r.Content -match 'Esta p.gina no existe')
        if ($has404 -or $hasNotFoundText) {
            $status = "BROKEN-404"
        } else {
            $status = "OK"
        }
        $results += "$status | $($r.StatusCode) | $u | $title"
        Write-Host "$status | $($r.StatusCode) | $u | $title"
    } catch {
        $code = ""
        if ($_.Exception.Response) { $code = $_.Exception.Response.StatusCode }
        $results += "ERROR | $code | $u | $($_.Exception.Message)"
        Write-Host "ERROR | $code | $u | $($_.Exception.Message)"
    }
}

Write-Host ""
Write-Host "=== SUMMARY ==="
$ok = ($results | Where-Object { $_ -match "^OK" }).Count
$broken = ($results | Where-Object { $_ -match "^BROKEN" }).Count
$errors = ($results | Where-Object { $_ -match "^ERROR" }).Count
Write-Host "OK: $ok | BROKEN: $broken | ERRORS: $errors | TOTAL: $($results.Count)"
Write-Host ""
Write-Host "=== BROKEN/ERROR URLs ==="
$results | Where-Object { $_ -notmatch "^OK" } | ForEach-Object { Write-Host $_ }
