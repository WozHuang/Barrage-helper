module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/electron',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/self-closing-comp': [2, { component: true, html: false }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-brace-presence': [1, 'never'],
    'import/no-named-as-default-member': 0
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: { project: './tsconfig.json' } }
  }
};
