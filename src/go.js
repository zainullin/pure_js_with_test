function take(...rest) {
  const inArr = rest[0].slice();
  const n = rest[1] === undefined ? inArr.length : rest[1];
  const result = [];
  const start = inArr.length - n;
  for (let i = start; i < inArr.length; i += 1) {
    result.push(inArr[i]);
  }

  return result;
}

let res = take([], 100);

console.log({ res });