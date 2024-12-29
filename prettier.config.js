module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  semi: true,
  useTabs: false,
  arrowParens: "avoid",
  printWidth: 80,
  endOfLine: "auto",

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
};
