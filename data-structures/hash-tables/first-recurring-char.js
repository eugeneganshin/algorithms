const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 3, 4, 5];

function firstRecurring(array) {
  const hash = {};

  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = true;
    } else {
      return array[i];
    }
  }
  return undefined;
}

console.log(firstRecurring(arr));
console.log(firstRecurring(arr1));
console.log(firstRecurring(arr2));
