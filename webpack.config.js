const path = require("path");
const { resolve } = path;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

// 设置nodejs环境变量
// process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    //文件名
    filename: "js/build.js",
    //绝对路径 文件夹名
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],css-loader将css转为commonjs模块，style-laoder将模块插入页面中
        // 这个loader取代style-loader 作用：提取js中的css成单独文件
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          /* 
          css兼容性处理：postcss --> postcss-loader postcss-preset-env。
          帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
          "browserslist":{
            开发环境 --> 设置node环境变量：process.env.NODE_ENV=development 
            "development":["last 1 chrome version","last 1 firefox version","last 1 safari version"],
            生产环境：默认是看生产环境 
            "production":[">0.2%","not dead","not op_mini all"]
          }
          */
          // 使用loader的默认配置 修改loader的配置
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        // less-loader将less转换为css
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix:true
        },
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
          name: "[name][hash:8].[ext]",
          outputPath: "img",
        },
        // 设置防止通过webpack内置的类型导入
        type: "javascript/auto",
      },
      {
        // 匹配字体或其他不需特殊处理的内容
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, // 匹配取非：exclude: [/\.(css|js|less|jpe?g|png|mjs|jsx|ts|tsx|html|json)$/],
        // asset/内联模块的 generator 选项
        type: "asset/inline",
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
    new MiniCssExtractPlugin({
      // 文件进行重命名
      filename: "css/main.css",
    }),
    // 压缩css
    // new OptimizeCssAssetsWebpackPlugin(),
  ],
  // devlopment:会将process.env.NODE_ENV设置为development。启用NamedChunksPlugin和NamedModulesPlugin
  // production:会设置process.env.NODE_ENV为production。启用FlagDependencyUsagePlugin,FlagIncludedChunksPlugin,ModuleConcatenationPlugin,NoEmitOnErrorsPlugin,OccurrenceOrderPlugin,SideEffectsFlagPlugin,UglifyJsPlugin
  mode: "development", //production,development
  // mode:'production',
  // 开发服务器：自动编译代码、打开｜刷新浏览器
  // 特点：只会在内存中编译打包 不会有任何输出
  // 启动devServer指令为yarn webpack serve
  devServer: {
    // 构建前的路径
    static: {
      directory: path.join(__dirname, "src"),
    },
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true,
  },
};
