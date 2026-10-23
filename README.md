# manojpaidimarri.com

Personal portfolio for Manoj Paidimarri — Cloud Architect and AI Engineer.

## Design idea

The site uses cloud architecture as the storytelling language instead of displaying a generic cloud-service logo wall. AWS and Azure services appear only where they clarify an engineering habit or architectural concept. The animated Manoj illustration is part of the hero and uses subtle motion to keep the page personal without turning it into a cartoon UI.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Workers

The site uses Cloudflare Workers Static Assets. The `public/` directory is the deployment output and no build step is required.

```bash
npm run deploy
```

For Cloudflare Git integration, connect this repository as a Workers project and use:

- Build command: none / leave empty
- Deploy command: `npx wrangler deploy`
- Root directory: repository root

## Before publishing

1. Replace `YOUR_EMAIL_HERE` in `public/index.html`.
2. Replace the selected-work placeholders with Manoj's actual projects and measurable outcomes.
3. Add LinkedIn/GitHub links when ready.
4. Connect the custom domain in Cloudflare without changing unrelated email DNS records.
