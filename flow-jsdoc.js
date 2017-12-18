module.exports = {
  'plugins': ['jsdoc'],
  'rules': {
    /**
     * Possible Errors
     */
    // 不正な JSDoc を禁止
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 0,  // plugin-jsdocを利用するので無効化

    /**
     * jsdoc
     */
    // https://github.com/gajus/eslint-plugin-jsdoc#check-param-names
    // @paramと引数名の一致を確認
    'jsdoc/check-param-names': 2,
    // https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names
    // タグの名前(@param, @returns, etc...)が正しいか確認
    'jsdoc/check-tag-names': 2,
    // https://github.com/gajus/eslint-plugin-jsdoc#check-types
    // 型名(number, string, etc...)が正しいか確認
    'jsdoc/check-types': 0,
    // https://github.com/gajus/eslint-plugin-jsdoc#newline-after-description
    // descriptionのあとに改行を強制
    'jsdoc/newline-after-description': 2,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-description-complete-sentence
    // descriptionを文章形式にすることを強制
    'jsdoc/require-description-complete-sentence': 0,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-example
    // @exampleを強制
    'jsdoc/require-example': 0,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-hyphen-before-param-description
    // @paramの説明の前にハイフンを強制
    'jsdoc/require-hyphen-before-param-description': 2,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-param
    // @paramを強制
    'jsdoc/require-param': 2,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-description
    // @paramにdescriptionを強制
    'jsdoc/require-param-description': 2,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-name
    // @paramにnameを強制
    'jsdoc/require-param-name': 2,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
    // @paramにtypeを強制
    'jsdoc/require-param-type': 0,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-description
    // @returnsにdescriptionを強制
    'jsdoc/require-returns-description': 0,
    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-type
    // @returnsにtypeを強制
    'jsdoc/require-returns-type': 0
  },
  'settings': {
    'jsdoc': {
      // タグ名のエイリアスを定義
      'tagNamePreference': {
        'returns': 'return'
      }
    }
  }
};
