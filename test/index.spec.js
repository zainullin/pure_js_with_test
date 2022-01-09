const { assert } = require('chai');
const { describe, it } = require('mocha');

const { callSeveral } = require('../src');

describe('Тестирование функции callSeveral', () => {
  it('Тест 1', () => {
    const fun = callSeveral((x) => x, 3);
    assert.deepEqual(fun('Hello'), ['Hello', 'Hello', 'Hello']);
    assert.deepEqual(fun('world'), ['world', 'world', 'world']);
    assert.deepEqual(fun('!'), ['!', '!', '!']);
  });

  it('Тест 2', () => {
    let counter = 0;

    const fun = callSeveral(() => counter++, 5);

    assert.deepEqual(fun(), [0, 1, 2, 3, 4]);
    assert.deepEqual(fun(), [5, 6, 7, 8, 9]);
    assert.deepEqual(fun(), [10, 11, 12, 13, 14]);
  });
});
