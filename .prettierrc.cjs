// prettier.config.js or .prettierrc.js
module.exports = {
  tabWidth: 2,
  trailingComma: "all",
  arrowParens: "always",
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: false,
  svelteSortOrder: "options-styles-scripts-markup",
  svelteStrictMode: false,
  svelteBracketNewLine: true,
  svelteIndentScriptAndStyle: true,
  svelteAllowShorthand: false,
  plugins: ["prettier-plugin-svelte"],
};
