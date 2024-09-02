function cartesian(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let q = 0; q < arr2.length; q++) {
      result.push([arr1[i], arr2[q]])
    }
  }
  return result;
}

const A = [1, 2];
const B = [3, 4,5,10,16];
console.log(cartesian(A, B));
