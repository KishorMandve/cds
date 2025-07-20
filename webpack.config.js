const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // uncomment line below in case you want to change entry point
  entry: './src/index.jsx', // to change entry point
  module: {
    rules: [
      {
       test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',    // Inject CSS into DOM
          'css-loader',      // Translate CSS into CommonJS
          {
            loader: 'sass-loader', // Compile Sass to CSS
            options: {
              implementation: require('node-sass'), // Use node-sass explicitly
              sassOptions: {
                includePaths: ['src/'],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      // change it in case you want to change entry point such that; 
      // template: "./src_1/index.html", 
      template: "./src/index.html", 
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", '.scss', '.sass']  // so you can omit extensions
  }
};