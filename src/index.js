// https://school.constcode.ru/problem/solver/10

// Напишите функцию take, которая принимает массив и возвращает массив из
// элементов исходного массива, в обратном порядке через 1.
// Не используйте методы массива, кроме push, shift, pop, unshift.
// Пример:
// take([]); // []
// take([1]); // [1]
// take([1, 2, 3]); // [3, 1]
// take([1, 2, 3, 4]); // [4, 2]
// take([1, 2, 3, 4, 5]); // [5, 3, 1]
// take([1, 2, 3, 4, 5, 6]); // [6, 4, 2]

function take(arr) {
  // осуществим реверс массива
  const res1 = arr.slice();
  const res2 = [];
  for (let i = res1.length - 1; i >= 0; i -= 1) {
    res2.push(res1[i]);
  }
  const result = res2.filter((el, ind) => {
    return ind % 2 === 0;
  });
  return result;
}

module.exports = {
  take,
};
