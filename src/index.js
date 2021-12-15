// Напишите функцию createArithmeticRow так, чтобы она возвращала массив арифметической прогрессии размером size.

function createArithmeticRow(a1, b, size) {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(a1 + b*i);
  }
  return result;
}

module.exports = {
  createArithmeticRow,
};
