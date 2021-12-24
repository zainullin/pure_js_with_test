const { expect } = require('chai');
const { describe, it } = require('mocha');

const { getArithmeticProgressionSum } = require('../src');

describe('Main test', () => {
  it("Тестирование функции getArithmeticProgressionSum", () => {
    expect(getArithmeticProgressionSum(4, 3, 2, 4)).to.equal(30);
    expect(getArithmeticProgressionSum(0, 1, 5, 10)).to.equal(39);
    expect(getArithmeticProgressionSum(-2, 5, 2, 4)).to.equal(24);
    expect(getArithmeticProgressionSum(-100, 105, 3, 6)).to.equal(1070);
    expect(getArithmeticProgressionSum(5, 7, 12, 20)).to.equal(990);
    expect(getArithmeticProgressionSum(1000, -99, 8, 22)).to.equal(-5790);
  });
});
