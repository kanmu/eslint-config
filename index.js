module.exports = {
  'parserOptions': {
    'sourceType': 'module'
  },
  'env': {
    'es6': true
  },

  'rules': {
    /**
     * Possible Errors
     */
    // ケツカンマスタイル
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 2,
    // 評価文内の変数代入禁止
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': 2,
    // console 禁止
    // http://eslint.org/docs/rules/no-console
    'no-console': 1,
    // 条件としての定数使用禁止
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': [2, {'checkLoops': false}],  // 無限ループ用は許容
    // 正規表現内の不可視範囲 ASCII コントロール文字使用禁止
    // http://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 2,
    // debugger 禁止
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 2,
    // 引数名重複禁止
    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 2,
    // キー名重複禁止
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 2,
    // case 重複禁止
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 2,
    // 空の文字クラス (正規表現内の []) 禁止
    // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 2,
    // 空ブロック禁止
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 2,
    // 例外引数への再代入禁止
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 2,
    // 条件評価用途での余分な !! キャスト禁止
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 2,
    // 余分な括弧を禁止
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [2, 'functions'],
    // 余分なセミコロン禁止
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 2,
    // 関数への再代入禁止
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 2,
    // top-level 以外の関数定義禁止 (ES2015 or later)
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 2,
    // 不正な正規表現を禁止
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 2,
    // イレギュラーな空白禁止
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': [2, {'skipRegExps': true, 'skipStrings': true}],  // 正規表現とテンプレートリテラル内は許容する
    // 意図しないNOT演算子を禁止
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 2,
    // Math, JSON の関数呼び出し禁止
    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 2,
    // Object.prototypeのメソッド利用禁止
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 2,
    // 正規表現内の連続空白禁止
    // http://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 2,
    // 要素のないカンマのみの配列禁止
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 2,
    // 文字列中のテンプレートリテラル埋め込み式を禁止
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 2,
    // 不正な複数行記述の禁止 (semi が off の場合のみ有効)
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 0,
    // 到達不能コード禁止
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 2,
    // finally内でのreturn, throw, break, continueを禁止
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 2,
    // isNaN() の使用強制
    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': 2,
    // 不正な JSDoc を禁止
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [2, {
      'preferType': {
        'Boolean': 'boolean',
        'function': 'Function',
        'Number': 'number',
        'object': 'Object',
        'String': 'string',
        'Symbol': 'symbol'
      },
      'requireReturn': false,
      'requireReturnDescription': false
    }],
    // 不正な type 文字列を禁止
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 2,

    /**
     * Best Practices
     */
    // getter / setter の組み合わせを強制
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 0,
    // Array系メソッドのコールバック関数で適切にreturnを使用することを強制
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 2,
    // C-style なブロック scope var を強制
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 0,
    // thisを参照していないメソッドを警告
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 2,
    // 複雑度
    // http://eslint.org/docs/rules/complexity
    'complexity': [1, 8],  // テスタブル JavaScript には 10 以下が適切とある
    // 一貫性のある return 必須化
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': [2, {'treatUndefinedAsUnspecified': true}],  // undefinedを返す場合は省略可能
    // ブロック用途の中括弧スタイル
    // http://eslint.org/docs/rules/curly
    'curly': [2, 'all'],
    // switch 文の default を強制
    // http://eslint.org/docs/rules/default-case
    'default-case': 2,
    // 改行時のドットの位置を強制
    // http://eslint.org/docs/rules/dot-location
    'dot-location': [2, 'property'],  // プロパティと同じ行
    // プロパティアクセス用途のドット表記スタイル
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [2, { 'allowKeywords': true }],
    // ===, !== 必須化
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': 2,
    // for-in ループで prototype チェーンのキーの使用防止
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 0,
    // alert 禁止
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 2,
    // case/default 文内での変数宣言にブロック構文を強制
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 2,
    // caller, callee 禁止
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 2,
    // 正規表現内の /= な表現禁止
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 2,
    // else 内 return 禁止
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 2,
    // コメントのない空関数禁止
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 2,
    // 変数が空になるような destructuring pattern を禁止
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 2,
    // null と == / != な比較演算子使用禁止
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 2,
    // eval 禁止
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 2,
    // native オブジェクト拡張禁止
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 2,
    // 不要な bind 禁止
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 2,
    // 不要なラベルの禁止
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 2,
    // case 文の意図しない fallthrough を禁止
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 2,
    // 読み取り専用グローバル変数への代入禁止
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 2,
    // 数字なしの小数点禁止
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 2,
    // 省略型キャスト表記禁止
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [2, {'allow': ['!!'], 'boolean': true, 'number': true, 'string': true}],
    // 暗黙の eval 禁止
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 2,
    // グルーバルスコープへのvar, named functionの禁止
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 2,
    // 不正な this 禁止
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 2,
    // __iterator__ 禁止
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 2,
    // label 禁止
    // http://eslint.org/docs/rules/no-labels
    'no-labels': 2,
    // 不要なブロック禁止
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 2,
    // ループ内関数禁止
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 2,
    // マジックナンバー禁止
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [2, {
      'enforceConst': true,  // const に縛りたい
      'ignore': [-2, -1, 0, 1, 2],
      'ignoreArrayIndexes': true  // 配列の添字は許可
    }],
    // 複数空白禁止
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 2,
    // 複数行文字列禁止
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 2,
    // 変数代入しない new 禁止
    // http://eslint.org/docs/rules/no-new
    'no-new': 2,
    // Function コンストラクタ禁止
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 2,
    // String, Number, Boolean のプリミティブ値での new 禁止
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 2,
    // 8 進数リテラル禁止
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 2,
    // 8 進数エスケープ禁止
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 2,
    // 引数への再代入禁止
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [2, {'props': true}],
    // process.env 禁止
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 0,
    // __proto__ 禁止
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 2,
    // 変数の再定義禁止
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': [2, {'builtinGlobals': true}],
    // 指定名称のプロパティアクセスを禁止
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': 0,
    // return 文での変数代入禁止
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 2,
    // 不要なawait文の禁止
    // http://eslint.org/docs/rules/no-return-await
    'no-return-await': 2,
    // URL 用途の javascript: 禁止
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 2,
    // 自己代入(同名変数への再代入)を禁止
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [2, {'props': true}],  // プロパティについても禁止
    // 同変数比較禁止 (x === x)
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 2,
    // 演算子用途のカンマ禁止
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 2,
    // リテラル例外禁止
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 2,
    // whileやforの条件式に変更されない変数の指定禁止
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,
    // 未使用の式禁止
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 2,
    // 未使用ラベルの禁止
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 2,
    // 不要な .call() / .apply() の禁止
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 2,
    // 不要な文字列連結の禁止
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 2,
    // 不要なエスケープの禁止
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 2,
    // 不要なreturn文の禁止
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 2,
    // void 禁止
    // http://eslint.org/docs/rules/no-void
    'no-void': 2,
    // TODO / FIXME などのコメント禁止
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 0,
    // with 禁止
    // http://eslint.org/docs/rules/no-with
    'no-with': 2,
    // parseInt() の基数パラメータ必須化
    // http://eslint.org/docs/rules/radix
    'radix': 2,
    // awaitのないasync関数禁止
    // https://eslint.org/docs/rules/require-await
    'require-await': 2,
    // var をスコープ最上部に強制
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 0,
    // 即時関数の括弧のスタイル
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': [2, 'inside', {'functionPrototypeMethods': true}],
    // 評価式内のリテラルと変数の記述順スタイル
    // http://eslint.org/docs/rules/yoda
    'yoda': [2, 'never'],

    /**
     * Strict Mode
     */
    // Strict Mode のスタイル
    // http://eslint.org/docs/rules/strict
    'strict': [2, 'global'],

    /**
     * Variables
     */
    // 変数定義のスタイル
    // http://eslint.org/docs/rules/init-declarations
     'init-declarations': 2,
    // catch 句のパラメータに同名変数使用禁止
    // http://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 2,
    // オブジェクトプロパティ以外への delete 禁止
    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 2,
    // 既存変数の label 使用禁止
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 2,
    // 指定グローバル変数の使用禁止
    // http://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 0,  // いったん指定するものなし
    // scope 内の同名変数定義禁止
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': 2,
    // 予約語の使用禁止
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 2,
    // 未定義変数禁止
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 2,
    // 不要な undefined 初期化禁止
    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 2,
    // undefined 禁止
    // http://eslint.org/docs/rules/no-undefined
    'no-undefined': 0,
    // 未使用変数禁止
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 2,
    // 定義前変数の使用禁止
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [2, 'nofunc'],  // 関数の場合は hoisting 有効

    /**
     * Node.js
     */
    // callback の return 強制
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 2,
    // top-level 以外での require を禁止
    // http://eslint.org/docs/rules/global-require
    'global-require': 2,
    // callback のエラーハンドリング強制
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 2,
    // require 内のモジュール形式 / 通常変数の混在禁止
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': [2, {'grouping': true}],
    // new require の禁止
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 2,
    // __dirname / __filename の直接連結禁止
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 2,
    // process.exit 禁止
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 2,
    // 制限モジュールの使用禁止 (module構文)
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 0,
    // 制限モジュールの使用禁止 (require関数)
    // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 0,
    // 同期メソッド禁止
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 0,

    /**
     * Stylistic Issues
     */
    // 配列括弧の空白スタイル
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': 2,
    // 1行ブロック内の空白スタイル
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': 0,  // brace-style で 1 行ブロックを制限しているため不要
    // 波括弧の書き方
    // http://eslint.org/docs/rules/brace-style
    'brace-style': [2, '1tbs', {'allowSingleLine': false}],
    // キャメルケース必須化
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 2,
    // コメントの英文の大文字小文字ルール
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 0,
    // カンマまわりの空白スタイル
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 2,
    // カンマの配置
    // http://eslint.org/docs/rules/comma-style
    'comma-style': [2, 'last'],
    // computed property の空白スタイル
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': 2,
    // this の逃避変数名
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': [2, 'self'],
    // ファイル末尾の空白行必須化
    // http://eslint.org/docs/rules/eol-last
    'eol-last': 2,
    // 関数呼び出しの括弧前の空白スタイル
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 2,
    // 関数名と代入先の変数・プロパティ名が合致
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 0,
    // 関数名を持たせるための function 式を強制
    // http://eslint.org/docs/rules/func-names
    'func-names': 2,
    // 関数定義スタイル
    // http://eslint.org/docs/rules/func-style
    'func-style': [2, 'declaration', {allowArrowFunctions: true}],
    // 変数名に使用禁止な名前リスト
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 0,
    // identifier (変数, 引数, プロパティ) の長さを制限
    // http://eslint.org/docs/rules/id-length
    'id-length': 0,
    // identifier の形式を制限
    // http://eslint.org/docs/rules/id-match
    'id-match': 0,
    // インデントスタイル
    // http://eslint.org/docs/rules/indent
    'indent': [2, 2, {'MemberExpression': 1}],  // プロパティアクセスのインデントを指定
    // JSX 属性のクオートスタイル
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 0,  // kanmu/react 側で有効化
    // オブジェクトリテラルのキーまわり空白スタイル
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    // キーワードまわりの空白スタイル
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [2, {'before': true, 'after': true}],
    // 行コメントの位置スタイル
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 0,  // 状況によって変えたい
    // 改行コードを指定
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [2, 'unix'],
    // コメントまわりの改行スタイル
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [2, {'beforeBlockComment': true, 'allowBlockStart': true, 'allowObjectStart': true, 'allowArrayStart': true}],
    // ディレクティブ(ex. "use strict")前後の空白スタイル
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [2, 'always'],
    // 1ファイルの最大行を制限
    // http://eslint.org/docs/rules/max-lines
    'max-lines': 0,
    // callback ネスト数の制限
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [1, 3],
    // 1行の文の数を制限
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 0,  // ここまで厳密にしなくてもよさそう
    // 三項演算子を仕様時に改行を強制
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 0,
    // コンストラクタの new 必須化
    // http://eslint.org/docs/rules/new-cap
    'new-cap': 2,
    // new 時の括弧必須化
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 2,
    // var, let, const 後の空行
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 0,
    // returnの前に空行を必須化
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 0,
    // 1行あたりのchain呼出回数を制限
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [0, {'ignoreChainWithDepth': 3}], // moment等まとまったほうが嬉しいパターンもあるので無効 / 1行に3つ以上のchainを警告
    // Array コンストラクタでの配列要素作成禁止
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 2,
    // continue 禁止
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 0,
    // インラインコメント禁止
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 0,
    // else 内の if 禁止
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 2,
    // 特定の演算子の組み合わせに括弧を強制
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [2, {'groups': [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']]}],
    // 空白とタブの混在禁止
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 2,
    // 連続空白行数の制限
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [2, {'max': 2}],
    // 条件分岐での否定表現禁止
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 0,  // 否定で簡潔に書けるならそのほうが好き
    // ネストした三項演算子禁止
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 2,
    // Object コンストラクタ禁止
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 2,
    // 制限された構文を禁止
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 0,  // no-with, func-style で同様の制限をしているので無視
    // タブの使用禁止
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 2,
    // 行末の空白禁止
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2,
    // 識別子としてのアンダースコアの使用を禁止
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [2, {'allowAfterThis': true}],  // thisのみ許可
    // 無駄な三項演算子の禁止
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 2,
    // オブジェクトプロパティアクセスのドット前の空白を禁止
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 2,
    // オブジェクトリテラル括弧内の改行スタイル
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [0, {'minProperties': 3, 'multiline': true}],  // 3属性以上で改行必須、指定要素数以内でも改行したくない場合があるのでしばらく無視する
    // オブジェクトの中括弧内の空白
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [2, 'never'],
    // オブジェクトプロパティ毎の改行を強制する
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [2, {'allowMultiplePropertiesPerLine': true}],  // 1行に全てのプロパティが収まる場合は許可
    // 変数定義初期化スタイル
    // http://eslint.org/docs/rules/one-var
    'one-var': [2, {'uninitialized': 'always', 'initialized': 'never'}],  // 値なしで初期化する場合はvarを1つにまとめ、値ありで初期化する場合はvarを変数分
    // 1行変数定義スタイル
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 0,  // 1行で複数変数を定義することを許可する
    // 変数代入のスタイル
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 0,
    // 改行時の演算子位置スタイル
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [2, 'before'],
    // ブロック先頭末尾の空白行
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [2, 'never'],
    // プロパティキー定義のクォート
    // http://eslint.org/docs/rules/quote-props
    'quote-props': [2, 'as-needed', {'keywords': true}],
    // 文字列のクォート
    // http://eslint.org/docs/rules/quotes
    'quotes': [2, 'single'],
    // JSDoc 強制
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': [2, {'require': {'FunctionDeclaration': true, 'MethodDefinition': true, 'ClassDeclaration': true}}],
    // セミコロン強制
    // http://eslint.org/docs/rules/semi
    'semi': 2,
    // セミコロンまわりの空白スタイル
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [2, {'before': false, 'after': true}],
    // importをアルファベット順に制限
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': 0,  // 期待するソートじゃない
    // オブジェクトプロパティををアルファベット順に制限
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': [2, 'asc', {'caseSensitive': true, 'natural': false}],
    // 変数定義をアルファベット順に制限
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 2,
    // ブロックの前の空白
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': [2, 'always'],
    // 関数の括弧前の空白
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [2, {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
    // 括弧内の空白
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': [2, 'never'],
    // 演算子まわりの空白スタイル
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 2,
    // 演算子まわりの空白
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    // コメント内の空白
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [2, 'always', {'exceptions': ['-', '+'], 'block': {'balanced': true}}],
    // BOMの扱い
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': [2, 'never'],
    // 正規表現を括弧で囲むことを強制
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 0,

    /**
     * ECMAScript 6
     */
    // arrow function body の中括弧スタイル
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 0,  // 1文が長くなってしまう場合には中括弧で改行したい
    // arrow function の括弧スタイル
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [2, 'as-needed'],
    // arrow function の空白スタイル
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 2,
    // コンストラクタの super 有無
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 2,
    // generator の * の空白スタイル
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 2,
    // class への再代入禁止
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 2,
    // 条件式とまぎらわしいarrow functionを警告
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 2,
    // const への再代入禁止
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 2,
    // importの重複禁止
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 2,
    // クラスメンバ名の重複禁止
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 2,
    // コンストラクタ内 super の前の this 禁止
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 2,
    // 不要なcomputed propertiesを禁止
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 2,
    // 不要なコンストラクタ関数の禁止
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 2,
    // import/export/destructuredでの不要なリネーム禁止
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 2,
    // var 禁止
    // http://eslint.org/docs/rules/no-var
    'no-var': 2,
    // ES6 のオブジェクト省略表現
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [2, 'always'],
    // コールバックに arrow function の利用提案
    // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 2,
    // const の利用提案
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,
    // 定数値のparseIntで数値リテラルの利用を提案
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 2,
    // Reflect メソッドの利用提案
    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 0,  // babel-runtime なしで delete とか使いたいときがある
    // rest-paramsの利用提案 (arguments禁止)
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 2,
    // Spread オペレータの利用提案
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 2,
    // 文字列連結にテンプレートリテラルの利用提案
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 2,
    // yield の必須化
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 2,
    // spread演算子とrest演算子の空白スタイル
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': [2, 'never'],  // 空白禁止
    // Symbolの第一引数(説明)を強制
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 2,
    // テンプレートリテラルの`${..}`の空白スタイル
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': [2, 'never'],
    // yieldの*まわりの空白スタイル
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': [2, 'after'],

    /**
     * Legacy
     */
    // ブロックのネスト数
    // http://eslint.org/docs/rules/max-depth
    'max-depth': [1, 3],
    // 1行の長さ
    // http://eslint.org/docs/rules/max-len
    'max-len': [1, {'code': 100, 'tabWidth': 2, 'ignoreStrings': true, 'ignoreTemplateLiterals': true, 'ignoreUrls': true}],  // 文字列、テンプレートリテラル、URLは無視
    // 引数の数
    // http://eslint.org/docs/rules/max-params
    'max-params': [1, 3],
    // 関数内の文の数
    // http://eslint.org/docs/rules/max-statements
    'max-statements': [1, 10],
    // ビット演算子禁止
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 2,
    // ++ / -- 禁止
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 0
  }
};
