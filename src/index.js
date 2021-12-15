// Функция getItem принимает массив, индекс и значение по умолчание. 
// Функция должна вернуть элемент массива по указанному индексу если он есть. 
// Если массив не имеет элемента с искомым индексом, то функция должна вернуть defaultValue.

function getItem(array, index, defaultValue) {
  return array[index] === undefined? defaultValue: array[index];
}

module.exports = {
  getItem,
};
