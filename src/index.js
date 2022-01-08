// Напишите функцию декоратор applyOnlyNumbers, которая принимает функцию и
// возвращает новую функцию обертку. Функция обертка принимает любое количество аргументов,
// но передает целевой функции только численные аргументы без NaN.
// Пример:
// const getSum = applyOnlyNumbers((...xs) =>
//     xs.reduce((a, b) => a + b, 0)
// );
// getSum(1, 2, 3) // 1 + 2 + 3 = 6
// getSum(1, "2", 3) // 1 + 3 = 4 ("2" - строка)
// Примечание: можно пользоваться методом Array.prototype.filter.

function applyOnlyNumbers(callback) {
  return function(...args) {
    const arr = args.filter(el => typeof el === 'number' && !isNaN(el));
    return callback(...arr);
  };
}

module.exports = {
  applyOnlyNumbers,
};
