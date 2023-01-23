function longestWord(sen) {
  let wordArray = sen.trim().split(/[\W|_]+/);
  let lengthArray = wordArray.map(x => x.length);
  let maxLength = Math.max(...lengthArray);
  return wordArray[lengthArray.indexOf(maxLength)];
}

module.exports = {
  longestWord: longestWord
};