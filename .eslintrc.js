// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
      sourceType: 'module'
  },
  env: {
      browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
      'html'
  ],
  // add your custom rules here
  'rules': {
      "indent": [2, 4],
      // let is block-scoped rather than function-scoped like var
      "no-var" : 2,
      "no-console": 1,
      "camelcase": 2,
      "curly": [2, "all"],
      "complexity": [2, 9],
      "no-eval": 2,
      "no-case-declarations": 2,
      "brace-style": [2, "1tbs", {"allowSingleLine": true}],
      "space-in-parens": 2,
      "arrow-parens": 2,
      "comma-style": 2,
      "new-cap": 2,
      "radix": 2,
      "no-iterator": 2,
      "max-depth": 2,
      "no-dupe-args": 2,
      "use-isnan": 2,
      "no-dupe-class-members": 2,
      "no-duplicate-imports": 2,
      "arrow-spacing": 2,
      "prefer-arrow-callback": 0, // 待统一改
      "generator-star-spacing": 0,
      "semi": [2, "always"],
      "no-undef": 0,
      "space-before-function-paren": ["error", "never"],
      "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
      "no-multiple-empty-lines": [1, {"max": 2}], //空行不得多于两行
      "eol-last": 0,//文件以单一的换行符结束
      "spaced-comment": 2,//注释风格要不要有空格什么的
      "eqeqeq": 0,//全等
      "no-new": 0,//禁止在使用new构造一个实例后不赋值
      "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
