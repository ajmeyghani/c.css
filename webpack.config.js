const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/modern.css",
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
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: ".",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
