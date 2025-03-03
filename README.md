This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
│   ├── redux/            # Redux store, slices, and services
│   │   ├── services/     # RTK Query API services
│   │   ├── slices/       # Redux state slices
│   │   ├── hooks.ts      # Typed hooks for Redux
│   │   ├── provider.tsx  # Redux provider component
│   │   └── store.ts      # Redux store configuration
│   ├── utils/            # Helper functions
│   ├── hooks/            # Custom React hooks
│   └── constants/        # Constants and configuration
├── types/                # TypeScript type definitions
├── styles/               # Global styles and CSS modules
└── services/             # External service integrations
```

### Store Structure

The Redux store is configured in `src/lib/redux/store.ts` using Redux Toolkit's `configureStore`. The store combines:

- UI state management with the `uiSlice`
- API services using RTK Query for data fetching

### Working with Redux

1. **State Management**:

   - Create new slices in `src/lib/redux/slices/` for different domains
   - Use `createSlice` from Redux Toolkit to define reducers and actions
   - Export selectors from each slice file

2. **API Integration**:

   - Define API services in `src/lib/redux/services/`
   - Use RTK Query's `createApi` for declarative data fetching
   - Configure endpoints with proper tag invalidation for cache management

3. **Using in Components**:

   ```tsx
   import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
   import { useGetApartmentsQuery } from '@/lib/redux/services/apartmentsApi';
   import { setTheme } from '@/lib/redux/slices/uiSlice';

   function MyComponent() {
     const dispatch = useAppDispatch();
     const theme = useAppSelector(state => state.ui.theme);
     const { data, isLoading } = useGetApartmentsQuery();

     const toggleTheme = () => {
       dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
     };

     // Component logic
   }
   ```

## Development Workflow

1. **Code Style**:

   - Run `yarn lint` to check for linting issues
   - Run `yarn lint:fix` to automatically fix linting issues
   - Run `yarn format` to format code with Prettier

2. **Git Workflow**:

   - Create feature branches from `develop`
   - 1 feature = 1 branch
   - Name branch like this: `feat/feature-name` or `fix/bug-name`
   - Submit pull requests for code review
   - Ensure everything is working before merging

3. **Adding New Features**:
   - For new UI components, add them to the appropriate directory in `src/components/`
   - For new API endpoints, update the relevant service in `src/lib/redux/services/`
   - For new state management, create or update slices in `src/lib/redux/slices/`

## VSCode Settings

Add the following to your VSCode settings.json:

```json
"prettier.requireConfig": true,
"eslint.experimental.useFlatConfig": true,
"eslint.options": {
  "overrideConfigFile": "eslint.config.mjs"
}
```

## Line Endings

This project uses LF line endings. If you're experiencing issues with CRLF line endings, check:

1. The `.editorconfig` file is properly configured
2. Your Git configuration: `git config core.autocrlf false`
3. The `endOfLine` setting in `.prettierrc.js` is set to `"lf"`

## Import/export components

-- Every component should have following structure: ComponentFolder/ComponentName.tsx, styles.module.scss (if needed)
-- in components folder should be index.ts file that re-exports all components, so every component/form/layout could be exported just from @/components

`import { ComponentName, FormName } from @/components`
