const assert = require('assert')
const values = require('./')
const nestedObject = {
  a: 'foo',
  b: {
    c: 'bar',
    d: {
      x: 1,
      y: 2
    }
  }
}

it('should get the values of an object', function () {
  assert.deepEqual(values({foo: 'foo', bar: 'bar'}), ['foo', 'bar'])
})

it('recurses nested objects ', function () {
  assert.deepEqual(values(nestedObject, {recurse: true}), ['foo', 'bar', 1, 2])
})
