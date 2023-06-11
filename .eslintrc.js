const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
    // 'no-console': 'error',
    // '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
