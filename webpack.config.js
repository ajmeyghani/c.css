const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "development",
  entry: {
    "modern.css": [
      "minireset.css/minireset.css",
      "./src/header.css",
      ...glob.sync("./src/**/*.css", { ignore: "./src/**/header.css" }),
    ],
  },
  output: {
    path: path.resolve("build"),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "modern.css",
      ignoreOrder: true,
    }),
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
