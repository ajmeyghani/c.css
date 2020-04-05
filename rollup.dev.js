import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import clear from "rollup-plugin-clear";
import postcss from "rollup-plugin-postcss";

const postCssConfig = postcss({
  extensions: [".css"],
  extract: "dist/modern.css",
  inject: false,
});

const resolveConf = resolve({
  customResolveOptions: {
    moduleDirectory: "src",
  },
});

const clean = clear({
  targets: ["umd", "esm"],
  watch: false,
});

const commonPlugins = [postCssConfig, resolveConf, commonjs(), clean];

const modules = [
  {
    input: "./src/index.js",
    output: {
      name: "moderncss",
      file: "./dist/index.js",
      sourcemap: true,
    },
    external: [],
    plugins: commonPlugins,
  },
];

export default modules;
