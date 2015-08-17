var extend = require('extend');
var base = require('./');

module.exports = extend(true, {}, base, {
  'ecmaFeatures': {'modules': false},
  'env': {'es6': false},

  'rules': {
    /**
     * Possible Errors
     */
    // top-level 以外の関数定義禁止 (ES2015 or later)
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 0,

    /**
     * Best Practices
     */
    // var をスコープ最上部に強制
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 2,

    /**
     * Variables
     */
    // 変数定義のスタイル
    // http://eslint.org/docs/rules/init-declarations
     'init-declarations': 0,

    /**
     * Stylistic Issues
     */
    // 関数名を持たせるための function 式を強制
    // http://eslint.org/docs/rules/func-names
    'func-names': 0,


    /**
     * ECMAScript 6
     */
    // arrow function の括弧スタイル
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 0,
    // arrow function の空白スタイル
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 0,
    // コンストラクタの super 有無
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 0,
    // generator の * の空白スタイル
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 0,
    // class への再代入禁止
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 0,
    // const への再代入禁止
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 0,
    // コンストラクタ内 super の前の this 禁止
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 0,
    // var 禁止
    // http://eslint.org/docs/rules/no-var
    'no-var': 0,
    // ES6 のオブジェクト省略表現
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 0,
    // const の利用提案
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': 0,
    // Reflect メソッドの利用提案
    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 0,
    // Spread オペレータの利用提案
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 0,
    // yield の必須化
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 0
  }
});
