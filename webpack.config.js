const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Don Pastor',
      filename: 'index.html',
      meta: {
        author: 'Ricardo Valtierra',
        'og:image': { property: 'og:image', content: 'https://raw.githubusercontent.com/ricardovaltierra/restaurant/master/src/assets/img/og_linkedin_image.png' },
        'linkedin:image': { name: 'linkedin:image', content: 'https://raw.githubusercontent.com/ricardovaltierra/restaurant/master/src/assets/img/og_linkedin_image.png' },
        'og:url': { property: 'og:url', content: 'https://restaurant-clone.netlify.app/' },
        'linkedin:card': 'summary',
        'og:description': { property: 'og:description', content: 'This is a tribute page from the official website \'donpastor.mx\'.' },
        'og:title': { property: 'og:title', content: 'Don Pastor' },
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
