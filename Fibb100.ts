function fib(num){
    const fibarray=[0,1];
    for(var i=2;i<num; i++){
        fibarray.push(fibarray[i-2]+fibarray[i-1]);
    }
    return fibarray;
}
console.log(fib(100));