module.exports = {
  presets: [
    '@vue/babel-preset-app'
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    ["import", {
      "libraryName": "iview",
      "libraryDirectory": "src/components"
    }],
    ["prismjs", {
      "languages": [
        "javascript",
        "css",
        "markup",
        // "graphql",
        // "python",
        // "java",
        // "typescript",
        // "css-extras",
        // "json",
        // "scss",
        // "git",
        // "jsx"
      ],
      "plugins": [
        "line-numbers",
      ],
      "theme": "solarizedlight",
      "css": true
    }]
  ],
}
