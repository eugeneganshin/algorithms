function flatten(arr) {
  return arr.flat(Infinity);
}

console.log(flatten([1, 2, [3, 4], [5, [6, 7]], 8]));

var a = {},
  b = { key: "b" },
  c = { key: "c" };
a[b] = 1;
a[c] = 2;
