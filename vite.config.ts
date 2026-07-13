import { resolve } from "node:path";
import { globSync } from "glob";
import posthtml from "posthtml";

import include from "posthtml-include";
import { defineConfig } from "vite";

// pages フォルダ内の HTML をエントリーポイントとして取得
const inputEntries = Object.fromEntries(
	globSync("src/pages/**/*.html").map((file) => [
		file.replace(/^src\/pages\//, "").replace(".html", ""),
		resolve(__dirname, file),
	]),
);

export default defineConfig({
	// pages をルートとして設定
	root: "src/pages",
	plugins: [
		{
			name: "posthtml",
			async transformIndexHtml(html) {
				const result = await posthtml()
					.use(include({ root: "./src" }))
					.process(html, { sync: true });
				return result.html;
			},
		},
	],

	build: {
		// ルートが src/pages なので、dist はプロジェクト直下へ
		outDir: "../../dist",
		rollupOptions: {
			input: inputEntries,
		},
	},

	server: {
		port: 5173,
		open: "/index.html",
		// root が src/pages になったため、親階層の src/ts を読み込めるように許可する
		fs: {
			allow: ["../.."],
		},
	},
});
