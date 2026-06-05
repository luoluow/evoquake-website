# Deploying the EvoQuake site (GitHub Pages + GoDaddy DNS)

The site is a static Astro build. It deploys automatically to GitHub Pages on
every push to `main` via `.github/workflows/deploy.yml`.

Custom domain: **evoquake.com** (apex), with **www** redirecting to it.

---

## One-time setup

### 1. Create a new GitHub repo

This site needs its own **public** repo (Pages is free only for public repos,
and the `pstar` monorepo contains private/unrelated files we don't want public).

In this directory (`projects/Evoquake`), initialize a standalone repo and push:

```bash
cd projects/Evoquake

git init -b main
git add .
git commit -m "Initial EvoQuake website"

# Authenticate once, then create the repo and push:
gh auth login
gh repo create evoquake-website --public --source=. --remote=origin --push
```

> No `gh`? Create an empty **public** repo named `evoquake-website` on
> github.com (no README/.gitignore), then:
> ```bash
> git remote add origin https://github.com/luoluow/evoquake-website.git
> git push -u origin main
> ```

### 2. Turn on GitHub Pages (Actions source)

Repo → **Settings → Pages** → **Build and deployment → Source: GitHub Actions**.

Push already triggered the workflow; watch it under the **Actions** tab. When
it's green, the site is live at `https://luoluow.github.io`.

### 3. Set the custom domain

Still under **Settings → Pages → Custom domain**, enter `evoquake.com` → **Save**.
(The `public/CNAME` file already pins this so it survives every deploy.)
Leave **Enforce HTTPS** unchecked until DNS resolves — then check it.

### 4. Point GoDaddy DNS at GitHub Pages

In GoDaddy: **My Products → Domain (evoquake.com) → DNS → Manage DNS**.

**Delete** GoDaddy's default parked `A @` record and any default
`CNAME www → @`, then add:

| Type  | Name | Value                  | TTL  |
|-------|------|------------------------|------|
| A     | @    | 185.199.108.153        | 600  |
| A     | @    | 185.199.109.153        | 600  |
| A     | @    | 185.199.110.153        | 600  |
| A     | @    | 185.199.111.153        | 600  |
| CNAME | www  | `luoluow.github.io` | 600  |

> Optional IPv6 (AAAA @): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
> `2606:50c0:8002::153`, `2606:50c0:8003::153`.

DNS can take anywhere from a few minutes to ~1 hour (occasionally longer) to
propagate. Once GitHub's Pages settings show the domain as verified, tick
**Enforce HTTPS**.

---

## Day-to-day

Just push to `main` — the Action rebuilds and redeploys:

```bash
git add -A && git commit -m "Update copy" && git push
```

## Notes

- `astro.config.mjs` has `site: 'https://evoquake.com'` and **no `base`** — correct
  for an apex custom domain served at the root. (A `base` is only needed for a
  project page served at `username.github.io/repo/`.)
- `public/CNAME` must contain exactly `evoquake.com`. Don't delete it.
- The repo must stay **public** for free Pages hosting.
