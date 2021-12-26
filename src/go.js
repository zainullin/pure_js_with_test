// function includes(...rest) {
//   const str = rest[0];
//   const subStr = rest[1];
//   const position = (rest[2] === undefined) ? 0 : rest[2];
 
//   let pattern = new RegExp('\\b' + subStr, 'g');
  
//   if (pattern.test(str)) {
//     return true;
//   }
//   return false;
// }

function includes(...rest) {
  const str = rest[0];
  const subStr = rest[1];
  const position = rest[2] === undefined ? 0 : rest[2];
  let pattern = new RegExp('\\b' + subStr, 'g');

  let matches = false;
  while (true) {
    matches = pattern.exec(str);
    if (matches === null) return false;
    if (matches.index >= position) return true;
  }
}

const result = includes('Hello world!', 'Hello');
console.log({ result });
