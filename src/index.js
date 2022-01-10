// Перед выполнение этого задания рекомендовано ознакомиться с документацией
// метод Array.prototype.indexOf:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Напишите полифил метода Array.prototype.indexOf. В теле полифила не используйте никаких методов
// класса Array или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это массив. Все остальные аргументы такие же как и в том же порядке,
// что и у одноименного метода. Т.е.:
// array.indexOf(item, fromIndex)  <=> indexOf(array, item, fromIndex)

function indexOf(array, item, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i += 1) {
    if (item === array[i]) {
      return i;
    }
  }
  return -1;
}

module.exports = {
  indexOf,
};
