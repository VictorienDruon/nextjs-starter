import { defineConfig } from "@pandacss/dev";
import { theme } from "@/styles/theme";

export default defineConfig({
	preflight: true,
	presets: [theme],
	include: ["./src/**/*.{ts,tsx}"],
	exclude: [],
	outdir: "styled-system",
	jsxFramework: "react",
});
