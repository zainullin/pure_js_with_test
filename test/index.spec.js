const { expect, assert } = require('chai');
const { describe, it } = require('mocha');
const { getItem } = require('../src');

describe('функция createArithmeticRow возвращает массив арифметической прогрессии размером size', () => {
  it("Тестирование функции getItem", () => {
    const numbers = [1, 2, 3];
    expect(getItem(numbers, 0, null)).to.equal(1);
    expect(getItem(numbers, 2, null)).to.equal(3);
    expect(getItem(numbers, 5, null)).to.equal(null);
    assert.deepEqual(numbers, [1, 2, 3]);
 
    const names = ["Алексей", "Сергей", "Дмитрий"];
    expect(getItem(names, 2, null)).to.equal("Дмитрий");
    expect(getItem(names, 0, null)).to.equal("Алексей");
    expect(getItem(names, -2, null)).to.equal(null);
    // expect(names).toEqual(["Алексей", "Сергей", "Дмитрий"]);
  
    const empty = [];
    expect(getItem(empty, 0, "defaultValue")).to.equal("defaultValue");
    expect(getItem(empty, 1, "defaultValue")).to.equal("defaultValue");
    expect(getItem(empty, -1, "defaultValue")).to.equal("defaultValue");
    // expect(empty).toEqual([]);
  });
});
