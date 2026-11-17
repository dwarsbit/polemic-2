import { react } from "@scholarkit/eslint-config";
import globals from "globals";

export default [
  ...react,
  // The corpus runner and the scripts run in Node, not in the webview.
  { files: ["tools/**", "scripts/**"], languageOptions: { globals: globals.node } },
];
