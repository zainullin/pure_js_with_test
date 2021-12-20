// Напишите функцию createGeometricRow так, чтобы она возвращала
// массив геометрической прогрессии размером size.
function createGeometricRow(b1, q, size) {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push(b1 * q ** i);
  }
  return result;
}

module.exports = {
  createGeometricRow,
};
