var extend = require('extend');
var base = require('./');

module.exports = extend(true, {}, base, {
  'ecmaFeatures': {'jsx': true},
  // npm install eslint-plugin-react
  'plugins': ['react'],

  'rules': {
    /**
     * Best Practices
     */
    // 不正な this 禁止
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 0, // ES7 Property Initializers の関数をうまく判定できない

    /**
     * React
     */
    // displayName属性有無
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': [2, {'acceptTranspilerName': true}],
    // 曖昧な PropTypes 禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': 0,  // 一旦無視
    // 暗黙の属性値 true の禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': [2, 'always'], //
    // 閉じタグの場所強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': [2, {location: 'tag-aligned'}],
    // 属性式内のスペーススタイル
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': [2, 'never', {'allowMultiline': true}],
    // 属性のインデントスタイル
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': [2, 2],
    // 1行あたりの最大属性数
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': [2, 2],
    // props の重複禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': 2,
    // 未定義の React コンポーネントを使用禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 2,
    // propTypes の定義をアルファベット順に制限
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
    'react/jsx-sort-prop-types': 2,
    // props の使用をアルファベット順に制限
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': 2,
    // React 的に不適切な箇所での no-unused-vars 発動禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 2,
    // JSX 内で使用中の変数への no-unused-vars 発動禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 2,
    // dangerouslySetInnerHTML の禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 0,  // 使うときは覚悟を持って使う
    // componentDidMount 内での setState 禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    // componentDidUpdate 内での setState 禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 2,
    // state の直接更新禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 2,
    // 1 ファイル内複数コンポーネント定義を禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 2,
    // setState 禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 0,  // ストイックすぎる
    // 不適切な DOM 属性使用の禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 2,
    // propTypes 未定義の props 使用禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 2,
    // JSX スコープ内の React 定義を必須化
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 2,
    // require で拡張子を強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
    'react/require-extension': 0,
    // コンポーネントの不要な閉じタグを禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 2,
    // React コンポーネントメソッド定義順
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      2,
      {
        'order': [
          'lifecycle',
          'everything-else',
          '/^on.+$/',
          '/^get.+$/',
          '/^render.+$/',
          'render'
        ],
        'groups': {
          'lifecycle': [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'getStores',
            'calculateState',
            'state',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    // 括弧のない複数行の JSX を禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
    'react/wrap-multilines': 2
  }
});
