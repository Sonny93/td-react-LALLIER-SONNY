import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 1080,
    supportFile: false,
  },
});
