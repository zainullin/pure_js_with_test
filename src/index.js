// Напишите функцию take, которая принимает массив и возвращает новый массив,
// являющийся копией исходного массива.
// Не используйте методы массива, кроме push, shift, pop, unshift.

function take() {
  const inArr = arguments[0];
  const outArr = [];
  inArr.forEach((el) => {
    outArr.push(el);
  });

  return outArr;
}

module.exports = {
  take,
};
