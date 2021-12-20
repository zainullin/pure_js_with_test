// Функция getMaxitem принимает в качестве единственного аргумента не пустой массив чисел.
// Функция должна вернуть элемент с максимальный значением.

function getMaxItem(array) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

module.exports = {
  getMaxItem,
};
