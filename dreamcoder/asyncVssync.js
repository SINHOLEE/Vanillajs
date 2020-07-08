[1,2,3,4].forEach((i)=>{
    console.log(`processing ${i}`);
    console.log(i);
    delay();
})

function asyncForeach(arr, cb, onError){
   
    try{
        arr.forEach((q)=>{
            setTimeout(()=>{
                cb(q)
            }, 0);
        }) 
    } catch{
        onError(new Error(console.error("문제이뜸")));
    }
   
}

asyncForeach(
    [12,2,3,4], 
    i=>console.log(i), 
    error=>console.error(error)
    );
