const fibonacci =(props) =>{
    let feb = [0,1]
 for(let i=2;i<=props;i++){
    feb[i] = feb[i-1] + feb[i-2]
 }   
 return feb
}

// fibonacci(4) = [ 0, 1, 1, 2, 3 ]
// fibonacci(6) = [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(6)); 
