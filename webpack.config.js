const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    "modern.css": [
      "minireset.css/minireset.css",
      "./src/header.css",
      ...glob.sync("./src/**/*.css", { ignore: "./src/**/header.css" }),
    ],
  },
  output: {
    path: path.resolve("build"),
    publicPath: "/"
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "modern.css",
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      title: "c::css",
      filename: "public/index.html",
      template: "template/index.tpl.html"
    })
  ],

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
};
