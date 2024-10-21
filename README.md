# eslint-config-kanmu

[![NPM version][npm-image]][npm-url]
[![Build Status][github-actions-image]][github-actions-url]
[![License][license-image]][license-url]

ESLint configurations for Kanmu.

## Installation

```
npm install --save-dev eslint eslint-config-kanmu
```

## Usage

Add `eslint.config.js` (or `eslint.config.mjs`).

### Summary

- **Base**
  - `kanmu`: Default
  - `kanmu/es5`: ES5
- **Optional**
  - `kanmu/browser`: Browser env
  - `kanmu/flow`: for Flow
  - `kanmu/flow-jsdoc`: for JSDoc and Flow
  - `kanmu/node`: for Node.js env
  - `kanmu/react`: for React
  - `kanmu/react-native`: for React Native
  - `kanmu/mocha`: for Testing mocha

### Examples

#### Node.js

```js
import configKanmu from 'eslint-config-kanmu';
import configKanmuNode from 'eslint-config-kanmu/node';
export default [
  ...configKanmu,
  ...configKanmuNode,
];
```

#### ES5 (Browser)

```js
import configKanmuEs5 from 'eslint-config-kanmu/es5';
import configKanmuBrowser from 'eslint-config-kanmu/browser';
export default [
  ...configKanmuEs5,
  ...configKanmuBrowser,
];
```

#### React

```js
import configKanmu from 'eslint-config-kanmu';
import configKanmuBrowser from 'eslint-config-kanmu/browser';
import configKanmuReact from 'eslint-config-kanmu/react';
export default [
  ...configKanmu,
  ...configKanmuBrowser,
  ...configKanmuReact,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react
```

#### React Native

```js
import configKanmu from 'eslint-config-kanmu';
import configKanmuReactNative from 'eslint-config-kanmu/react-native';
export default [
  ...configKanmu,
  ...configKanmuReactNative,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react eslint-plugin-react-native
```


#### React Native with Flow

```js
import configKanmu from 'eslint-config-kanmu';
import configKanmuReactNative from 'eslint-config-kanmu/react-native';
import configKanmuFlow from 'eslint-config-kanmu/flow';
import configKanmuFlowJsdoc from 'eslint-config-kanmu/flow-jsdoc';
export default [
  ...configKanmu,
  ...configKanmuReactNative,
  ...configKanmuFlow,
  ...configKanmuFlowJsdoc,
];
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-flowtype eslint-plugin-jsdoc eslint-plugin-react eslint-plugin-react-native eslint-plugin-import
```


[npm-url]: https://www.npmjs.com/package/eslint-config-kanmu
[npm-image]: https://img.shields.io/npm/v/eslint-config-kanmu.svg
[github-actions-url]: https://github.com/kanmu/eslint-config/actions/workflows/ci.yml
[github-actions-image]: https://github.com/kanmu/eslint-config/actions/workflows/ci.yml/badge.svg?branch=master
[license-url]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/eslint-config-kanmu.svg
