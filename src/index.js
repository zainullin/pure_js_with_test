// Напишите функцию take, которая принимает массив и возвращает массив из элементов
// исходного массива, стоящих на четных индексах. Не используйте методы массива,
// кроме push, shift, pop, unshift.
// Пример:
// take([]); // []
// take([1]); // [1]
// take([1, 2]); // [1]
// take([1, 2, 3]); // [1, 3]
// take([1, 2, 3, 4]); // [1, 3]
// take([1, 2, 3, 4, 5]); // [1, 3, 5]
// https://school.constcode.ru/problem/solver/9

function take(arr) {
  return arr.filter((el, ind) => ind % 2 === 0);
}

module.exports = {
  take,
};
