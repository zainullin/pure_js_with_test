const { assert } = require('chai');
const { describe, it } = require('mocha');

const { createGeometricRow } = require('../src');

describe('Main test', () => {
  it("Тестирование функции createGeometricRow", () => {
    assert.deepEqual(createGeometricRow(1, 0, 1), [1]);
    assert.deepEqual(createGeometricRow(1, 0, 3), [1, 0, 0]);
    assert.deepEqual(createGeometricRow(1, 0, 5), [1, 0, 0, 0, 0]);
    assert.deepEqual(createGeometricRow(1, 7, 1), [1]);
    assert.deepEqual(createGeometricRow(1, 7, 3), [1, 7, 49]);
    assert.deepEqual(createGeometricRow(1, 7, 5), [1, 7, 49, 343, 2401]);
    assert.deepEqual(createGeometricRow(1, 13, 1), [1]);
    assert.deepEqual(createGeometricRow(1, 13, 3), [1, 13, 169]);
    assert.deepEqual(createGeometricRow(1, 13, 5), [1, 13, 169, 2197, 28561]);
    assert.deepEqual(createGeometricRow(-3, -2, 1), [-3]);
    assert.deepEqual(createGeometricRow(-3, -2, 3), [-3, 6, -12]);
    assert.deepEqual(createGeometricRow(-3, -2, 5), [-3, 6, -12, 24, -48]);
  });
});
