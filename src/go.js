function take(arr) {
  return arr.filter((el, ind) => ind % 2 === 1);
}
const array = [1, 7, -1, -100, 2];
const result = take(array);
console.log({result});