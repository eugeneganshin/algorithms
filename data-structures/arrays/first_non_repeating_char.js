function firstNonRepeatedChar(s) {
  let hash = {};

  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].toLowerCase();
    if (!hash[arr[i]]) {
      hash[char] = 1;
    } else {
      hash[char]++;
    }
  }

  let first = "";

  let entries = Object.entries(hash);
  let len = Object.entries(hash).length;

  for (let j = 0; j < len; j++) {
    const element = entries[j];

    if (element[1] === 1) {
      first = element[0];
      break;
    }
  }

  return first;
}

console.log(firstNonRepeatedChar("lloy"));
