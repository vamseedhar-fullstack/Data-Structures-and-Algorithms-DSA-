let arr = [1,2,3,4,5,6]

function findsearch(n){
   for (let i=0;i<=n;i++){
    if(arr[i]===n){
        return i
    }
   }
   return -1
}

console.log(findsearch(7))

// console.log(arr.findIndex(e => e === 5))

// console.log(arr.indexOf(7))
