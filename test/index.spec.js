const { assert } = require('chai');
const { describe, it } = require('mocha');

const { traversal } = require('../src');

describe('Обход массива слева-направо, сверху-вниз', () => {
  // it('Пустая матрица', () => {
  //   const matrix = [[]];
  //   const result = [];
    
  //   assert.deepEqual(traversal(matrix), result);
  // });

  describe('Квадратная матрица', () => {
    it('Матрица 1x1', () => {
      const matrix = [[1]];
      const result = [1];
      console.log("traversal(matrix) = ", traversal(matrix));
      assert.deepEqual(traversal(matrix), result);
    });

    it('Матрица 3x3', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      assert.deepEqual(traversal(matrix), result);
    });
  });

  describe('Матрица в одну строчку', () => {
    it('Матрица 5x1', () => {
      const matrix = [[1, 2, 3, 4, 5]];
      const result = [1, 2, 3, 4, 5];

      assert.deepEqual(traversal(matrix), result);
    });

    it('Матрица 10x1', () => {
      const matrix = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      assert.deepEqual(traversal(matrix), result);
    });
  });

  describe('Матрица в один столбец', () => {
    it('Матрица 1x5', () => {
      const matrix = [[1], [2], [3], [4], [5]];
      const result = [1, 2, 3, 4, 5];

      assert.deepEqual(traversal(matrix), result);
    });

    it('Матрица 1x10', () => {
      const matrix = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      assert.deepEqual(traversal(matrix), result);
    });
  });

  describe('Не квадртаная матрица', () => {
    it('Матрица 2x3', () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];

      const result = [1, 2, 3, 4, 5, 6];
      assert.deepEqual(traversal(matrix), result);
    });

    it('Матрица 3x2', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];

      const result = [1, 2, 3, 4, 5, 6];
      assert.deepEqual(traversal(matrix), result);
    });

    it('Матрица 5x6', () => {
      // prettier-ignore
      const matrix = [
                [ 1,  2,  3,  4,  5],
                [ 6,  7,  8,  9, 10],
                [11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20],
                [21, 22, 23, 24, 25],
                [26, 27, 28, 29, 30],
  		];

      // prettier-ignore
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
      assert.deepEqual(traversal(matrix), result);
    });
  });

  it('Финальный тест', () => {
    const matrix = [
      [8, 0, 5, 5, 8],
      [8, 2, 8, 7, 0],
      [8, 0, 5, 2, 5],
      [1, 8, 1, 2, 6],
    ];

    // prettier-ignore
    const result = [8, 0, 5, 5, 8, 8, 2, 8, 7, 0, 8, 0, 5, 2, 5, 1, 8, 1, 2, 6]
    assert.deepEqual(traversal(matrix), result);
  });
});
