import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/wedding/", // обязательно со слэшем в начале и конце
  plugins: [react()],
});
