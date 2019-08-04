module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    quotes: ["error", "double"]
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/recommended", "@vue/prettier"]
};