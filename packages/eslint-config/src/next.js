// @ts-check
import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import { react } from "./react.js";

/**
 * Next.js apps: the react preset plus Next's own rules (Core Web Vitals).
 *
 * `eslint-config-next` is not used: it brings eslint-plugin-react, -import and
 * -jsx-a11y, which don't support ESLint 10 yet. Next's plugin and react-hooks do.
 */
export const next = defineConfig(react, {
  plugins: { "@next/next": nextPlugin },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
  },
});

export default next;
