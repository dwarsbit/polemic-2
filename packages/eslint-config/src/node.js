// @ts-check
import { defineConfig } from "eslint/config";
import globals from "globals";
import { base } from "./base.js";

/** Node code: services, scripts, config files and tests that run in Node. */
export const node = defineConfig(base, {
  languageOptions: {
    globals: globals.node,
  },
});

export default node;
