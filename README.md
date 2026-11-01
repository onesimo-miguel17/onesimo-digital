# Onésimo Digital

Premium Digital Technology Studio.

A Next.js, React, TypeScript and Tailwind CSS website for Onésimo Digital, serving businesses in Angola and international markets.

## Stack
- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4

## Local development
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## First delivery
Brand identity, responsive homepage, navigation and foundational service/portfolio/contact sections.

## Project principles
- Independent repository and deployment lifecycle.
- No paid services or public deployment without explicit approval.
- Portuguese (Angola) as the initial content language.

## Lead capture and email delivery

The homepage quote form sends submissions through the server-side Resend API. The recipient defaults to the official contact inbox configured for this project.

1. Create a Resend account and verify the account email.
2. Generate an API key with permission to send emails.
3. Copy `.env.example` to `.env.local` for local development and configure the variables below.
4. For production, add the same variables to the hosting provider's server-side environment settings, then redeploy.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Secret API key. Never expose it with a `NEXT_PUBLIC_` prefix. |
| `RESEND_FROM_EMAIL` | Sender identity accepted by Resend. The onboarding sender is suitable only for initial testing; verify a domain for production. |
| `CONTACT_EMAIL` | Inbox that receives quote requests. Defaults to the founder's current official Gmail address. |

The form is not considered live until the server environment contains a valid API key and sender identity. Missing configuration is reported to the visitor without pretending the request was delivered.
