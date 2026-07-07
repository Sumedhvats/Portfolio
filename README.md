# sumedh.

My personal portfolio — built with Next.js, Tailwind CSS, and Framer Motion.

**[svats.me](https://svats.me)**

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + Lenis smooth scroll
- **UI Components**: shadcn/ui
- **Email**: Nodemailer (SMTP)
- **Deployment**: Vercel

## Features

- Dark/light theme with system preference detection
- Smooth scroll animations and scroll-triggered reveals
- Interactive cursor-following profile image
- Draggable skills section
- Contact form with email delivery via SMTP
- GitHub contributions graph (API route)
- Fully responsive (mobile-first)
- SEO optimized with structured data (JSON-LD), Open Graph, and sitemap

## Running Locally

```bash
git clone git@github.com:Sumedhvats/Portfolio.git
cd Portfolio
npm install
cp .env.example .env.local
# fill in your env vars
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GITHUB_TOKEN` | GitHub personal access token (`read:user` scope) |
| `GITHUB_USERNAME` | GitHub username for contributions graph |
| `SMTP_HOST` | SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (e.g. `587`) |
| `SMTP_USER` | SMTP login email |
| `SMTP_PASS` | SMTP password / app password |
| `SMTP_FROM` | Sender email address |
| `CONTACT_TO` | Recipient email for contact form |

## License

MIT