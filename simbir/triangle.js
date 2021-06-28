function triangle() {
  for (let i = 1; i <= 7; i++) {
    let str = makeString(i);
    console.log(str);
  }
}

function makeString(n) {
  return "*".repeat(n);
}

triangle();
