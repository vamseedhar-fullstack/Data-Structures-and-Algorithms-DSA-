function reccursionfactorial(n){
    if (n === 0){
        return 1
    }
    return n * reccursionfactorial(n-1)
}

console.log(reccursionfactorial(5))