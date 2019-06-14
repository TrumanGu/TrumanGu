module.exports = {
  presets: [
    '@vue/babel-preset-app'
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    ["import", {
      "libraryName": "iview",
      "libraryDirectory": "src/components"
    }]]
}
