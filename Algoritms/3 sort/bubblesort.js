function bubblesort(e) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i <= e.length - 1; i++) {
      if (e[i] > e[i + 1]) {
        let temp = e[i];
        e[i] = e[i + 1];
        e[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
let e = [-1, 2, 10, 9, -14]
bubblesort(e)
console.log(e);
