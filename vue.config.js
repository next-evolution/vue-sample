module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:20080',
        //pathRewrite: { "^/api/": "" },
        changeOrigin: true,
      },
    },
  },
}
