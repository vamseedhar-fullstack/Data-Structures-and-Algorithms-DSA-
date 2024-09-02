function Quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let lastnum = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < lastnum) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...Quicksort(left), lastnum, ...Quicksort(right)];
}

const arr = [-6, 20, 8, -2, 4];

console.log(Quicksort(arr));
