function climbing_starecase(n){
    const noOfWays = [1,2]
    for(let i=2;i<=n;i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2] 
    }
    return noOfWays[n-1]
}


// n= 4, climbing_starecase(4) = 5     | (1,1,1,1),(1,1,2),(1,2,1),(2,1,1) and (2,2)

console.log(climbing_starecase(5))