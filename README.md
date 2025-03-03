This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Project Structure

```
src/
├── app/                  # Next.js App Router directory
│   ├── (auth)/           # Authentication related routes
│   ├── (dashboard)/      # Dashboard related routes
│   ├── api/              # API routes
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── ui/               # Basic UI components
│   ├── forms/            # Form-related components
│   └── layouts/          # Layout components
├── lib/                  # Utility functions and shared logic
│   ├── utils/            # Helper functions
│   ├── hooks/            # Custom React hooks
│   └── constants/        # Constants and configuration
├── types/                # TypeScript type definitions
├── styles/               # Global styles and CSS modules
└── services/             # External service integrations
```
