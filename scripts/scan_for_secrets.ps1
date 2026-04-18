<#
Scans repository files for common secret patterns and prints matches.
Usage: powershell -ExecutionPolicy Bypass -File .\scripts\scan_for_secrets.ps1
#>
param()

$patterns = @(
    'github_pat_[A-Za-z0-9_\-]+',
    'ghp_[A-Za-z0-9_\-]+',
    'AKIA[0-9A-Z]{16}',
    'AIza[0-9A-Za-z\-_]{35}',
    '-----BEGIN PRIVATE KEY-----',
    'client_secret\s*[:=]\s*"?[A-Za-z0-9_\-]+"?',
    'api_key\s*[:=]\s*"?[A-Za-z0-9_\-]+"?',
    'password\s*[:=]\s*"?.+"?'
)

Write-Output "Scanning repository for potential secrets..."

$files = Get-ChildItem -Recurse -File | Where-Object { $_.FullName -notmatch '\\.git\\\' }

$found = $false
foreach ($file in $files) {
    $content = Get-Content -Raw -ErrorAction SilentlyContinue -Path $file.FullName
    if (-not $content) { continue }
    foreach ($pattern in $patterns) {
        try {
            $matches = [regex]::Matches($content, $pattern)
        } catch { continue }
        if ($matches.Count -gt 0) {
            $found = $true
            Write-Output "===> $($file.FullName)"
            foreach ($m in $matches) { Write-Output "    $($m.Value)" }
        }
    }
}

if (-not $found) { Write-Output "No obvious secrets found by simple patterns." }
else { Write-Output "Review the matches above and remove any secrets from files. Then rotate/revoke the secrets immediately." }
