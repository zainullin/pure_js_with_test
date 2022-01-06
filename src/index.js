// Напишите функцию высшего порядка getMap, которая принимает имя поля и возвращает функцию мапер.
// Функция мапер принимает массив объектов и возвращает массив такой же длинны,
// но содержащей значение объектов по переданному в getMap ключу.

// const users = [
//   { id: 1, name: "Алексей", surname: "Данчин" },
//   { id: 2, name: "Сергей", surname: "Мельник" },
//   { id: 3, name: "Дмитрий", surname: "Огго" },
//   { id: 4, name: "Олег", surname: "Первый" },
// ];

// const getNames = getMap("name");

// getNames(users); // ["Алексей", "Сергей", "Дмитрий", "Олег"]

function getMap(str) {
  return ((arr) => arr.map((el) => el[str]));
}

module.exports = {
  getMap,
};
