import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPath from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), viteTsConfigPath()],
});
