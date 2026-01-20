# PowerShell script to update dashboard layout files with responsive hook

$baseDir = "c:\Users\muham\Desktop\Duseca\Properly Web App\Properly-Web-App"

# Files to update
$filesToUpdate = @(
    "src\pages\dashboard\seller\Vault.jsx",
    "src\pages\dashboard\seller\PropertyListings.jsx",
    "src\pages\dashboard\seller\Offers.jsx",
    "src\pages\dashboard\seller\OfferDraft.jsx",
    "src\pages\dashboard\seller\OfferDetails.jsx",
    "src\pages\dashboard\seller\Negotiations.jsx",
    "src\pages\dashboard\seller\create-listing\CreateListing.jsx",
    "src\pages\dashboard\seller\Attorney.jsx",
    "src\pages\dashboard\seller\Analytics.jsx",
    "src\pages\dashboard\buyer\vault\BuyerVault.jsx",
    "src\pages\dashboard\buyer\PropertyListings.jsx",
    "src\pages\dashboard\buyer\offers\OfferDraft.jsx",
    "src\pages\dashboard\buyer\offers\MyOffers.jsx",
    "src\pages\dashboard\buyer\inquiries\SubmitOffer.jsx",
    "src\pages\dashboard\buyer\inquiries\MyInquiries.jsx",
    "src\pages\dashboard\buyer\enquiries\MyInquiries.jsx",
    "src\pages\dashboard\buyer\buyer attorney\BuyerAttorney.jsx",
    "src\pages\dashboard\buyer\browse\PropertyDetails.jsx",
    "src\pages\dashboard\buyer\browse\BrowseProperties.jsx",
    "src\pages\dashboard\attorney\AttorneyDashboard.jsx"
)

$updatedCount = 0
$skippedCount = 0
$errorCount = 0

Write-Host "`n=== Dashboard Layout Fix Script ===" -ForegroundColor Cyan
Write-Host "Processing $($filesToUpdate.Count) files...`n" -ForegroundColor Yellow

foreach ($file in $filesToUpdate) {
    $fullPath = Join-Path $baseDir $file
    
    try {
        if (-not (Test-Path $fullPath)) {
            Write-Host "X File not found: $file" -ForegroundColor Red
            $errorCount++
            continue
        }

        $content = Get-Content $fullPath -Raw
        $originalContent = $content
        $modified = $false

        # Determine the relative path to hooks
        $fileDepth = ($file -split "[\\/]").Count - 2
        $relPath = '../' * $fileDepth + 'hooks/useResponsive'

        # Step 1: Add import if not already present
        if ($content -notmatch 'useSidebarMargin') {
            $lines = $content -split "`r?`n"
            $lastImportIndex = -1
            
            for ($i = 0; $i -lt $lines.Count; $i++) {
                if ($lines[$i] -match "^import .* from .*") {
                    $lastImportIndex = $i
                }
            }
            
            if ($lastImportIndex -ge 0) {
                $importLine = "import { useSidebarMargin } from '$relPath';"
                $lines = $lines[0..$lastImportIndex] + $importLine + $lines[($lastImportIndex + 1)..($lines.Count - 1)]
                $content = $lines -join "`r`n"
                $modified = $true
            }
        }

        # Step 2: Add hook call after sidebarCollapsed state
        if (($content -match 'const \[sidebarCollapsed, setSidebarCollapsed\] = useState\(false\);') -and 
            ($content -notmatch 'const sidebarMargin = useSidebarMargin\(sidebarCollapsed\);')) {
            
            $pattern = '(const \[sidebarCollapsed, setSidebarCollapsed\] = useState\(false\);)'
            $replacement = "`$1`r`n    const sidebarMargin = useSidebarMargin(sidebarCollapsed);"
            $content = $content -replace $pattern, $replacement
            $modified = $true
        }

        # Step 3: Replace the inline style - simple pattern
        if ($content -match 'window.innerWidth >= 1024') {
            $oldPattern = 'window.innerWidth >= 1024 \? \(sidebarCollapsed \? ''6rem'' : ''16rem''\) : ''0rem'''
            $newPattern = 'sidebarMargin'
            $content = $content -replace $oldPattern, $newPattern
            $modified = $true
        }

        # Save if modified
        if ($modified -and ($content -ne $originalContent)) {
            Set-Content -Path $fullPath -Value $content -NoNewline
            Write-Host "+ Updated: $file" -ForegroundColor Green
            $updatedCount++
        }
        else {
            Write-Host "- Skipped: $file" -ForegroundColor Gray
            $skippedCount++
        }
    }
    catch {
        Write-Host "X Error with $file : $_" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host "`n=== Summary ===" -ForegroundColor Cyan
Write-Host "Updated: $updatedCount files" -ForegroundColor Green
Write-Host "Skipped: $skippedCount files" -ForegroundColor Yellow
Write-Host "Errors: $errorCount files" -ForegroundColor Red
Write-Host "`nDone!`n" -ForegroundColor Cyan
