module.exports = {
  'globals': {
    '$Abstract': true,
    '$All': true,
    '$Diff': true,
    '$Enum': true,
    '$Either': true,
    '$Exact': true,
    '$Exports': true,
    '$Keys': true,
    '$NonMaybeType': true,
    '$PropertyType': true,
    '$Shape': true,
    '$Subtype': true,
    '$Supertype': true,
    '$Tuple': true,
    '$Type': true,
    'Class': true,
    'ReactClass': true,
    'ReactComponent': true,
    'ReactElement': true
  },
  'plugins': ['flowtype'],
  'rules': {
    // boolean typeのスタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/boolean-style': [2, 'boolean'],
    // 未定義のflowtypeを警告
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': [2, {'no-use-before-define': [2, 'nofunc']}],
    // ケツカンマのスタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/delimiter-dangle': [2, 'never'],
    // genericsの空白スタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/generic-spacing': [2, 'never'],
    // キーの重複禁止
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/no-dupe-keys': 2,
    // 逃げの型を禁止
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/no-weak-types': 0,  // 逃げたいときはある
    // 引数の型付けを強制
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/require-parameter-type': 0,  // flow側にまかせたいときがある
    // 戻り値の型付けを強制
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/require-return-type': 0,  // flow側にまかせたいときがある
    // flow annotationを強制
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/require-valid-file-annotation': 2,
    // セミコロンのスタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/semi': [2, 'always'],
    // プロパティの並び順
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/sort-keys': [2, 'asc', {'caseSensitive': true, 'natural': false}],
    // コロン後の空白スタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/space-after-type-colon': [2, 'always'],
    // generics括弧前の空白スタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/space-before-generic-bracket': [2, 'never'],
    // コロン前の空白スタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/space-before-type-colon': [2, 'never'],
    // type名のフォーマット
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]*)+$'],
    // union, intersectionの空白スタイル
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/union-intersection-spacing': [2, 'always'],
    // type aliasを使用したものと解釈
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/use-flow-type': [2, {'no-unused-vars': 1}]
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  }
};
