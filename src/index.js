// Напишите функцию take, которая принимает массив и возвращает
// массив из последних n элементов в обратном порядке.
// Если n не указан, то равен длине массива.
// Не используйте методы массива, кроме push, shift, pop, unshift.
// https://school.constcode.ru/problem/solver/8

function take(...rest) {
  // inArr, n
  const in1 = rest[0];
  const inArr = in1.map((x) => x);
  const n = (rest[1] === undefined) ? inArr.length : rest[1];
  const result = [];

  if (n >= inArr.length) {
    while (inArr.length > 0) {
      result.push(inArr.pop());
    }
  }
  if (n < inArr.length) {
    for (let i = 0; i < n; i += 1) {
      result.push(inArr.pop());
    }
  }
  return result;
}

module.exports = {
  take,
};
