module.exports = {
  'plugins': ['jsdoc'],
  'rules': {
    /**
     * jsdoc
     */
    // 型名(number, string, etc...)が正しいか確認
    // https://github.com/gajus/eslint-plugin-jsdoc#check-types
    'jsdoc/check-types': 0,
    // @paramにtypeを強制
    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
    'jsdoc/require-param-type': 0,
    // @returnsにdescriptionを強制
    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-description
    'jsdoc/require-returns-description': 0,
    // @returnsにtypeを強制
    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-type
    'jsdoc/require-returns-type': 0
  }
};
