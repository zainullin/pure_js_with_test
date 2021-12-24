// Функция getArithmeticProgressionSum получает в качестве аргументов:
// a1 - значение первого член арифметической прогрессии
// b - разность арифметической прогрессии
// fromN - номер члена арифметической прогрессии,
// с которого начинается искомая сумма
// toN - номер члена арифметической прогрессии,
// на котором заканчивается искомая сумма
// Напишите функцию getArithmeticProgressionSum так,
// чтобы она возвращала сумму членов арифметической прогрессии начиная
// с fromN и заканчивая toN порядковыми номерами.

function getArithmeticProgressionSum(a1, b, fromN, toN) {
  const aFromN = a1 + (fromN - 1) * b;
  const summa = ((2 * aFromN + b * (toN - fromN)) * (toN - fromN + 1)) / 2;
  return summa;
}

module.exports = {
  getArithmeticProgressionSum,
};
