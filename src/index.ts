import antfu from '@antfu/eslint-config'
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

export type { Awaitable, OptionsConfig, TypedFlatConfigItem }

const code: TypedFlatConfigItem = {
  rules: {
    // Always wrap branches in braces. Restores the "goto fail" safety net.
    'curly': ['error', 'all'],

    // One space-before-paren rule across every function form.
    'style/space-before-function-paren': ['error', 'always'],

    // Quote every key in an object or none, never a mix.
    'style/quote-props': ['error', 'consistent'],

    // Allows one-line guards like `if (x) { return }`.
    'style/max-statements-per-line': 'off',
  },
}

const tests: TypedFlatConfigItem = {
  files: ['**/*.spec.ts'],
  rules: {
    // Allow sentence-case test titles.
    'test/prefer-lowercase-title': 'off',
  },
}

// Only fires when a project opts in via `config({ markdown: true })`.
const markdown: TypedFlatConfigItem = {
  files: ['**/*.md/**'],
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'style/arrow-parens': 'off',
  },
}

export default function config(
  options: OptionsConfig & TypedFlatConfigItem = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): ReturnType<typeof antfu> {
  return antfu(
    {
      // Lock the two style choices most likely to flip in a future Antfu major.
      stylistic: { quotes: 'single', semi: false },
      ...options,
    },
    code,
    tests,
    markdown,
    ...userConfigs,
  )
}
