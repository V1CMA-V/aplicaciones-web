import love from 'eslint-config-love'

export default [
  {
    ...love,
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off', // Next.js does not require React to be in scope
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
    },
  },
]
