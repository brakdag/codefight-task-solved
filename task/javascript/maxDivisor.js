function maxDivisor(left, right, divisor) {
    for(i=right;i>divisor ;i--)
        if(i % divisor ==0)return i
    }