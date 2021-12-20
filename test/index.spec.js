const { expect } = require('chai');
const { describe, it } = require('mocha');

const { getGeometricProgression } = require('../src');

describe('Main test', () => {
  it("Тестирование функции getGeometricProgression", () => {
    expect(getGeometricProgression(1, 3, 3, 5)).to.equal(117);
    expect(getGeometricProgression(2, 1, 5, 9)).to.equal(10);
    expect(getGeometricProgression(1, -1, 3, 8)).to.equal(0);
    expect(getGeometricProgression(1024, 0.5, 6, 8)).to.equal(56);
    expect(getGeometricProgression(2048, -0.5, 2, 4)).to.equal(-768);
  });
});
