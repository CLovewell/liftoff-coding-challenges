function charCount(char, str) {
  return str.split(char).length - 1;
}

module.exports = {
  charCount: charCount
};