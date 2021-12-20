function getMinItem(array) {
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < array.length; i += 1) {
    if (min > array[i]) min = array[i];
  }
  return min;
}

module.exports = {
  getMinItem,
};
