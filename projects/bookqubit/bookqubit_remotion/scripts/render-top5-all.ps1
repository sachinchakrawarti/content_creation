param(
  [string]$OutRoot = "out/top5",
  [string]$Entry   = "src/remotion/index-top5.jsx",
  [string[]]$Lists = @("fiction", "science", "mythology", "nonfiction")
)

$ErrorActionPreference = "Stop"
$startTime = Get-Date

if (-not (Test-Path $Entry)) {
  Write-Host "Missing entry file: $Entry" -ForegroundColor Red
  exit 1
}

foreach ($list in $Lists) {
  $folder = Join-Path $OutRoot $list
  New-Item -ItemType Directory -Force -Path $folder | Out-Null

  $slides = @(
    "IG-Top5-$list-01-Hook",
    "IG-Top5-$list-02-Book",
    "IG-Top5-$list-03-Book",
    "IG-Top5-$list-04-Book",
    "IG-Top5-$list-05-Book",
    "IG-Top5-$list-06-Book",
    "IG-Top5-$list-07-CTA"
  )

  $i = 1
  foreach ($id in $slides) {
    $name = "{0:D2}.png" -f $i
    $outPath = Join-Path $folder $name
    Write-Host "[$list] $id -> $outPath" -ForegroundColor Cyan
    npx remotion still $Entry $id $outPath --overwrite
    $i++
  }

  Write-Host "OK: $list complete" -ForegroundColor Green
  Write-Host ""
}

$elapsed = (Get-Date) - $startTime
Write-Host "===============================" -ForegroundColor Green
Write-Host "DONE - all Top 5 lists rendered" -ForegroundColor Green
Write-Host "Output: $OutRoot" -ForegroundColor Green
Write-Host "Time:   $([math]::Round($elapsed.TotalSeconds, 1))s" -ForegroundColor Green
Write-Host "===============================" -ForegroundColor Green