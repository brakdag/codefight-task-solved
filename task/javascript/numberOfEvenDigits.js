function numberOfEvenDigits(n) {
    return n.toString().split``.reduce((a,e)=>e%2==0?a+1:a,0)
    }