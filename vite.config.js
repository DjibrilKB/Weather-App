import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["3cfqwm-3000.csb.app"],
    port: 3000,
    host: true,
  },
});
