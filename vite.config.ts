import react from "@vitejs/plugin-react";
import path from "path";
import {
	type TerserOptions,
	type UserConfig,
	defineConfig,
	loadEnv,
} from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import viteTsConfigPath from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const isProd = mode === "production";
	const env = loadEnv(mode, process.cwd());
	const isSourceMapEnabled = env.VITE_DEBUG_SOURCEMAP
		? env.VITE_DEBUG_SOURCEMAP === "true"
		: false;
	const minifyOption = env.VITE_MINIFY_OPTION ?? "esbuild";
	const terserOption: TerserOptions = {
		mangle: true, //변수 및 함수 이름을 축소하여 파일 크기를 줄입니다
		compress: {
			dead_code: true,
			drop_console: true,
			drop_debugger: true,
			inline: true, // 가능한 모든 코드를 인라인화
			reduce_vars: true, // 변수 재사용 최적화
			collapse_vars: true, // 불필요한 변수 축소
			passes: 3, // 여러 번 압축 실행
		},
		sourceMap: isSourceMapEnabled,
		output: {
			ascii_only: true, // ASCII 문자만 출력 (공백 방지)
			beautify: false, // 코드 가독성 제거 (최적화)
			comments: false, // 모든 주석 제거
			quote_style: 1, // 가능하면 작은따옴표 사용
			keep_quoted_props: true, // 따옴표로 감싼 속성 유지
			semicolons: false, // 필요하지 않은 경우 세미콜론 제거
			wrap_iife: false, // 즉시 실행 함수(IIFE) 개행 방지
		},
		keep_fnames: false, //함수 이름축소
	};
	const optionsToReturn: UserConfig = {
		resolve: {
			alias: {
				"@": path.relative(__dirname, "src"),
			},
		},
		plugins: [
			react(),
			viteTsConfigPath(),
			viteStaticCopy({
				targets: [{ src: "src/assets/*", dest: "static/" }], //dev 서버 경로와 배포시 보여질 dest 경로 매칭
			}),
		],
		build: {
			outDir: "build", //build 폴더를 dist->build 로 변경
			assetsDir: "static", //build/static 으로 asset 경로 변경
			sourcemap: isProd || isSourceMapEnabled ? false : "hidden",
			commonjsOptions: {
				transformMixedEsModules: true,
			},
			minify: minifyOption === "esbuild" ? "esbuild" : "terser",
			terserOptions: minifyOption === "terser" ? terserOption : undefined,
		},
	};
	return optionsToReturn;
});
