const { assert, expect } = require('chai');
const { describe, it } = require('mocha');

const { indexOf } = require('../src');

describe('Тестирование полифила Array.prototype.indexOf', () => {
  it('Тест 1', () => {
    const array = [1, 2, 3, 1, 6, 6, 0];
    //  expect('Hello world!'.includes('Hello')).to.equal(true);
    expect(indexOf(array, 1)).to.equal(0);
    expect(array.indexOf(1)).to.equal(0);

    expect(indexOf(array, 10)).to.equal(-1);
    expect(array.indexOf(10)).to.equal(-1);

    expect(indexOf(array, 'яблоко')).to.equal(-1);
    expect(array.indexOf('яблоко')).to.equal(-1);

    expect(indexOf(array, false)).to.equal(-1);
    expect(array.indexOf(false)).to.equal(-1);

    assert.deepEqual(array, [1, 2, 3, 1, 6, 6, 0]);
  });

  it('Тест 2', () => {
    const array = [1, 2, 3, 1, 6, 6, 0];

    expect(indexOf(array, 1, 2)).to.equal(3);
    expect(array.indexOf(1, 2)).to.equal(3);

    expect(indexOf(array, 10, 2)).to.equal(-1);
    expect(array.indexOf(10, 2)).to.equal(-1);

    expect(indexOf(array, 'яблоко', 2)).to.equal(-1);
    expect(array.indexOf('яблоко', 2)).to.equal(-1);

    expect(indexOf(array, false, 2)).to.equal(-1);
    expect(array.indexOf(false, 2)).to.equal(-1);

    assert.deepEqual(array, [1, 2, 3, 1, 6, 6, 0]);
  });

  it('Тест 3', () => {
    const array = [1, 2, 3, 1, 6, 6, 0];

    expect(indexOf(array, 1, 100)).to.equal(-1);
    expect(array.indexOf(1, 100)).to.equal(-1);

    expect(indexOf(array, 10, 100)).to.equal(-1);
    expect(array.indexOf(10, 100)).to.equal(-1);

    expect(indexOf(array, 'яблоко', 100)).to.equal(-1);
    expect(array.indexOf('яблоко', 100)).to.equal(-1);

    expect(indexOf(array, false, 100)).to.equal(-1);
    expect(array.indexOf(false, 100)).to.equal(-1);

    assert.deepEqual(array, [1, 2, 3, 1, 6, 6, 0]);
  });
});
