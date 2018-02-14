function firstNotDivisible(divisors, start) {
    for(i=start;;i++){
        c=0
        for(j of divisors)
            if(i%j!=0)c++
        if(c==divisors.length) return i
    }
    }


    function firstNotDivisible(d, s) {
        for(i=s;;i++){
            c=0
            for(j of d) c=(i%j)!=0 ? c+1:0
            if(c==d.length) break
        }
            return i
        }
        