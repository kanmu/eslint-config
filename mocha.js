module.exports = {
  'env': {
    'mocha': true
  },
  'rules': {
    /**
     * Best Practices
     */
    // マジックナンバー禁止
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 0,  // assert対象はしょうがない

    /**
     * Node.js
     */
    // top-level 以外での require を禁止
    // http://eslint.org/docs/rules/global-require
    'global-require': 0,  // beforeEach等でrequireしたい

    /**
     * Stylistic Issues
     */
    // callback ネスト数の制限
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [1, 12],  // describe, context ネスト上等なので緩和

    /**
     * Legacy
     */
    // 関数内の文の数
    // http://eslint.org/docs/rules/max-statements
    'max-statements': 0  // 必然的に多くなるので除外
  }
}
