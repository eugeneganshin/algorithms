let arr = [1, 2, 3, 4, 5];

let sum = arr.reverse().reduce((acc, curr) => acc + curr);
// console.log(sum);

//

let r = [
  { name: "width", value: 10 },
  { name: "height", value: 10 },
];

let hash = {};

for (const i of r) {
  hash[i.name] = i.value;
}

// console.log(hash);

function rle(str) {
  if (typeof str !== "string") throw new Error("Not a string");
  let hash = {};

  for (let i of str.split("")) {
    if (!hash[i]) {
      hash[i] = 1;
    } else {
      hash[i]++;
    }
  }

  return Object.entries(hash)
    .flat()
    .filter((el) => el !== 1)
    .join("");
}

console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
