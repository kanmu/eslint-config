var extend = require('extend');
var base = require('./');

module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
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
     * Stylistic Issues
     */
    // JSX 属性のクオートスタイル
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [2, 'prefer-double'],

    /**
     * React
     */
    // displayName属性有無
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': [2, {'ignoreTranspilerName': false}],
    // Reactコンポーネントに特定のpropsを禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': 2,  // className, styleを禁止
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
    // 属性のイコール周辺の空白スタイル
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': [2, 'never'],
    // Componentのファイル拡張子を強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [2, {'extensions': ['.js']}],
    // JSXの最初のプロパティの改行方法を指定
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    // コンポーネントのイベントハンドラ名prefix強制 (ex. <Comp onChange={this.handleChange} />)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': 0,
    // JSXタグのインデント
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': [2, 2],  // スペース2
    // 属性のインデントスタイル
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': [2, 2],
    // key属性付与を強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 2,
    // 1行あたりの最大属性数
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': [2, {'maximum': 2}],
    // propsでの.bind() or arrow function禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': 0,  // flowの都合上bindつかってる
    // JSX内TextNodeコメント禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 2,
    // props の重複禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': 2,
    // findDOMNodeの使用禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 2,
    // target='_blank'の禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': 2,
    // 未定義の React コンポーネントを使用禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 2,
    // コンポーネント名にパスカルケースの使用を強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': 2,
    // props の使用をアルファベット順に制限
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [2, {'callbacksLast': true, 'shorthandFirst': true}],  // 値なしは最初、callback(onXXX)系は最後に
    // jsxタグの空白ルール
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': 2,
    // React 的に不適切な箇所での no-unused-vars 発動禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 2,
    // JSX 内で使用中の変数への no-unused-vars 発動禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 2,
    // 括弧のない複数行の JSX を禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': 2,
    // children propsを禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 2,  // flowの関係上使いたい場合がある
    // dangerouslySetInnerHTML の禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 0,  // 使うときは覚悟を持って使う
    // childrenとdangerouslySetInnerHTMLの同時使用を禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 2,
    // deprecatedな記法を警告
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 0,  // 必要なさそう
    // componentDidMount 内での setState 禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': 2,
    // componentDidUpdate 内での setState 禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 2,
    // state の直接更新禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 2,
    // isMounted()を禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 2,
    // 1 ファイル内複数コンポーネント定義を禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 2,
    // renderの戻り値の使用を禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 2,
    // setState 禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 0,  // ストイックすぎる
    // 文字列refの禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 2,
    // escapeしていないmarkupを禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 2,
    // 不適切な DOM 属性使用の禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 2,
    // 使用していないpropsを禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': 2,
    // propTypes 未定義の props 使用禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 2,
    // JSX スコープ内の React 定義を必須化
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 2,
    // shouldComponentUpdateを強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': 0,
    // renderでreturnを強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 2,
    // ES6 class を使うよう強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': 2,
    // stateless Componentを使うよう強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 2,
    // コンポーネントの不要な閉じタグを禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': [2, {'component': true, 'html': true}],
    // 閉じタグ前に空白を強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    'react/jsx-space-before-closing': [2, 'always'],
    // React コンポーネントメソッド定義順
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      2,
      {
        'order': [
          'type-annotations',
          'static-methods',
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
            'props',
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
    // propTypes の定義をアルファベット順に制限
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
    'react/sort-prop-types': 2,
    // style propsをObjectに強制
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 2
  }
};
