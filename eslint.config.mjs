import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import prettierConfig from './.prettierrc.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compatibility instance
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

// Import legacy configs
const legacyConfigs = compat.extends(
  'next/core-web-vitals',
  'next/typescript',
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
);

// Files to ignore
const ignores = [
  '**/node_modules/**',
  '.next/**',
  'out/**',
  'build/**',
  'dist/**',
  'public/**',
  '**/*.min.js',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
];

const eslintConfig = [
  // Ignore files
  {
    ignores,
  },
  ...legacyConfigs,
  // Prettier config must come last to override other formatting rules
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Base ESLint rules
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'prefer-const': 'off',

      // Prettier rules
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];

export default eslintConfig;
