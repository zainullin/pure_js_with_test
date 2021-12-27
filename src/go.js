function take(arr) {
  // осуществим реверс массива
  const res1 = arr.slice();
  // console.log({ res1 });
  const res2 = [];
  for (let i = res1.length - 1; i >= 0; i -= 1) {
    res2.push(res1[i]);
  }
  console.log({ res2 });
  const result = res2.filter((el, ind) => {
    return ind % 2 === 0;
  });
  return result;
}
//  assert.deepEqual(take([1, 2, 3]), [3, 1]);
const result = take([1, 2, 3]);

console.log({result});