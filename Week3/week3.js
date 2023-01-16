function firstReverse(str) {
  let result = "";
  let n = str.length;
  for (let i = n-1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

module.exports = {
  firstReverse: firstReverse
};