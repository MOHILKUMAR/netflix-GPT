import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env.VITE_TMDB_KEY": JSON.stringify(
      process.env.VITE_TMDB_KEY
    ),
    "process.env.VITE_GEMINI_KEY": JSON.stringify(
      process.env.VITE_GEMINI_KEY
    ),
  },
});
