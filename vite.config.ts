import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";

const reactComilerConfig = {};

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler", reactComilerConfig]],
			},
		}),
		createHtmlPlugin({
			minify: true,
		}),
		tsconfigPaths(),
	],
});
