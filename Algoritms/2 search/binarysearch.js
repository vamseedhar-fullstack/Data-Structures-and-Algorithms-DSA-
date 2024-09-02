function binarysearch(arr,target){
    let leftindex = 0;
    let rightindex = arr.length - 1;

    while(leftindex <= rightindex){
        let middleindex = Math.floor((leftindex+rightindex)/2)
        if(target === arr[middleindex]){
            return middleindex
        }
        if(target < arr[middleindex]){
            rightindex = middleindex -1
        } else {
            leftindex = middleindex + 1
        }
    }
    return -1
}


console.log(binarysearch([1,2,3,4,5,6],6))