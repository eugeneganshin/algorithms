function invest(sum, period) {
  return Math.round(sum * Math.pow(1 + 0.1, period));
}

console.log(invest(300, 2));
