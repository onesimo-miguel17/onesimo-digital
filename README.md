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


## Privacy-conscious audience and conversion analytics

The site keeps Vercel Web Analytics for aggregated page-view reporting and supports Google Analytics 4 for consent-based conversion measurement.

1. Create a Google Analytics 4 property and a Web data stream for the production website.
2. Copy the Measurement ID (format: `G-XXXXXXXXXX`).
3. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the Vercel **Production** environment only, then redeploy.
4. The Google tag is not loaded until a visitor accepts analytics in the consent notice. Rejection does not block the site or contact form.
5. Visitors can reopen the analytics preferences from the Privacy Policy page and withdraw consent.

Tracked events:
- `quote_cta_click`: quote CTA location (hero, approach, closing section or header).
- `select_service`: selected service category.
- `generate_lead`: successful contact-form submission, with service category only.
- `view_demo`: selected concept demo slug.
- `view_all_demos`: click to open the demos index.

Do not add names, email addresses, phone numbers, company names, free-text messages or other personal information to analytics event parameters. Keep the Measurement ID public; it is not a secret API key.
