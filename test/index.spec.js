const { assert } = require('chai');
const { describe, it } = require('mocha');

const { sum } = require('../src');

describe('Main test', () => {
  it('sum', () => {
    assert.equal(sum(1, 1), 2);
  });
});
