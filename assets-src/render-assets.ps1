# Regenerates the static assets that are rendered from HTML sources:
#   public/Omar-Bari-CV.pdf      (from assets-src/cv.html)
#   public/og/<page>-<lang>.png  (from assets-src/og.html, 1200x630, ten social cards)
#   public/apple-touch-icon.png  (from assets-src/icon.html, 180x180)
# Requires Chrome or Edge. Run from the repository root:
#   powershell -File assets-src/render-assets.ps1

$root = Split-Path -Parent $PSScriptRoot
$chrome = @(
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $chrome) { Write-Error "No Chrome/Edge found."; exit 1 }

$cv  = "file:///" + ($root -replace '\\','/') + "/assets-src/cv.html"
$og  = "file:///" + ($root -replace '\\','/') + "/assets-src/og.html"
$ico = "file:///" + ($root -replace '\\','/') + "/assets-src/icon.html"

& $chrome --headless=new --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="$root\public\Omar-Bari-CV.pdf" $cv | Out-Null

New-Item -ItemType Directory -Force "$root\public\og" | Out-Null
foreach ($p in 'home', 'essor', 'aiops', 'pipeline', 'querypilot') {
  foreach ($l in 'en', 'fr') {
    & $chrome --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files `
      --virtual-time-budget=5000 --window-size=1200,630 `
      --screenshot="$root\public\og\$p-$l.png" "$og`?p=$p&l=$l" | Out-Null
  }
}

& $chrome --headless=new --disable-gpu --hide-scrollbars --window-size=180,180 `
  --screenshot="$root\public\apple-touch-icon.png" $ico | Out-Null

Get-ChildItem "$root\public\Omar-Bari-CV.pdf", "$root\public\og\*.png", "$root\public\apple-touch-icon.png" |
  Select-Object Name, Length
