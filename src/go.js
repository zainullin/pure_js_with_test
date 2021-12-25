function take(...rest) {
  // inArr, n
  const inArr = rest[0];
  const n = (rest[1] === undefined) ? inArr.length : rest[1];
  const result = [];

  if (n >= inArr.length) {
    while (inArr.length > 0) {
      result.push(inArr.pop());
    }
  }
  if (n < inArr.length) {
    for (let i = 0; i < n; i += 1) {
      result.push(inArr.pop());
    }
  }
  return result;
}
const array = [1, 7, -1, -100, 2];

const res = take(array, 5);
console.log({ array, res });