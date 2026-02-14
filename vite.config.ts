import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/curator/",
  plugins: [react()],
  build: {
    outDir: "docs", // ← change this
    emptyOutDir: true,
  },
});
