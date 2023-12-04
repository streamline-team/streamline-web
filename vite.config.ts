import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3030,
  },
  preview: {
    port: 3030,
  },
  plugins: [react()],
});
