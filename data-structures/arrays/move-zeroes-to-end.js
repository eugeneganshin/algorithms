function moveZeroes(arr) {
  let zeros = [];

  const n = arr.filter((el) => {
    if (el === 0) {
      zeros.push(el);
      return false;
    } else {
      return true;
    }
  });

  return [...n, ...zeros];
}

console.log(
  moveZeroes([
    9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0,
    0,
  ])
);
