function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftarr = arr.slice(0, mid);
  const rigtharr = arr.slice(mid);
  return merge(mergesort(leftarr), mergesort(rigtharr));

  function merge(leftarr, rightarr) {
    const sortarr = [];
    while (leftarr.length && rightarr.length) {
      if (leftarr[0] <= rightarr[0]) {
        sortarr.push(leftarr.shift());
      } else {
        sortarr.push(rightarr.shift());
      }
    }
    return [...sortarr, ...leftarr, ...rightarr];
  }
}

const arr = [-6, -10, 1, 7, 3, 9, 10, 16];

console.log(mergesort(arr));
