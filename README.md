# eslint-config-kanmu

[![Greenkeeper badge](https://badges.greenkeeper.io/kanmu/eslint-config.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![License][license-image]][license-url]

ESLint configurations for Kanmu.

## Installation

```
npm install --save-dev eslint eslint-config-kanmu eslint-plugin-sorting
```

## Usage

Add `.eslintrc` (YAML).

### Summary

- **Base**
  - `kanmu`: ES2015
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

#### ES6 (Node.js)

```yaml
extends:
  - kanmu
  - kanmu/node
```

#### ES5 (Browser)

```yaml
extends:
  - kanmu/es5
  - kanmu/browser
```

#### React

```yaml
extends:
  - kanmu
  - kanmu/browser
  - kanmu/react
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react
```

#### React Native

```yaml
extends:
  - kanmu
  - kanmu/react-native
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-react eslint-plugin-react-native
```


#### React Native with Flow

```yaml
extends:
  - kanmu
  - kanmu/react-native
  - kanmu/flow
  - kanmu/flow-jsdoc
```

##### Additional Requirements

```
npm install --save-dev eslint-plugin-flowtype eslint-plugin-jsdoc eslint-plugin-react eslint-plugin-react-native
```


[npm-url]: https://www.npmjs.com/package/eslint-config-kanmu
[npm-image]: https://img.shields.io/npm/v/eslint-config-kanmu.svg
[travis-url]: https://travis-ci.org/kanmu/eslint-config
[travis-image]: https://img.shields.io/travis/kanmu/eslint-config.svg
[daviddm-url]: https://david-dm.org/kanmu/eslint-config
[daviddm-image]: https://img.shields.io/david/kanmu/eslint-config.svg
[daviddm-dev-url]: https://david-dm.org/kanmu/eslint-config#info=devDependencies
[daviddm-dev-image]: https://img.shields.io/david/dev/kanmu/eslint-config.svg
[license-url]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/eslint-config-kanmu.svg
