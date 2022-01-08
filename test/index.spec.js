const { expect } = require('chai');
const { describe, it } = require('mocha');

const { applyOnlyNumbers } = require('../src');

describe('Тестирование функции applyOnlyNumbers', () => {
  it('Тест 1', () => {
    const getSum = applyOnlyNumbers((...xs) => xs.reduce((a, b) => a + b, 0));
    expect(getSum(1, 2, 3)).to.equal(6);
    expect(getSum(1, '2', 3)).to.equal(4);
    expect(getSum(NaN, 3)).to.equal(3);
    expect(getSum(true, false)).to.equal(0);
  });
});
