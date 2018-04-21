var webpack = require('webpack');


module.exports = {
  entry: {
    firstComp: './scripts/app.js',
    output: {
    filename: 'bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
},
 plugins: [
   new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",
  minChunks: function(module){
    return module.context && module.context.indexof("node_modules") !== -1;
  }
})

 ]
  }
};
