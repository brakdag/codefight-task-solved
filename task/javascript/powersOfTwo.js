function powersOfTwo(n) {
    return n.toString(2).split``.reverse().map((v,i,m)=>v*Math.pow(2,i)).filter(e=>e!=0)
    }