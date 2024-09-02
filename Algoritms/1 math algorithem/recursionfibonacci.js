function reccurtionfib(n){
    if (n < 2) {
        return n
    }

    return reccurtionfib(n-1) + reccurtionfib(n-2)
}


console.log(reccurtionfib(6))