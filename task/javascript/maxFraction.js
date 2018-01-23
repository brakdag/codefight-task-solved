function maxFraction(n, d) {
    n=n.map((a,i)=>[a/d[i],i]).sort((a,b)=>b[0]-a[0])
    return n[0][1]
    }