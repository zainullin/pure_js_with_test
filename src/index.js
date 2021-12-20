// Напишите функцию getGeometricProgression так, чтобы она возвращала сумму 
// членов арифметической прогрессии начиная с fromN и заканчивая toN порядковыми номерами.
function getGeometricProgression(b1, q, fromN, toN) {
  if (q === 1) {
    return b1 * (toN - fromN + 1);
  }
  const bFromN = b1 * q ** (fromN - 1);
  const result = (bFromN * (1 - q ** (toN - fromN + 1))) / (1 - q);

  return result;
}

module.exports = {
  getGeometricProgression,
};
