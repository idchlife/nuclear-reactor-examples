module.exports = {
  entry: {
    'todo-typescript-preact': './todo-typescript-preact/app',
    'todo-js-react': './todo-js-react/app.js'
  },
  output: {
    filename: './[name]/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}