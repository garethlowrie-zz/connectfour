const path = require('path');
const paths = require("./paths.ts")

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/app.tsx",
  resolve: {
    extensions: ["*", '.mjs', ".css", ".less", ".ts", ".tsx", ".js", ".json"],
    modules: [paths.base, 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        include: [paths.server, paths.src],
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join(paths.base, 'tsconfig.json')
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: [path.join(paths.src, 'components'), path.join(paths.src, 'less')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              namedExport: true,

              sourceMap: true,
              camelCase: true, // Camelize class names
              // sourceMap: true, TODO: Delete this - not needed
              importLoaders: 2, // // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              localIdentName: '[folder]-[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        include: [paths.src, paths.images],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      }
    ]
  },
  plugins: [htmlPlugin]
};
