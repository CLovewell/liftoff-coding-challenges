function detectWord(crowd) {
  let chars = crowd.split("");
  let hiddenWord = "";
  chars.forEach(char => 
    hiddenWord +=
    (char === char.toLowerCase() ? char : ""));
  return hiddenWord;
}

module.exports = {
  detectWord: detectWord
};