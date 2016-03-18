module.exports = {
  'globals': {
    '$Diff': true,
    '$Enum': true,
    '$Shape': true,
    '$Subtype': true,
    '$Supertype': true,
    'Class': true,
    'ReactClass': true,
    'ReactComponent': true,
    'ReactElement': true
  },
  'plugins': ['flow-vars'],
  'rules': {
    // 未定義のflowtype利用を警告
    // https://github.com/zertosh/eslint-plugin-flow-vars
    'flow-vars/define-flow-type': 2,
    // 未利用のflowtypeを警告
    // https://github.com/zertosh/eslint-plugin-flow-vars
    'flow-vars/use-flow-type': 2
  }
};
