// @ts-check
import { defineConfig } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { base } from "./base.js";

/** React code that runs in the browser or a Tauri webview: the editors and `ui`. */
export const react = defineConfig(base, reactHooks.configs.flat.recommended, {
  languageOptions: {
    globals: globals.browser,
  },
});

export default react;
