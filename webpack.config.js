const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const glob = require("glob");
const baseModules = [];

/* TODO: generate with a loop and a list of config. */
const htmlPages = [
  new HtmlWebpackPlugin({
    title: "c.css",
    filename: "public/index.html",
    template: "pages/index.tpl.html",
    chunks: ["c", "docs"]
  }),
  new HtmlWebpackPlugin({
    title: "c.css - arrange",
    filename: "public/arrange.html",
    template: "pages/arrange.tpl.html",
    chunks: ["core", "layout", "docs"]
  }),
  new HtmlWebpackPlugin({
    title: "c.css - space",
    filename: "public/space.html",
    template: "pages/space.tpl.html",
    chunks: ["core", "layout", "docs"]
  }),
  new HtmlWebpackPlugin({
    title: "c.css - content-mode",
    filename: "public/content-mode.html",
    template: "pages/content-mode.tpl.html",
    chunks: ["core", "typography", "layout", "modes", "docs"]
  }),
  new HtmlWebpackPlugin({
    title: "c.css - lists",
    filename: "public/lists.html",
    template: "pages/lists.tpl.html",
    chunks: ["core", "typography", "lists", "docs"]
  }),
  new HtmlWebpackPlugin({
    title: "c.css - typography",
    filename: "public/typography.html",
    template: "pages/typography.tpl.html",
    chunks: ["core", "typography", "buttons", "layout", "docs"]
  }),
  new HtmlWebpackPlugin({
    title: "c.css - Login Page Example",
    filename: "public/login.html",
    template: "pages/login.tpl.html",
    chunks: ["core", "typography", "buttons", "layout", "docs"]
  }),
  new HtmlWebpackPlugin({
    title: "c.css - colors",
    filename: "public/colors.html",
    template: "pages/colors.tpl.html",
    chunks: ["core", "typography", "visual", "layout", "docs"]
  }),
];

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
    publicPath: "/css",
    ignoreOrder: true,
  }),
  ...htmlPages,
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
