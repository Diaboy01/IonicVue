module.exports = {
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify")
    }
  }
};