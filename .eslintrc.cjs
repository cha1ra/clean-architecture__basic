module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // import に拡張子を必要にする
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'no-restricted-syntax': 'ok',
  },
};
