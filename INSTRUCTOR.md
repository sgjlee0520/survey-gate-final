# Instructor guide — survey-gate-final

**Do not post this file on Canvas.** Share only the specific links below.

## What to share with students

### Now — survey + practice final

```
https://sgjlee0520.github.io/survey-gate-final/
```

Students complete the survey and download the practice final Part 1.

### Available now — solution keys

Post on Canvas:

```
https://sgjlee0520.github.io/survey-gate-final/r/7c4e2a.html?k=phys23-may25
```

Students open the link and download the keys once they are published.

---

## How it works

| Layer | Purpose |
|-------|---------|
| Obscure path `r/7c4e2a.html` | Not guessable like `/solutions` |
| URL token `?k=phys23-may25` | Wrong/missing token → “Page not found” |
| GitHub Action schedule | Adds `assets/7c4e2a-keys.pdf` to `main` at unlock time |

Before the scheduled release, even someone with the full URL cannot download the PDF — the file is not on the site.

The keys PDF is stored on branch **`store-a7k2`** until the workflow publishes it.

---

## Manual release (optional)

If you need to publish early or the schedule misfires:

1. GitHub → **Actions** → **Unlock solution keys** → **Run workflow**

---

## Changing URLs or unlock time

Edit `assets/config.js`:

- `SOLUTIONS_CONFIG.accessToken` — URL query param value
- `SOLUTIONS_CONFIG.unlockTime` — client-side “not yet” message (real enforcement is the workflow)

If you rename the solutions page or PDF path, update the workflow in `.github/workflows/unlock-solutions.yml` too.

---

## Security note

Determined students can view page source or browse the GitHub repo. The scheduled PDF release is the meaningful control; the obscure URL stops casual early access.
