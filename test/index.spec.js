const { expect } = require('chai');
const { describe, it } = require('mocha');

const { getMinItem } = require('../src');

describe('Main test', () => {
  it("Тестирование функции getMinItem", () => {
    const numbers1 = [1, 2, 3];
    expect(getMinItem(numbers1)).to.equal(1);
    // expect(numbers1).toEqual([1, 2, 3]);
  
    const numbers2 = [6, 8, 9, 2, 4, 5];
    expect(getMinItem(numbers2)).to.equal(2);
    // expect(numbers2).toEqual([6, 8, 9, 2, 4, 5]);
  
    const numbers3 = [6];
    expect(getMinItem(numbers3)).to.equal(6);
    // expect(numbers3).toEqual([6]);
  
    const numbers4 = [8, 8, 8, 8];
    expect(getMinItem(numbers4)).to.equal(8);
    // expect(numbers4).toEqual([8, 8, 8, 8]);
  });
});
