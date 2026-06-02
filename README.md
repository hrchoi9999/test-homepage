# Test Homepage

A small static homepage for deployment testing.

## Files

- `index.html`
- `styles.css`

## GitHub Pages Deployment

Once Git and GitHub CLI are available, publish it with:

```powershell
git init
git add index.html styles.css README.md
git commit -m "Add test homepage"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

Then enable GitHub Pages for the repository in GitHub settings.
