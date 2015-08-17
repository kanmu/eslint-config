# eslint-config-kanmu
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]

ESLint configurations for Kanmu.

## Installation

```
npm install --save-dev eslint eslint-config-kanmu
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

[npm-url]: https://badge.fury.io/js/eslint-config-kanmu
[npm-image]: https://badge.fury.io/js/eslint-config-kanmu.svg
[travis-url]: https://travis-ci.org/kanmu/eslint-config
[travis-image]: https://travis-ci.org/kanmu/eslint-config.svg?branch=master
[daviddm-url]: https://david-dm.org/kanmu/eslint-config
[daviddm-image]: https://david-dm.org/kanmu/eslint-config.svg
[daviddm-dev-url]: https://david-dm.org/kanmu/eslint-config#info=devDependencie
[daviddm-dev-image]: https://david-dm.org/kanmu/eslint-config/dev-status.svg
