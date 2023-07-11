module.exports = {
  mode: "development",
  entry: `/src/index.js`,
  devServer: {
    static: "dist",
    open: true
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  }
};