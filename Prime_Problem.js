function check_prime(N){
    let factor=0;
    for(i=0;i<N+1;i++){
        if(N%i===0){
            count++;
        }
    }
    if(factor===2){
        conmsole.lag("Prime");
    }
    else{
        conmsole.lag("Not Prime");
    }
}

check_prime(13);