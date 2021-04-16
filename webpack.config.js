const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "/src/index.html"),
    compress: true,
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      https: true,
    },
  },
  entry: {
    bundle: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "/src/index.html"),
    }),
  ],
};
