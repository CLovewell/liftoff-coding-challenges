function gaussTale(n) {
  return 0.5 * n * (n+1);
}

function numSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

module.exports = {
  gaussTale: gaussTale,
  numSum: numSum
};