# Kallatage Event Website

A modern, single-page event website for the **Kallatage Art Event**, built with Next.js, React, and Tailwind CSS.

It presents event details, registration flow, and contact information in a responsive landing-page experience.

## Overview

This project is a frontend-focused event page that includes:

- Hero section with event call-to-action
- About and event details sections
- Registration form UX with client-side success state
- Contact section with email and social links
- Reusable UI primitives (Radix/shadcn-style components)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Components:** Radix UI + custom UI components
- **Icons:** Lucide React
- **Fonts:** Geist, Space Grotesk, Syne

## Getting Started

### Prerequisites

- Node.js (current LTS recommended)
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

### Run Locally

```bash
pnpm dev
```

Then open: `http://localhost:3000`

## Available Scripts

From the project root (`/home/runner/work/kallatageEvent/kallatageEvent`):

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Run ESLint

## Project Structure

```text
app/            # App Router entry points and global layout
components/     # Page sections + reusable UI components
hooks/          # Shared React hooks
lib/            # Utility functions
public/         # Static assets
styles/         # Global styling
```

## Notes

- The registration form currently simulates submission on the client (no backend persistence/API call yet).
- Event copy (deadline, prize, contact email, etc.) is currently hardcoded in UI components.

## Deployment

This app can be deployed to any platform that supports Next.js (for example, Vercel).

Typical production flow:

1. `pnpm build`
2. `pnpm start` (or deploy through your hosting provider)

## License

No license file is currently defined in this repository.