import mainConfig from './index.js';
import nodeConfig from './node.js';

export default [
  ...mainConfig,
  ...nodeConfig,
  {
    rules: {
      // マジックナンバーはルール設定上頻出するので許容する
      'no-magic-numbers': 0,
      // ルールの整列方針が定まっておらず、旧記法を引き継ぐために一時的に無効化する
      'sort-keys': 0
    },
    settings: {
      n: {
        allowModules: [
          'eslint-plugin-flowtype',
          'eslint-plugin-import',
          'eslint-plugin-jsdoc',
          'eslint-plugin-n',
          'eslint-plugin-react',
          'eslint-plugin-react-native'
        ]
      }
    }
  }
];
