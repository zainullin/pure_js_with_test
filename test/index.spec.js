const { expect } = require('chai');
const { describe, it } = require('mocha');

const { includes } = require('../src');

describe('Тестирование метода String.prototype.includes', () => {
  it('Тест 1', () => {
    expect(includes('Hello world!', 'Hello')).to.equal(true);
    expect('Hello world!'.includes('Hello')).to.equal(true);

    expect(includes('Hello world!', 'Hello', 0)).to.equal(true);
    expect('Hello world!'.includes('Hello', 0)).to.equal(true);

    expect(includes('Hello world!', 'Hello', 2)).to.equal(false);
    expect('Hello world!'.includes('Hello', 2)).to.equal(false);
  });

  it('Тест 2', () => {
    expect(includes('Hello world!', 'hello')).to.equal(false);
    expect('Hello world!'.includes('hello')).to.equal(false);

    expect(includes('Hello world!', 'hello', 0)).to.equal(false);
    expect('Hello world!'.includes('hello', 0)).to.equal(false);

    expect(includes('Hello world!', 'hello', 2)).to.equal(false);
    expect('Hello world!'.includes('hello', 2)).to.equal(false);
  });

  it('Тест 3', () => {
    expect(includes('Hello world!', 'world')).to.equal(true);
    expect('Hello world!'.includes('world')).to.equal(true);

    expect(includes('Hello world!', 'world', -1)).to.equal(true);
    expect('Hello world!'.includes('world', -1)).to.equal(true);

    expect(includes('Hello world!', 'world', 0)).to.equal(true);
    expect('Hello world!'.includes('world', 0)).to.equal(true);

    expect(includes('Hello world!', 'world', 1)).to.equal(true);
    expect('Hello world!'.includes('world', 1)).to.equal(true);

    expect(includes('Hello world!', 'world', 5)).to.equal(true);
    expect('Hello world!'.includes('world', 5)).to.equal(true);
  });

  it('Тест 4', () => {
    expect(includes('Hello world!', 'Hello world!')).to.equal(true);
    expect('Hello world!'.includes('Hello world!')).to.equal(true);

    expect(includes('Hello world!', 'Hello world!', 0)).to.equal(true);
    expect('Hello world!'.includes('Hello world!', 0)).to.equal(true);

    expect(includes('Hello world!', 'Hello world!', -1)).to.equal(true);
    expect('Hello world!'.includes('Hello world!', -1)).to.equal(true);

    expect(includes('Hello world!', 'Hello world!', 1)).to.equal(false);
    expect('Hello world!'.includes('Hello world!', 1)).to.equal(false);
  });
});
