function traversal(matrix) {
  const result = [];
  // берем первый элемент и запихиваем в массив
  for (let i = 0; i < matrix.length; i++ ){
      for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j]);
      }
  }
  return result;
}

module.exports = {
  traversal,
};
