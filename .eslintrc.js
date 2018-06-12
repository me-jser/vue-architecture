// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 分号代表语句的结束，缺少分号容易导致解析错误，尤其是在uglify以后
    //semi:'always',
    // FIXME: 可行性
    'no-space-before-semi': true,
    /**
     * 由于使用了cdn，会误报一部分undefind，关闭
    */
    'no-undef': 'off',
    /**
     * vue组件中的换行可能会被误报，暂时关闭 // todo: confirm
    */
    'no-ta': 'off',
    /**
     * vue组件中的换行可能会被误报，暂时关闭 // todo: confirm
    */
    'no-tabs': 'off'
  }
}
