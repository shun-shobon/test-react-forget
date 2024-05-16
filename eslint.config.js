import { shun_shobon } from "@shun-shobon/eslint-config";
// @ts-expect-error: This plugin doesn't have types
import reactCompilerPlugin from "eslint-plugin-react-compiler";

export default shun_shobon(
	{},
	{
		name: "shun-shobon/react-compiler",
		plugins: {
			"react-compiler": reactCompilerPlugin,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
);
