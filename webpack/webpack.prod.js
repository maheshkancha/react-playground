const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("MaheshKhadkaTech"),
    }),
  ],
};
