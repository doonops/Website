# doonops.com deploy guide

## Kyon purani site dikh rahi thi?

| Folder | Kya hai |
|--------|---------|
| `docs/` | **Purani** static site (GitHub Pages yahan se serve karta hai) |
| `out/` | **Nayi** site (`npm run build` ke baad) |

Code push karne se `docs/` **automatic update nahi hota** — build copy alag step hai.

**Plain text / broken site?** Agar HTML update ho lekin CSS na aaye, check karo `docs/_next/` git mein hai ya nahi. Pehle `docs/` `.gitignore` mein tha — sirf purani tracked files push hoti thi, nayi CSS 404 deti thi. Ab `docs/` ignore nahi hai; `npm run build:docs` ke baad `git add -A docs/` zaroor karo.

## doonops.com — 2 possible setups

### Setup 1: GitHub Pages → **/docs** folder (Website repo)

1. Repo **Settings → Pages →** Source: **Deploy from branch `main` /docs**
2. Har release pe:
   ```bash
   npm run build:docs
   git add docs/
   git commit -m "chore: update GitHub Pages docs"
   git push
   ```
3. 1–2 min wait, phir https://doonops.com hard refresh

### Setup 2: **doonops.github.io** repo (workflow)

1. GitHub **Website** repo → **Settings → Secrets →** `PAGES_DEPLOY_KEY`
2. Deploy key from `doonops/doonops.github.io` repo
3. Push to `main` — Action **Deploy to doonops.com** chalega
4. `out/` → `doonops.github.io` → CNAME `doonops.com`

Check: **Website repo → Actions** tab — last run green hai?

## Local test (bina deploy)

```bash
npm run build
npm run preview
# open http://localhost:3000
```
