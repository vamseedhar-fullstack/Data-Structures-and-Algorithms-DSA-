function Tower_of_Hanoi(n, fromrod,torod,usingrod){
    if(n ===1){
        console.log(`Move Disk 1 from ${fromrod} to ${torod}` )
        return
    }

    Tower_of_Hanoi(n-1, fromrod, usingrod , torod) 
    console.log(`Move Disk ${n} from ${fromrod} to ${torod}`)
    Tower_of_Hanoi(n-1,usingrod,torod,fromrod)
}

Tower_of_Hanoi(2,"A","C","B");