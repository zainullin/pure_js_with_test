const { assert } = require('chai');
const { describe, it } = require('mocha');

const { take } = require('../src');

describe('Тестирование функции take', () => {
  it('Базовый тест', () => {
    assert.deepEqual(take([]), []);
    assert.deepEqual(take([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(take([1, 2, 3], 100), [1, 2, 3]);
    assert.deepEqual(take([1, 2, 3, 4, 5], 1), [1]);
    assert.deepEqual(take([1, 2, 3, 4, 5], 3), [1, 2, 3]);
  });

  it('Пустой массив', () => {
    const array = [];
    const copy = take(array, 0);

    assert.deepEqual(copy, array);
    // console.log(copy === array);
    assert.notStrictEqual(copy, array);
    // expect(copy === array).toBe(false);
  });

  it('Массив с 5 элементами', () => {
    const array = [1, 7, -1, -100, 2];

    assert.deepEqual(take(array), [1, 7, -1, -100, 2]);
    assert.deepEqual(take(array, 5), [1, 7, -1, -100, 2]);
    assert.deepEqual(take(array, 0), []);
    assert.deepEqual(take(array, 2), [1, 7]);
    assert.deepEqual(take(array, 100), [1, 7, -1, -100, 2]);
  });

  it('Массив с 10 элементами', () => {
    const array = [1, 5, 8, -10, 2, 1, 0, 9, 1, 2];

    assert.deepEqual(take(array), [1, 5, 8, -10, 2, 1, 0, 9, 1, 2]);
    assert.deepEqual(take(array, 10), [1, 5, 8, -10, 2, 1, 0, 9, 1, 2]);
    assert.deepEqual(take(array, 0), []);
    assert.deepEqual(take(array, 5), [1, 5, 8, -10, 2]);
    assert.deepEqual(take(array, 100), [1, 5, 8, -10, 2, 1, 0, 9, 1, 2]);
  });

  it('Тест на иммутабельность', () => {
    const array = [1, 2, 3, 1, 2, 3];
    take(array);
    assert.deepEqual(array, [1, 2, 3, 1, 2, 3]);
  });
});
