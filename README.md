# survey-gate-final

Survey-gated download page for the PHYS23 practice final, plus a time-locked solutions page.

## Pages

| URL | Purpose |
|-----|---------|
| `index.html` | Complete the Google Form survey → download practice final Part 1 |
| `solutions.html` | Solution keys unlock at a scheduled time |

## Setup

1. **Google Form** — Edit `assets/config.js` and set `formId` to your form ID (the string after `/d/e/` in the form URL).
2. **PDFs** — Place files in `assets/`:
   - `practice-final-1.pdf`
   - `practice-final-1-keys.pdf`
3. **Solutions unlock time** — Edit `SOLUTIONS_CONFIG.unlockTime` in `assets/config.js`.

## GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from branch** → `main` / `/ (root)`.
3. Share `https://<username>.github.io/survey-gate-final/` for the survey gate.
4. Share `https://<username>.github.io/survey-gate-final/solutions.html` for solutions.
