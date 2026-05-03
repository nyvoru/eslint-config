import antfu from '@antfu/eslint-config'

// Lint with Antfu directly here. Importing the package itself would create a
// cycle: linting needs the build, but the build is what we lint.
export default antfu({
  stylistic: { quotes: 'single', semi: false },
})
