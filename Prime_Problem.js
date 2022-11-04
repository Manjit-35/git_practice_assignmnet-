function check_prime(N){
    let factors=0;
    for(let i=1;i<=N;i++){
        if(N%i===0){
            factors++;
        }
    }
    if(factors===2){
        return true;
    }
    return false;

}

let answer = check_prime(13);
if (ans == true){
    console.log("Prime Number")
}else{
    console.log("Not a Prime")