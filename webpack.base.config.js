module.exports = {
  module: {
    loaders: []
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css', '.md']
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    noInfo: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      chunkModules: false,
      modules: false,
      cached: false,
      reasons: false,
      source: true,
      errorDetails: true,
      chunkOrigins: true,
      children: false
    }
  }
};
