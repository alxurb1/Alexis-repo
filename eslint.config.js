import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import markdown from "@eslint/markdown";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended", configPrettier],
    languageOptions: { globals: globals.browser },
  },

  {
  files: ["**/*.{jsx,tsx}"],
  ...pluginReact.configs.flat.recommended,
  extends: [configPrettier],
  settings: {
    react: {
      version: "detect", 
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", 
    "react/jsx-no-target-blank": "warn" 
  },
},

  tseslint.configs.recommended,

  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
]);

