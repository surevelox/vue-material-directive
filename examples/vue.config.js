const path = require("path");
const modulesPath = path.resolve(__dirname);
const nodePath = path.join(modulesPath, "../node_modules");
console.log(
  "this is module path***************" +
    nodePath +
    "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
);

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Prefer Dart Sass
        implementation: require("sass"),

        // See https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
        sassOptions: {
          includePaths: [nodePath]
        }
      }
    }
  }
};
