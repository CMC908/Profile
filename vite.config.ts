import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Enables external access via IPv6 and local network
    port: 8080,
    fs: {
      allow: [
        path.resolve(__dirname),               // Allow root directory
        path.resolve(__dirname, "client"),     // Allow ./client
        path.resolve(__dirname, "shared")      // Allow ./shared
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"]
    }
  },
  build: {
    outDir: "dist/spa"
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client") // Shortcut for '@/components', etc.
    }
  }
}));
