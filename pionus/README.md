# Pionus Safaris – Frontend

A modern **frontend web platform** for discovering, organizing, and preparing safari tour bookings in East Africa.  
Built with **Next.js (Pages Router)** and **TypeScript**, this project focuses on scalable UI architecture, strong typing, and clean separation of concerns — while remaining fully backend-ready.

**Live Demo (placeholder):**  
https://alx-project-nexus-pionus-safaris.vercel.app/

---

## Project Overview

Pionus Safaris aims to reduce friction in planning group safari experiences by providing:

- Clear tour discovery and pricing visibility
- UI flows for group coordination
- A foundation for guide verification and in-app communication

This repository represents the **frontend implementation only**.  
All data is currently mock-driven, and backend services are intentionally deferred.

---

## Features

- **Tour Discovery** – Browse and explore available safari tours
- **Tour Details Pages** – Dynamic routing for individual tour views
- **Group Management (UI)** – Interfaces for creating and viewing group participation
- **Messaging (UI Foundation)** – Frontend messaging layout designed for future real-time integration
- **Authentication Pages** – Login and registration screens with validation
- **Price Visibility** – Clear pricing display and cost-splitting concepts
- **Verified Guides (UI)** – Guide listings with trust and verification indicators

---

## Tech Stack

- **Next.js (Pages Router)** – Server-Side Rendering (SSR) & Static Site Generation (SSG)
- **TypeScript** – Type-safe JavaScript for maintainability
- **Tailwind CSS** – Utility-first styling
- **pnpm** – Fast, disk-efficient package manager

---

## Project Structure

```
//
pionus/
├── components/
│ ├── common/
│ │ ├── AppImage.tsx
│ │ ├── Button.tsx
│ │ └── Cta.tsx
│ ├── features/
│ │ ├── aboutSections/
│ │ │ ├── OurStory.tsx
│ │ │ ├── Mission.tsx
│ │ │ ├── Corevalues.tsx
│ │ │ ├── WhatsetsUsApart.tsx
│ │ │ ├── ImpactStats.tsx
│ │ │ └── Team.tsx
│ │ └── toursSections/
│ │ ├── TourHero.tsx
│ │ ├── TourTabs.tsx
│ │ ├── TourSidebar.tsx
│ │ ├── TourCard.tsx
│ │ └── TourGroupCard.tsx
│ ├── homesections/
│ │ ├── FeaturedTours.tsx
│ │ ├── Hero.tsx
│ │ ├── HowItWoks.tsx
│ │ ├── Testimonial.tsx
│ │ └── WhyChoosePionusSafari.tsx
│ └── layout/
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Layout.tsx
│ └── Errorboundary.tsx
├── constants/
│ └── nav_links.ts
├── data/
│ ├── testimonial.ts
│ └── tours.ts
├── interfaces/
│ ├── button.ts
│ ├── GroupCard.ts
│ ├── Testimonial.ts
│ └── TourCardProps.ts
├── lib/
│ └── api/
│ └── tours.ts
├── pages/
│ ├── _app.tsx
│ ├── _document.tsx
│ ├── index.tsx
│ ├── 404.tsx
│ ├── auth/
│ │ ├── login.tsx
│ │ └── register.tsx
│ ├── about/
│ │ └── index.tsx
│ ├── messages/
│ │ ├── index.tsx
│ │ └── message.tsx
│ ├── tours/
│ │ ├── index.tsx
│ │ ├── [tourid].tsx
│ │ └── components/ (refer to components/features/toursSections)
│ └── legal/
│ ├── privacy.tsx
│ └── terms.tsx
├── public/
│ ├── about/
│ ├── guides/
│ ├── testimonial/
│ └── tours/
├── styles/
│ └── globals.css
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- pnpm package manager

### Installation & Development

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## Development

- **Code Editor**: VS Code recommended
- **Linting**: ESLint configured for code quality
- **Hot Reload**: Pages auto-update on file changes during development

# Project Overview

## Frontend Architecture

### Routing & Rendering

- Dynamic routing implemented via `pages/tours/[tourid].tsx`
- Static generation used for marketing and listing pages
- Client-side navigation via Next.js router

### Data Handling

- Mock data stored in `/data`
- API abstraction layer in `/lib/api`
- Designed to integrate real backend services without UI refactors

### TypeScript Usage

- Explicit interfaces for components and data models
- Strongly typed props and state
- Avoidance of `any` to reduce runtime errors

### Styling Strategy

- Tailwind CSS for consistent and responsive layouts
- Mobile-first design approach
- Shared layout components (Header, Footer, Layout)

---

## Project Scope Clarification

This project intentionally focuses on frontend architecture and user experience.

### Implemented

- UI components and layouts
- Routing and navigation
- Mock-driven data flow
- Backend-ready frontend structure

### Not Yet Implemented

- Backend APIs
- Real authentication logic
- Payments
- Real-time messaging

> These features are planned and supported by the current structure but are out of scope for this repository.

---

## Known Limitations

- **Messaging:** UI only; real-time backend integration planned
- **Authentication:** Frontend pages only; server-side auth not implemented
- **Payments:** UI concepts only
- **Legal Pages:** `privacy.tsx` and `terms.tsx` are placeholders

---

## Roadmap

1. Integrate backend APIs for tours, groups, and authentication
2. Add real-time messaging support
3. Build an admin dashboard for guide verification
4. Finalize legal content
5. Implement contact and support workflows

---

## Key Takeaways

- Clear separation of concerns improves frontend scalability
- Mock-first development enables rapid UI iteration
- Strong typing increases confidence and maintainability
- Intentional scope control prevents premature over-engineering
