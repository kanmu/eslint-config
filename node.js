module.exports = {
  'env': {
    'node': true
  },
  'plugins': ['node'],
  'rules': {
    // exportsスタイル強制
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    'node/exports-style': [2, 'module.exports'],
    // depreactedなAPIを警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 2,
    // import先が存在しない場合警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    'node/no-missing-import': 2,
    // require先が存在しない場合警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-require': 2,
    // binがpackage.jsonのfilesにない場合に警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': 2,
    // publishされないモジュールをimportした場合警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 2,
    // publishされないモジュールをrequireeした場合警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': 2,
    // 当該Node.jsバージョンで未サポートの記法を警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
    'node/no-unsupported-features': 2,
    // shebangが不正に利用されていた場合警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': 2
  }
};
