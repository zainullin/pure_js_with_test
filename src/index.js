// Напишите функцию take, которая принимает массив и
// возвращающую массив из первых n элементов в том же порядке,
// в котором элементы стоят в исходном массиве.
// Если n не указан, то равен длине массива.
// Не используйте методы массива, кроме push, shift, pop, unshift.

function take(...args) {
  // Получим аргументы
  const inArray = args[0];
  const n = args[1] === undefined || args[1] >= inArray.length ? inArray.length : args[1];

  const result = [];
  for (let i = 0; i < n; i += 1) {
    result.push(inArray[i]);
  }
  return result;
}

module.exports = {
  take,
};
