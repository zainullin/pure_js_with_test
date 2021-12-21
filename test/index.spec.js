const { assert } = require('chai');
const { describe, it } = require('mocha');

const { getSumArray } = require('../src');

describe('Тестирование функции getSumArray', () => {
  it('Тест 0', () => {
    assert.deepEqual(getSumArray([0], [1, 2], [5]), [6, 2]);
  });

  it('Тест 1', () => {
    const array1 = [0, 1, 2];

    const result = [0, 1, 2];
    assert.deepEqual(getSumArray(array1), result);
    // expect(array1).toEqual([0, 1, 2]);
  });

  it('Тест 2', () => {
    const array1 = [5, 5, 7, 7, 8];
    const result = [5, 5, 7, 7, 8];
    assert.deepEqual(getSumArray(array1), result);

    // expect(array1).toEqual([5, 5, 7, 7, 8]);
  });

  it('Тест 3', () => {
    const array1 = [0, 1, 2, 3, 4];
    const array2 = [0, -1, -2, -3, -4];

    const result = [0, 0, 0, 0, 0];

    assert.deepEqual(getSumArray(array1, array2), result);
    // expect(array1).toEqual([0, 1, 2, 3, 4]);
    // expect(array2).toEqual([0, -1, -2, -3, -4]);
  });

  it('Тест 4', () => {
    const array1 = [];
    const array2 = [1];
    const array3 = [2, 2];
    const array4 = [3, 3, 3];
    const array5 = [4, 4, 4, 4];
    const array6 = [5, 5, 5, 5, 5];

    const result = [15, 14, 12, 9, 5];
    assert.deepEqual(getSumArray(array1, array2, array3, array4, array5, array6), result);
    // expect(array1).toEqual([]);
    // expect(array2).toEqual([1]);
    // expect(array3).toEqual([2, 2]);
    // expect(array4).toEqual([3, 3, 3]);
    // expect(array5).toEqual([4, 4, 4, 4]);
    // expect(array6).toEqual([5, 5, 5, 5, 5]);
  });

  it('Тест 5', () => {
    const array1 = [5, 5, -21];
    const array2 = [28, -27, -16, -48];
    const array3 = [30, -21, -22, -44, -47, 45, -6, 6];
    const array4 = [-21, 13, -14, -27, 23, -7];
    const array5 = [46, 20];
    const array6 = [-39, -8, -7, 29, -22, 25, -16];

    const result = [49, -18, -80, -90, -46, 63, -22, 6];

    assert.deepEqual(getSumArray(array1, array2, array3, array4, array5, array6), result);
    // expect(array1).toEqual([5, 5, -21]);
    // expect(array2).toEqual([28, -27, -16, -48]);
    // expect(array3).toEqual([30, -21, -22, -44, -47, 45, -6, 6]);
    // expect(array4).toEqual([-21, 13, -14, -27, 23, -7]);
    // expect(array5).toEqual([46, 20]);
    // expect(array6).toEqual([-39, -8, -7, 29, -22, 25, -16]);
  });
});
