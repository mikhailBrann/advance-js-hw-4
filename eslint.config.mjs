import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["src/**/*.js"], 
    ignores: ['**/node_modules/**','dist/',],
    languageOptions: {sourceType: "script"},
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];