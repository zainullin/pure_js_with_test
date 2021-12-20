const { expect } = require('chai');
const { describe, it } = require('mocha');

const { getMaxItem } = require('../src');

describe('Main test', () => {
  it("Тестирование функции getMaxItem", () => {
    const numbers1 = [1, 2, 3];
    expect(getMaxItem(numbers1)).to.equal(3);
    // expect(numbers1).toEqual([1, 2, 3]);
  
    const numbers2 = [6, 8, 9, 2, 4, 5];

    expect(getMaxItem(numbers2)).to.equal(9);
    // expect(numbers2).toEqual([6, 8, 9, 2, 4, 5]);
  
    const numbers3 = [6];

    expect(getMaxItem(numbers3)).to.equal(6);
    // expect(numbers3).toEqual([6]);
  
    const numbers4 = [8, 8, 8, 8];
    expect(getMaxItem(numbers4)).to.equal(8);
    // expect(numbers4).toEqual([8, 8, 8, 8]);
  });
});
