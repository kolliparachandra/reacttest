var CPSFactorial = function(n, cont) {
    if (n < 2) {
        return cont(n);
    } else {
        var new_cont = function(v) {
            console.log(v);
            var result = v * n;
            return cont(result);
        };
        return CPSFactorial(n - 1, new_cont);
    }
};

CPSFactorial(5, function(v) {
    console.log(`from main ${v}`);
    return v;
});

function fact(n) {
  if (n == 0)
    return 1 ;
  else
    return n * fact(n-1) ;
}

function fact(n,ret){
    if(n===1){
        ret(1);
    }
    else{
        newret=function(p){
            console.log(p);
        const newRet = n * p;
        ret(newRet)
    }
    fact(n-1,newret);
    }
}
fact(5,function(v){
    return v;
})