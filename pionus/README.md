# Pionus Safaris - Frontend

A modern web platform for booking and managing safari tours in East Africa. Built with [Next.js](https://nextjs.org) and TypeScript, providing an intuitive interface for travelers to discover, book, and manage group safaris.

## Features

- **Tour Discovery**: Browse and filter available safari tours
- **Group Management**: Create and manage tour groups with real-time member tracking
- **Messaging System**: In-app messaging for communication between guides and travelers
- **Authentication**: Secure user registration and login
- **Price Tracking**: Detailed price breakdown and split management
- **Verified Guides**: Browse trusted and verified safari guides

## Tech Stack

- [Next.js 14](https://nextjs.org) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first styling
- [pnpm](https://pnpm.io) - Fast, disk space efficient package manager

## Project Structure

```
components/
  ├── common/        - Reusable UI components (Button, Card, Modal, etc.)
  ├── group/         - Group-specific components
  ├── landingpage/   - Hero, featured tours, and info sections
  ├── layout/        - Main layout components (Header, Footer)
  ├── messaging/     - Chat and messaging components
  └── tour/          - Tour display and filtering components
pages/
  ├── tours/         - Tour listing and details
  ├── groups/        - Group management
  ├── messages/      - Messaging interface
  ├── auth/          - Authentication pages
  └── about/         - About page
```

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

## Contributing

When making changes:

1. Create a feature branch
2. Make your updates
3. Test thoroughly before committing
4. Commit with descriptive messages

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
