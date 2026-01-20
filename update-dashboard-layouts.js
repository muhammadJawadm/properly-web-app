const fs = require('fs');
const path = require('path');

// List of all dashboard files that need updating (from the grep search result)
const filesToUpdate = [
    'src/pages/dashboard/seller/Vault.jsx',
    'src/pages/dashboard/seller/PropertyListings.jsx',
    'src/pages/dashboard/seller/Offers.jsx',
    'src/pages/dashboard/seller/OfferDraft.jsx',
    'src/pages/dashboard/seller/OfferDetails.jsx',
    'src/pages/dashboard/seller/Negotiations.jsx',
    'src/pages/dashboard/seller/Inquiries.jsx',
    'src/pages/dashboard/seller/create-listing/CreateListing.jsx',
    'src/pages/dashboard/seller/Attorney.jsx',
    'src/pages/dashboard/seller/Analytics.jsx',
    'src/pages/dashboard/buyer/vault/BuyerVault.jsx',
    'src/pages/dashboard/buyer/PropertyListings.jsx',
    'src/pages/dashboard/buyer/offers/OfferDraft.jsx',
    'src/pages/dashboard/buyer/offers/MyOffers.jsx',
    'src/pages/dashboard/buyer/inquiries/SubmitOffer.jsx',
    'src/pages/dashboard/buyer/inquiries/MyInquiries.jsx',
    'src/pages/dashboard/buyer/enquiries/MyInquiries.jsx',
    'src/pages/dashboard/buyer/buyer attorney/BuyerAttorney.jsx',
    'src/pages/dashboard/buyer/browse/PropertyDetails.jsx',
    'src/pages/dashboard/buyer/browse/BrowseProperties.jsx',
    'src/pages/dashboard/attorney/AttorneyDashboard.jsx'
];

const baseDir = 'c:\\Users\\muham\\Desktop\\Duseca\\Properly Web App\\Properly-Web-App';

// Process each file
filesToUpdate.forEach(file => {
    const filePath = path.join(baseDir, file);

    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Determine which sidebar to import based on the path
        let sidebarImport = '';
        if (file.includes('/seller/')) {
            sidebarImport = '../../../components/Seller/SellerSidebar';
        } else if (file.includes('/buyer/')) {
            sidebarImport = '../../../components/Buyer/BuyerSidebar';
        } else if (file.includes('/attorney/')) {
            sidebarImport = '../../../components/Attorney/AttorneySidebar';
        }

        // Calculate relative path to hooks directory
        const fileDir = path.dirname(file);
        const relativePath = path.relative(fileDir, 'src/hooks').replace(/\\/g, '/');
        const hooksImportPath = relativePath + '/useResponsive';

        // Step 1: Add the import for useSidebarMargin if not present
        if (!content.includes('useSidebarMargin')) {
            // Find the last import statement
            const importRegex = /^import .* from .*';$/gm;
            const imports = content.match(importRegex);

            if (imports && imports.length > 0) {
                const lastImport = imports[imports.length - 1];
                const importToAdd = `import { useSidebarMargin } from '${hooksImportPath}';`;
                content = content.replace(lastImport, lastImport + '\n' + importToAdd);
                modified = true;
            }
        }

        // Step 2: Find the component function to add the hook call
        // Look for patterns like: const ComponentName = () => {
        const componentRegex = /const \w+ = \(\) => \{[\s\S]*?const \[sidebarCollapsed, setSidebarCollapsed\] = useState\(false\);/;
        const match = content.match(componentRegex);

        if (match && !content.includes('useSidebarMargin(sidebarCollapsed)')) {
            // Add the hook call after sidebarCollapsed state
            const hookCall = '    const sidebarMargin = useSidebarMargin(sidebarCollapsed);';
            content = content.replace(
                /const \[sidebarCollapsed, setSidebarCollapsed\] = useState\(false\);/,
                `const [sidebarCollapsed, setSidebarCollapsed] = useState(false);\n${hookCall}`
            );
            modified = true;
        }

        // Step 3: Replace the inline style
        if (content.includes('window.innerWidth >= 1024')) {
            content = content.replace(
                /style=\{\{ marginLeft: window\.innerWidth >= 1024 \? \(sidebarCollapsed \? '6rem' : '16rem'\) : '0rem' \}\}/g,
                'style={{ marginLeft: sidebarMargin }}'
            );
            modified = true;
        }

        // Write back if modified
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Updated: ${file}`);
        } else {
            console.log(`⊘ Skipped (no changes needed): ${file}`);
        }
    } catch (error) {
        console.error(`✗ Error processing ${file}:`, error.message);
    }
});

console.log('\n✓ Update complete!');
