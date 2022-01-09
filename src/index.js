// Напишите декоратор callSeveral - которая принимает целевую функцию
// и times - количество раз вызова функции и возвращает функцию обертку.
// Функция обертка вызывает целевую функцию times раз со всеми своими
// аргументами и возвращает массив результатов целевой функции.
// const thrice = callSeveral((x) => x, 3);
// thrice("Hello"); //["Hello", "Hello", "Hello"]

function callSeveral(callback, times = 1) {
  return function(args) {
    const result = [];
    if (times <= 0) {
      return result;
    }
    for (let i = 0; i < times; i += 1) {
      result.push(callback(args));
    }
    return result;
  };
}

module.exports = {
  callSeveral,
};
