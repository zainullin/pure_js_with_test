// Функция getSumArray принимает в качестве аргументов любое количество массивов.
// Все массивы численные, но могут быть разных размеров.
// Напишите функцию getSumArray, которая возвращает массив, каждый элемент которой
// является суммой элементов входных массивов на том же индексе.

function getSumArray() {
  // получаем массив входных значений
  const arr = Array.from(arguments);
  // проходим по входному массиву, элементами являются тоже массивы
  // находим самый длинный, его длина нам нужна
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (max < arr[i].length) {
      max = arr[i].length;
    }
  }
  // преобразуем массив arr, сделаем каждый элемент этого массива (а это тоже массив)
  // одинакового размера - недостающий элемент = 0, длина каждого элемента равно max
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < max; j += 1) {
      if (arr[i][j] === undefined) {
        arr[i][j] = 0;
      }
    }
  }
  console.log(arr);
  // Сделаем пустой результирующий массив размером max
  const result = [];
  for (let p = 0; p < max; p += 1) {
    result.push(0);
  }
  // заполним result
  for (let i = 0; i < result.length; i += 1) {
    result[i] = getResult(i, arr);
  }
  console.log(result);
  return result;
}
function getResult(i, arr) {
  let sum = 0;
  for (let j = 0; j < arr.length; j += 1) {
    sum += arr[j][i];
  }
  return sum;
}

module.exports = {
  getSumArray,
};
