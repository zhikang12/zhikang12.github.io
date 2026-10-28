# CAPTURE Evidence & Clinical Pharmacology Foundation website

Static HTML / CSS / JavaScript bilingual website. No framework, CMS, backend or build step.

## Page structure
- English: `/` and `/pages/*.html`
- Chinese: `/zh/` and `/zh/pages/*.html`
- All six top navigation items have English and Chinese counterparts.
- Old `/pages/*.html` routes are retained as minimal compatibility redirects.

## Deploying into the existing GitHub Pages repository
1. Back up or commit any existing local work first. The previous repository had uncommitted edits to `index.html` and `css/style.css`; **do not overwrite them without a deliberate backup**.
2. Use a new branch, e.g. `git switch -c capture-bilingual-redesign`, in the actual repository.
3. Copy these release files into its root, preserving `CNAME`, `.nojekyll`, `css`, `js`, `pages`, and `zh`. Files in this bundle intentionally replace the old `index.html`, `css/style.css`, and `js/main.js`; any other pre-existing files remain until cleaned up.
4. Start the local server (from repo root): `python -m http.server 8311` and open `http://localhost:8311`.
5. Verify `/`, `/zh/`, page links, mobile menu, language switch, and legacy links before merging or pushing to `main`.
6. No change to Namecheap DNS is required by this release. The GitHub Pages HTTPS checkbox / certificate status must be checked separately on GitHub.

## Scientific publication safeguards
- No invented experts, partners, funding, publications, completed projects, committee memberships or endorsements.
- No unverified address, email or non-functional form is published.
- Independent academic initiatives are not presented as owned or controlled by CAPTURE.
- The Foundation is described as a Canadian federal not-for-profit, not a registered charity.
- Any eventual publication/project listing needs verification and permission to publish.

## Files
`CNAME`, `.nojekyll`, `404.html`, `robots.txt`, `sitemap.xml`, `assets/favicon.svg`, `css/style.css`, `js/main.js`, English and Chinese HTML pages, legacy redirect pages.
