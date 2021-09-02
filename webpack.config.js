const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    //文件名
    filename: "build.js",
    //绝对路径 文件夹名
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      // css-loader将css转为commonjs模块，style-laoder将模块插入页面中
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.less$/,
        // less-loader将less转换为css
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    // 默认自创html并引入js，需要设置template来复制index主页
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  mode: "development", //production,development
};
