// Выборка из массива take v2
// Напишите функцию take, которая принимает массив и
// возвращает новый массив, являющийся копией
// исходного массива в обратном порядке. Функция должна оставить
// исходный массив в исходном состоянии (обеспечить иммутабельность).
// Не используйте методы массива, кроме push, shift, pop, unshift.

function take(a) {
  const inArr = a.slice();
  const result = [];

  while(inArr.length > 0) {
    result.push(inArr.pop());
  }
  return result;
}

module.exports = {
  take,
};
