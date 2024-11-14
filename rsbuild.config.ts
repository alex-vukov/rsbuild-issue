import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const { parsed } = loadEnv();

console.log(parsed)

export default defineConfig({
  source: {
    define: parsed,
  },
  plugins: [pluginReact()],
});
