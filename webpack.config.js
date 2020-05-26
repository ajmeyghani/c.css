const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pages = require("./pages.config");
const path = require("path");
const glob = require("glob");
const baseModules = [];

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
    publicPath: "/css",
    ignoreOrder: true,
  }),
  ...pages.map(p => (new HtmlWebpackPlugin(p))),
];

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    "c": [
      "minireset.css/minireset.css",
      "./src/header.css",
      ...glob.sync("./src/**/*.css", { ignore: "./src/**/header.css" }),
    ],

    "core": [
      "minireset.css/minireset.css",
      ...glob.sync("./src/properties/**/*.css")
     ],

    "properties": glob.sync("./src/properties/**/*.css"),
    "typography": glob.sync("./src/typography/**/*.css"),
    "modes": glob.sync("./src/modes/**/*.css"),

    "layout": glob.sync("./src/layout/**/*.css"),
    "grid": glob.sync("./src/layout/grid/**/*.css"),
    "arrange": glob.sync("./src/layout/arrange/**/*.css"),
    "space": glob.sync("./src/layout/space/**/*.css"),

    "elements": glob.sync("./src/elements/**/*.css"),
    "lists": glob.sync("./src/elements/lists/**/*.css"),
    "tables": glob.sync("./src/elements/tables/**/*.css"),
    "forms": glob.sync("./src/elements/forms/**/*.css"),
    "buttons": glob.sync("./src/elements/buttons/**/*.css"),

    "visual": glob.sync("./src/visual/**/*.css"),
    "colors": glob.sync("./src/visual/colors.css"),

    "docs": "./pages/docs.css"
  },

  output: {
    path: path.resolve("build"),
    filename: "temp/[name].js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ".",
            },
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "postcss-loader"
        ],
      },
    ],
  },

  plugins,

};
