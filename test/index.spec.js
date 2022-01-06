const { assert } = require('chai');
const { describe, it } = require('mocha');

const { getMap } = require('../src');

describe('Тестирование функции getMap', () => {
  it('Тест 1', () => {
    const users = [
      { id: 1, name: 'Алексей', surname: 'Данчин' },
      { id: 2, name: 'Сергей', surname: 'Мельник' },
      { id: 3, name: 'Дмитрий', surname: 'Огго' },
      { id: 4, name: 'Олег', surname: 'Первый' },
    ];

    const getIds = getMap('id');
    const getNames = getMap('name');
    const getSurnames = getMap('surname');

    assert.deepEqual(getIds(users), [1, 2, 3, 4]);

    assert.deepEqual(getNames(users), ['Алексей', 'Сергей', 'Дмитрий', 'Олег']);

    assert.deepEqual(getSurnames(users), ['Данчин', 'Мельник', 'Огго', 'Первый']);

    assert.deepEqual(users, [
      { id: 1, name: 'Алексей', surname: 'Данчин' },
      { id: 2, name: 'Сергей', surname: 'Мельник' },
      { id: 3, name: 'Дмитрий', surname: 'Огго' },
      { id: 4, name: 'Олег', surname: 'Первый' },
    ]);
  });
});
