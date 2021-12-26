// Напишите полифил метода String.prototype.includes.
// В теле полифила не используйте никаких методов класса String
// или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это строка. Все остальные аргументы
// такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// string.includes(item, substring)  <=> includes(string, substring, position)
// Подсказка: в этом задание вам понадобятся двойные циклы.

// https://school.constcode.ru/problem/solver/45
function includes(...rest) {
  const str = rest[0];
  const subStr = rest[1];
  const position = rest[2] === undefined ? 0 : rest[2];
  let pattern = new RegExp('\\b' + subStr, 'g');

  let matches = false;
  while (true) {
    matches = pattern.exec(str);
    if (matches === null) return false;
    if (matches.index >= position) return true;
  }
}

module.exports = {
  includes,
};
