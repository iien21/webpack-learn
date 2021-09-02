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
      {
        test: /\.(jpe?g|png|git)$/,
        loader: "url-loader",
        options: {
          // 图片小于10kb，就会被base64处理
          // 优点：减少请求数量 减轻服务器压力
          // 缺点：图片体积会更大 请求速度更慢
          limit: 10 * 1024,
          // url-loader默认使用es6模块解析，而html-loader是commonjs 所以关闭url-loader的模块化
          esModule: false,
          // 给图片进行重命名 [hash:10]取图片的hash的前10位 [ext]取文件原来扩展名
          name: "[hash:10].[ext]",
        },
      },
      {
        test: /\.html$/,
        // 处理html文件的img 从而能被url-loader处理
        loader: "html-loader",
        options: {
          // url-loader默认使用es6模块解析，而html-loader是commonjs 所以关闭url-loader的模块化
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    // 默认自创html并引入js，需要设置template来复制index主页
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  mode: "development", //production,development
};
