const { expect, assert } = require('chai');
const { describe, it } = require('mocha');
const { take } = require('../src');

describe('Тестирование функции take', () => {
  it('Базовый тест', () => {
    assert.deepEqual(take([]), []);

    assert.deepEqual(take([1, 2, 3]), [1, 2, 3]);    

    const arr = [1, 2, 3];
    expect(take(arr) === arr).to.equal(false);
  });

  it('Пустой массив', () => {
    const array = [];
    const copy = take(array);
    assert.deepEqual(copy, array); 
    expect(copy === array).to.equal(false);
  });

  it('Массив с элементами', () => {
    const array = [1, 7, -1, -100, 2];
    const copy = take(array);

    assert.deepEqual(copy, array); 

    expect(copy === array).to.equal(false);
    
  });

  it('Тест на иммутабельность', () => {
    const array = [1, 2, 3, 1, 2, 3];
    take(array);

    
    assert.deepEqual(array, [1, 2, 3, 1, 2, 3]); 
        
  });
});
