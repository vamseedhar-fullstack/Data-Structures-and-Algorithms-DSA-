function poweroftwo(n){
    if (n < 1){
        return false
    }

    return (n & (n-1)) === 0
}




// function poweroftwo(n){
//     if (n < 1){
//         return false
//     }

//     while (n > 1) {
//         if (n%2 !== 0){
//             return false
//         }
//         n = n/2
//     }

//     return true
// }

// // n = 8
// 8/2 = 4 remainder = 0
// 4/2 = 2 remainder = 0
// 2/2 = 1 remainder = 0
// if reminder is not 0 in any step then its not power of two

console.log(poweroftwo(5))