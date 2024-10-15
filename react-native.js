import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';
import reactConfig from './react.js';

export default [
  ...reactConfig,
  {
  'languageOptions': {
    'globals': reactNativePlugin.environments['react-native'].globals
  },
  'plugins': {'react': reactPlugin, 'react-hooks': reactHooksPlugin, 'react-native': reactNativePlugin},
  'rules': {
    /**
     * React Native
     */
    // Reactコンポーネントに特定のpropsを禁止
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': 0,  // デフォルト設定のclassName, style禁止はreact-nativeには不要

    /**
     * React Native
     */
    // スタイルのカラーリテラル使用禁止
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
    'react-native/no-color-literals': 2,
    // インラインスタイル直書きを禁止
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-inline-styles': 2,
    // 未利用のStyleを警告
    // https://github.com/intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/no-unused-styles': 2,
    // Android/iOS用のコンポーネントのファイル分離を推奨 (x.ios.js, x.android.js)
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 0  // 片方のみの場合は不要
  }
}];
