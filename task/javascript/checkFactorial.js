function checkFactorial(n) {
    x=0
        while(f(x)<=n){
            x++
        }
        
    return f(x-1)==n
    }
    
    function f(x){
        if(x<2) return 1
        return x*f(x-1)
    }