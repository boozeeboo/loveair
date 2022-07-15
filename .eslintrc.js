module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
      {
        files: ['*.ts', '*.tsx'],

        extends: [
          'airbnb',
          'airbnb-typescript',
        ],

        parserOptions: {
          project: ['./tsconfig.json'],
        },
      },
  ],
};