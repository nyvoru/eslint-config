# @nyvoru/eslint-config

Opinionated ESLint config for Nyvoru Vue and Nuxt projects. Wraps
[@antfu/eslint-config](https://github.com/antfu/eslint-config) with a
small set of overrides: no semicolons, single quotes, always braces,
and a few stylistic tweaks aligned with the Vue Core and Nuxt Core
repos.

## Install

```sh
pnpm add -D @nyvoru/eslint-config @antfu/eslint-config eslint
```

## Usage

```ts
// eslint.config.ts (Vue)
import config from '@nyvoru/eslint-config'

export default config({ ignores: ['dist'] })
```

```ts
// eslint.config.ts (Nuxt)
import config from '@nyvoru/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(config({ ignores: ['dist', '.nuxt'] }))
```

```ts
// Opt into linting code blocks inside .md files
export default config({ markdown: true })
```

`config()` forwards every option to Antfu's factory. Append extra
flat-config items after the options:

```ts
import config from '@nyvoru/eslint-config'

export default config(
  { ignores: ['dist'] },
  {
    files: ['**/*.spec.ts'],
    rules: { 'some-rule': 'off' },
  },
)
```

## Overrides

Three blocks extend Antfu's defaults: code, tests, and markdown. The
factory also locks `stylistic.quotes: 'single'` and `stylistic.semi: false`
so a future Antfu default flip cannot change them silently.

### Code (Vue, Nuxt, JS, TS)

| Rule | Setting | Effect |
| --- | --- | --- |
| `curly` | `['error', 'all']` | Always wrap branches in braces |
| `style/space-before-function-paren` | `['error', 'always']` | `function foo ()` |
| `style/quote-props` | `['error', 'consistent']` | Quote every key or none |

### Tests (`**/*.spec.ts`)

| Rule | Setting | Effect |
| --- | --- | --- |
| `test/prefer-lowercase-title` | `['error', { ignore: ['describe'] }]` | Lowercase `it`/`test` titles, allow PascalCase in `describe` |

### Markdown (`**/*.md/**`)

Active only when a project opts in via `config({ markdown: true })`.

| Rule | Setting | Effect |
| --- | --- | --- |
| `vue/singleline-html-element-content-newline` | `'off'` | Allow inline HTML in code samples |
| `style/arrow-parens` | `'off'` | Allow paren-less single-param arrows |
