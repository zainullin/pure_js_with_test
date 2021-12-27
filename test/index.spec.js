const { assert, expect } = require('chai');
const { describe, it } = require('mocha');

const { includes } = require('../src');

describe('Тестирование полифила Array.prototype.includes', () => {
  it('Тест 1', () => {
    const array = [1, 2, 3, 1, 6, 6, 0];

    expect(includes(array, 1)).to.equal(true);
    expect(array.includes(1)).to.equal(true);

    expect(includes(array, 10)).to.equal(false);
    expect(array.includes(10)).to.equal(false);

    expect(includes(array, 'яблоко')).to.equal(false);
    expect(array.includes('яблоко')).to.equal(false);

    expect(includes(array, false)).to.equal(false);
    expect(array.includes(false)).to.equal(false);

    assert.deepEqual(array, [1, 2, 3, 1, 6, 6, 0]);
  });

  it('Тест 2', () => {
    const array = [1, 2, 3, 1, 6, 6, 0];

    expect(includes(array, 1, 2)).to.equal(true);
    expect(array.includes(1, 2)).to.equal(true);

    expect(includes(array, 1, 4)).to.equal(false);
    expect(array.includes(1, 4)).to.equal(false);

    expect(includes(array, 10, 2)).to.equal(false);
    expect(array.includes(10, 2)).to.equal(false);

    expect(includes(array, 'яблоко', 2)).to.equal(false);
    expect(array.includes('яблоко', 2)).to.equal(false);

    expect(includes(array, false, 2)).to.equal(false);
    expect(array.includes(false, 2)).to.equal(false);

    assert.deepEqual(array, [1, 2, 3, 1, 6, 6, 0]);
  });

  it('Тест 3', () => {
    const array = [1, 2, 3, 1, 6, 6, 0];

    expect(includes(array, 1, 100)).to.equal(false);
    expect(array.includes(1, 100)).to.equal(false);

    expect(includes(array, 10, 100)).to.equal(false);
    expect(array.includes(10, 100)).to.equal(false);

    expect(includes(array, 'яблоко', 100)).to.equal(false);
    expect(array.includes('яблоко', 100)).to.equal(false);

    expect(includes(array, false, 100)).to.equal(false);
    expect(array.includes(false, 100)).to.equal(false);

    assert.deepEqual(array, [1, 2, 3, 1, 6, 6, 0]);
  });
});
