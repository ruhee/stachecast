import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node, // Useful for config files
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed in modern React
      "react/prop-types": "off",         // Optional: turn off if using TypeScript
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  // Must be last to override conflicting formatting rules
  eslintConfigPrettier, 
  {
    // Ignore Parcel's build output and cache directories
    ignores: [".parcel-cache/", "dist/"], 
  }
];
