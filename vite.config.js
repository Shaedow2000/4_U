import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/4U/",
  plugins: [tailwindcss()],
});
