// eslint.config.mjs
import cypress from 'eslint-plugin-cypress';
import chaiFriendly from 'eslint-plugin-chai-friendly';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default tseslint.config(
    js.configs.recommended, // Start with ESLint's recommended JS rules
    ...tseslint.configs.recommended, // Add TypeScript recommended rules
    // Specific override for saucedemo.ts to allow namespace
    {
        files: ['cypress/support/commands/saucedemo.ts'],
        rules: {
            '@typescript-eslint/no-namespace': 'off',
        },
    },
    ...compat.extends( // Existing prettier and plugin configurations
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
        'prettier' // Prettier should be extended last
    ),
    {
        // Global ignores
        ignores: [
            'mochawesome-report/',
            '.github/',
            'node_modules/',
            '**/*.config.js', // Original ignore
            '**/*.config.ts'  // Added ignore for TS config files
        ]
    },
    {
        // Specific configurations for JS, TS, TSX files
        files: ['**/*.js', '**/*.ts', '**/*.tsx'],
        plugins: {
            cypress, // Already imported
            'chai-friendly': chaiFriendly, // Already imported
            'no-only-tests': noOnlyTests, // Already imported
            // '@typescript-eslint' plugin is often implicitly included by tseslint.config
        },
        languageOptions: {
            globals: {
                ...cypress.environments.globals.globals // Keep existing globals
            },
            // parser: tseslint.parser, // Handled by tseslint.config
            // parserOptions for specific TS features, if needed later
            // parserOptions: {
            //   project: './tsconfig.json', // For rules requiring type information
            //   tsconfigRootDir: __dirname,
            // },
        },
        rules: {
            // Keep existing rules
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-unnecessary-waiting': 'warn',
            'cypress/assertion-before-screenshot': 'warn',
            'cypress/no-force': 'warn',
            'cypress/no-async-tests': 'error',
            'no-unused-expressions': 0, // Disabled as chai-friendly handles it
            'chai-friendly/no-unused-expressions': 'error', // Ensure this is 'error' or 2
            semi: ['error', 'never'], // Keep existing semi rule
            'no-only-tests/no-only-tests': [
                'error',
                {
                    fix: true
                }
            ],

            // Add or adjust TypeScript specific rules if needed.
            // Many JS rules are automatically handled or replaced by @typescript-eslint/eslint-plugin.
            // For example, '@typescript-eslint/no-unused-vars' is often preferred over 'no-unused-vars'.
            // The tseslint.configs.recommended already includes good defaults.
            // Example:
            // '@typescript-eslint/no-explicit-any': 'warn',
        }
    }
    // If you need highly specific overrides for TS files that `tseslint.config` doesn't cover elegantly:
    // {
    //   files: ['**/*.ts', '**/*.tsx'],
    //   languageOptions: {
    //     parser: tseslint.parser,
    //     parserOptions: {
    //       project: './tsconfig.json',
    //     },
    //   },
    //   rules: {
    //     // specific TS overrides here
    //   },
    // }
);
