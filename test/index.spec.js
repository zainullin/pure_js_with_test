const { assert } = require('chai');
const { describe, it } = require('mocha');

const { createArithmeticRow } = require('../src');

describe('функция createArithmeticRow возвращает массив арифметической прогрессии размером size', () => {
  it('Тестирование функции createArithmeticRow', () => {
    assert.deepEqual(createArithmeticRow(0, 0, 1), [0]);
    assert.deepEqual(createArithmeticRow(0, 0, 3), [0, 0, 0]);
    assert.deepEqual(createArithmeticRow(0, 0, 5), [0, 0, 0, 0, 0]);

    assert.deepEqual(createArithmeticRow(0, 7, 1), [0]);
    assert.deepEqual(createArithmeticRow(0, 7, 3), [0, 7, 14]);
    assert.deepEqual(createArithmeticRow(0, 7, 5), [0, 7, 14, 21, 28]);

    assert.deepEqual(createArithmeticRow(0, 13, 1), [0]);
    assert.deepEqual(createArithmeticRow(0, 13, 3), [0, 13, 26]);
    assert.deepEqual(createArithmeticRow(0, 13, 5), [0, 13, 26, 39, 52]);

    assert.deepEqual(createArithmeticRow(100, -88, 1), [100]);
    assert.deepEqual(createArithmeticRow(100, -88, 3), [100, 12, -76]);
    assert.deepEqual(createArithmeticRow(100, -88, 5), [100, 12, -76, -164, -252]);
  });
});
