module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.module = Object.assign(config.module, {
      loaders: [{
        test: /\.jsx$/,
        loader: 'babel'
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }]
    })
    return config
  }
}
