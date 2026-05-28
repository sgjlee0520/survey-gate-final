# survey-gate-final

Survey-gated download page for the PHYS23 practice final, with a separately shared, time-locked solutions page.

## Student-facing URLs

| Page | URL | When to share |
|------|-----|---------------|
| Survey + practice final | `https://sgjlee0520.github.io/survey-gate-final/` | Anytime |
| Solution keys | See **INSTRUCTOR.md** | Available now |

The survey page does **not** link to solutions.

## How solutions are protected

1. **Obscure URL** — solutions live at a non-obvious path, not `/solutions.html`
2. **Access token** — URL requires a `?k=…` query parameter
3. **Scheduled release** — the keys PDF is **not** on `main` until a GitHub Action publishes it at unlock time

Client-side checks add friction; the scheduled PDF release is what actually enforces the unlock time.

## Instructor setup

See **[INSTRUCTOR.md](INSTRUCTOR.md)** for the exact links and workflow details.

## Configuration

Edit `assets/config.js` for:

- Google Form ID (`SURVEY_GATE_CONFIG.formId`)
- Solutions unlock time (`SOLUTIONS_CONFIG.unlockTime`)
- Access token (`SOLUTIONS_CONFIG.accessToken`)

## GitHub Pages

Settings → Pages → Deploy from branch → `main` / `/ (root)`.
