import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  configFile: '.eslintrc.json',
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:playwright/recommended',
    'plugin:prettier/recommended',
  ),
  ...compat.plugins('simple-import-sort', 'unicorn'),
  ...compat.config({
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            e2e: true,
          },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  }),
];

export default eslintConfig;
