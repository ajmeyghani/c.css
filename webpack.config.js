const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const glob = require("glob");

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
    "lists": glob.sync("./src/lists/**/*.css"),
    "tables": glob.sync("./src/tables/**/*.css"),
    "layout": glob.sync("./src/layout/**/*.css"),
    "misc": glob.sync("./src/misc/**/*.css"),

    "arrange": glob.sync("./src/arrange/**/*.css"),

    "docs": "./template/docs.css"
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
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      publicPath: "/css",
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      title: "c.css",
      filename: "public/index.html",
      template: "template/index.tpl.html",
      chunks: ["c", "docs"]
    }),
    new HtmlWebpackPlugin({
      title: "c.css -- arrange",
      filename: "public/arrange.html",
      template: "template/arrange.tpl.html",
      chunks: ["core", "arrange", "docs"]
    })
  ],

};
