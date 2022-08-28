module.exports = {
  'env': {
    'node': true
  },
  'plugins': ['node'],
  'rules': {
    // callback の return 強制
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
    'node/callback-return': 2,
    // exportsスタイル強制
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    'node/exports-style': [2, 'module.exports'],
    // top-level 以外での require を禁止
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
    'node/global-require': 2,
    // callback のエラーハンドリング強制
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
    'node/handle-callback-err': 2,
    // depreactedなAPIを警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 2,
    // import先が存在しない場合警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    'node/no-missing-import': 2,
    // require先が存在しない場合警告
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-require': 2,
    // require 内のモジュール形式 / 通常変数の混在禁止
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
    'node/no-mixed-requires': [2, {'grouping': true}],
    // new require の禁止
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
    'node/no-new-require': 2,
    // __dirname / __filename の直接連結禁止
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
    'node/no-path-concat': 2,
    // process.env 禁止
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
    'node/no-process-env': 0,
    // process.exit 禁止
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
    'node/no-process-exit': 2,
    // 制限モジュールの使用禁止 (require関数)
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md
    'node/no-restricted-require': 0,
    // 同期メソッド禁止
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
    'node/no-sync': 0,
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
