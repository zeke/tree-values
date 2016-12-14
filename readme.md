# tree-values [![Build Status](https://travis-ci.org/zeke/tree-values.svg?branch=master)](https://travis-ci.org/zeke/tree-values)

> Get the values of an object, recursively.

## Install

```sh
$ npm install --save tree-values
```

## Usage

```js
const values = require('tree-values');

values({foo: 0, bar: 1});
//=> [0, 1]
```

Recursive example:

```js
var nestedObj = {
  a: 'foo',
  b: {x: 1, y: 2}
}

values(nestedObj);
//=> ['foo', 1, 2]
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework

## License

MIT
