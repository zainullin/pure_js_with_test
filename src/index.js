// Напишите функцию take, которая принимает массив и возвращает массив из последних n элементов
// в том же порядке, в котором они стоят в исходном массиве.
// Если n не указан, то равен длине массива. Не используйте методы массива,
// кроме push, shift, pop, unshift.

function take(...rest) {
  const inArr = rest[0].slice();
  const n = rest[1] === undefined ? inArr.length : rest[1];
  const result = [];
  const start = (inArr.length - n) < 0 ? 0 : inArr.length - n;
  for (let i = start; i < inArr.length; i += 1) {
    result.push(inArr[i]);
  }

  return result;
}

module.exports = {
  take,
};
