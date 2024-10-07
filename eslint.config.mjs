import cypress from 'eslint-plugin-cypress'
import chaiFriendly from 'eslint-plugin-chai-friendly'
import noOnlyTests from 'eslint-plugin-no-only-tests'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [
    ...compat.extends(
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
        'prettier'
    ),
    {
        plugins: {
            cypress,
            'chai-friendly': chaiFriendly,
            'no-only-tests': noOnlyTests
        },

        languageOptions: {
            globals: {
                ...cypress.environments.globals.globals
            }
        },

        rules: {
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-unnecessary-waiting': 'warn',
            'cypress/assertion-before-screenshot': 'warn',
            'cypress/no-force': 'warn',
            'cypress/no-async-tests': 'error',
            'no-unused-expressions': 0,
            'chai-friendly/no-unused-expressions': 2,
            semi: ['error', 'never'],

            'no-only-tests/no-only-tests': [
                'error',
                {
                    fix: true
                }
            ]
        }
    }
]
