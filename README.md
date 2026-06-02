# Test Homepage

A small static homepage for deployment testing.

## Files

- `index.html`
- `styles.css`

## GitHub Pages Deployment

This repository is published with GitHub Pages from the `main` branch root:

```text
https://hrchoi9999.github.io/test-homepage/
```

For future updates:

```powershell
git add .
git commit -m "Update homepage"
git push
```

## Cloudflare Pages Deployment

This site is also published to Cloudflare Pages:

```text
https://test-homepage-a0y.pages.dev/
```

For future Cloudflare deployments:

```powershell
npx wrangler pages deploy . --project-name test-homepage --branch main --commit-dirty=true
```
