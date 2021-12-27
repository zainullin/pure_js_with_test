// Перед выполнение этого задания рекомендовано ознакомиться с документацией
// метод Array.prototype.includes:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// Напишите полифил метода Array.prototype.includes.
// В теле полифила не используйте никаких методов класса Array или других классов.
// Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы
// такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// array.includes(item, fromIndex)  <=> includes(array, item, fromIndex)

// https://school.constcode.ru/problem/solver/44

// function includes(...rest) {
//   const str = rest[0];
//   const subStr = rest[1];
//   const position = rest[2] === undefined ? 0 : rest[2];
//   let pattern = new RegExp('\\b' + subStr, 'g');

//   let matches = false;
//   while (true) {
//     matches = pattern.exec(str);
//     if (matches === null) return false;
//     if (matches.index >= position) return true;
//   }
// }

// Метод includes() определяет, содержит ли массив определённый элемент,
// возвращая в зависимости от этого true или false.
 
function includes(...rest) {
  const array = rest[0];
  const item = rest[1];
  const fromIndex = rest[2] === undefined ? 0 : rest[2];
  let result = false;
  array.forEach((el, i) => {
    if (item === el && i > fromIndex) {
      result = true;
    }
  });

  return result;
}

module.exports = {
  includes,
};
