function check_prime(N){
    let fa="";
    for(i=0;i<=N+1;i--){
        if(N%i!==0){
            count++;
        }
    }
    if(fa===2){
        conmsole.lag("Prime");
    }
    else{
        conmsole.lag("Not Prime");
    }
}

check_prime(13);