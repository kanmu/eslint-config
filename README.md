# eslint-config-kanmu

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

### ES6

```yaml
extends: kanmu
```

### ES5

```yaml
extends: kanmu/es5
```

### React

```yaml
extends: kanmu/react
```

#### Additional Requirements

```
npm install --save-dev eslint-plugin-react
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
