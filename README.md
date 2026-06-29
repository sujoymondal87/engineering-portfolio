# Engineering Portfolio & Case Study Platform

> A full-stack portfolio platform built to document production architecture, runtime systems, and engineering decisions from 15+ years of software development. Case studies are written and published through a custom admin panel — no static site generator, no third-party CMS.

**Live:** https://sujoymondal-tech.vercel.app

---

## Why this exists

Traditional portfolios describe projects. This portfolio documents the engineering decisions behind production systems — and links every case study to a runnable implementation and source repository.

Every case study on this site is extracted from a real production constraint: the problem that existed, the decision that was made, the tradeoff that was accepted, and the outcome. The writing is the work.

---

## Engineering Portfolio Ecosystem

![Ecosystem Diagram](./portfolio_v2/screenshots/ecosystem.png)

The portfolio is not a standalone artifact. Every piece supports every other:

- **Production experience** → becomes a case study
- **Case study** → published to the portfolio, linked to a GitHub repo, shared on LinkedIn
- **GitHub repo** → deploys a live demo as runnable proof
- **LinkedIn** → drives traffic back to the portfolio
- **Portfolio** → sends recruiters and hiring engineers to the right evidence for their context
- **Everything** → feeds into the interview

---

## Screenshots

### Home
![Home](./portfolio_v2/screenshots/home.png)

### Case Study
![Case Study](./portfolio_v2/screenshots/case-study.png)

### Contact
![Contact](./portfolio_v2/screenshots/contact.png)

### Admin Panel
![Admin](./portfolio_v2/screenshots/admin.png)

---

## Features

- **Case study publishing** — markdown-supported long-form engineering writeups with cover images
- **Admin panel** — protected routes with Supabase Auth, create/edit/delete posts and systems
- **Image upload** — direct to Supabase Storage, served via CDN
- **SEO per page** — meta tags, Open Graph, Twitter Card, JSON-LD structured data, sitemap.xml, robots.txt, Google Search Console indexed
- **Platform capabilities showcase** — 8 production system categories documented (Offline-First, AI Orchestration, Browser AR, Real-Time Sync, Analytics, Indoor Navigation, Payments, No-Code Builder)
- **Contact form** — connected to backend via Resend email API
- **Mobile responsive**
- **Git-based CI/CD** — Vercel auto-deploys frontend, Render auto-deploys backend on push to main

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 · Vite · TypeScript · Tailwind CSS |
| Backend | Node.js · Express · TypeScript |
| Database | Supabase PostgreSQL |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Email | Resend |
| Deploy (frontend) | Vercel |
| Deploy (backend) | Render |

---

## Architecture Decisions

**Why a custom CMS instead of a static site generator (Jekyll, Hugo, Astro)?**
Static site generators treat content as files in a repository — every edit is a commit, every publish is a deploy. A custom admin panel with a database backend separates content management from code deployment. Case studies can be drafted, edited, and published without touching the codebase or triggering a build pipeline.

**Why Supabase PostgreSQL instead of a headless CMS (Contentful, Sanity)?**
Third-party CMS platforms add cost, vendor lock-in, and a separate auth system to manage. Supabase provides a PostgreSQL database, auth, and file storage in one platform — all accessible via a single service key. The data model is simple enough (posts, systems) that a custom schema is faster to work with than a CMS content model.

**Why separate repositories for each demo system?**
Each demo repo (ai-orchestration-middleware, offline-first-browser-runtime, websocket-audio-sync) is independently deployable, has its own README and build brief, and tells a self-contained engineering story. Monorepo alternatives would couple deployment pipelines and blur the narrative boundary between systems.

**Why case studies instead of a project list?**
A project list answers "what did you build?" A case study answers "what problem existed, what did you decide, what did you trade off, and what was the outcome?" The second answer is what an engineering interview actually tests.

---

## Quick start

**Prerequisites:** Node.js >= 22 · npm >= 10

```bash
git clone https://github.com/sujoymondal87/engineering-portfolio
cd engineering-portfolio

# Backend
cd backend
cp .env.example .env   # fill in Supabase + Resend credentials
npm install
npm start

# Frontend (separate terminal)
cd frontend
cp .env.example .env   # set VITE_API_URL=http://localhost:3000
npm install
npm run dev
```

Verify the backend is live:
```bash
curl http://localhost:3000/health
```

---

## Environment variables

### Backend (Render)

| Key | Required | Default | Description |
|---|---|---|---|
| `SUPABASE_URL` | Yes | — | From Supabase project settings |
| `SUPABASE_SERVICE_KEY` | Yes | — | Service role key |
| `RESEND_API_KEY` | Yes | — | For contact form emails |
| `PORT` | No | `3000` | Server port |
| `NODE_VERSION` | Render only | `22.11.0` | Pin Node version on Render |

### Frontend (Vercel)

| Key | Required | Default | Description |
|---|---|---|---|
| `VITE_API_URL` | Yes | — | Backend URL e.g. `https://your-backend.onrender.com` |

---

## Deployment

### Frontend (Vercel)

| Setting | Value |
|---|---|
| Root directory | `frontend` |
| Build command | `npm run build` |
| Output directory | `dist` |

### Backend (Render)

| Setting | Value |
|---|---|
| Root directory | `backend` |
| Build command | `npm install` |
| Start command | `npm start` |
| Node version | `22.11.0` |

---

## Production context

Built to document 10 years of solo engineering on Neareo/MyAppZone — a no-code app platform serving museums, cultural institutions, and tourism organisations across Spain, France, and Belgium. The platform runs 30+ live applications with 600+ verified reviews from users across 35+ countries.

Every architectural decision, implementation, debugging session, and production deployment over the last decade came from one engineer. This portfolio is where that work is documented.

---

## License

MIT
