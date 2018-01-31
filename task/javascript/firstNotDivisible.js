function firstNotDivisible(divisors, start) {
    for(i=start;;i++){
        c=0
        for(j of divisors)
            if(i%j!=0)c++
        if(c==divisors.length) return i
    }
    }