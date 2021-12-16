const { expect, assert } = require('chai');
const { describe, it } = require('mocha');
const { take } = require('../src');

describe('Тестирование функции take', () => {
  it('Базовый тест', () => {
    expect(take([])).toEqual([]);
    expect(take([1, 2, 3])).toEqual([1, 2, 3]);

    const arr = [1, 2, 3];
    expect(take(arr) === arr).toBe(false);
  });

  it('Пустой массив', () => {
    const array = [];
    const copy = take(array);

    expect(copy).toEqual(array);
    expect(copy === array).toBe(false);
  });

  it('Массив с элементами', () => {
    const array = [1, 7, -1, -100, 2];
    const copy = take(array);

    expect(copy).toEqual(array);
    expect(copy === array).toBe(false);
  });

  it('Тест на иммутабельность', () => {
    const array = [1, 2, 3, 1, 2, 3];
    take(array);
    expect(array).toEqual([1, 2, 3, 1, 2, 3]);
  });
});
