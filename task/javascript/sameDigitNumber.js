function sameDigitNumber(n) {
    n=n.toString().split``.map((e,i,m)=>e==m[i+1])
    n.pop()
    return n.reduce((a,e)=>a==true==e,true)
    }