import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

export default [{
  'languageOptions': {
    'globals': globals.node
  },
  'plugins': {'n': nodePlugin},
  'rules': {
    // callback の return 強制
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
    'n/callback-return': 2,
    // exportsスタイル強制
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
    'n/exports-style': [2, 'module.exports'],
    // top-level 以外での require を禁止
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
    'n/global-require': 2,
    // callback のエラーハンドリング強制
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
    'n/handle-callback-err': 2,
    // depreactedなAPIを警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
    'n/no-deprecated-api': 2,
    // import先が存在しない場合警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
    'n/no-missing-import': 2,
    // require先が存在しない場合警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
    'n/no-missing-require': 2,
    // require 内のモジュール形式 / 通常変数の混在禁止
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
    'n/no-mixed-requires': [2, {'grouping': true}],
    // new require の禁止
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
    'n/no-new-require': 2,
    // __dirname / __filename の直接連結禁止
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
    'n/no-path-concat': 2,
    // process.env 禁止
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
    'n/no-process-env': 0,
    // process.exit 禁止
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
    'n/no-process-exit': 2,
    // 制限モジュールの使用禁止 (require関数)
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
    'n/no-restricted-require': 0,
    // 同期メソッド禁止
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
    'n/no-sync': 0,
    // binがpackage.jsonのfilesにない場合に警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
    'n/no-unpublished-bin': 2,
    // publishされないモジュールをimportした場合警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
    'n/no-unpublished-import': 2,
    // publishされないモジュールをrequireeした場合警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
    'n/no-unpublished-require': 2,
    // 当該Node.jsバージョンで未サポートのSyntaxを警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'n/no-unsupported-features/es-syntax': 2,
    // 当該Node.jsバージョンで未サポートの組み込みAPIを警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'n/no-unsupported-features/node-builtins': 2,
    // shebangが不正に利用されていた場合警告
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/shebang.md
    'n/shebang': 2
  }
}];
