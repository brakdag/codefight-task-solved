function checkIncreasingSequence(seq) {
    seq= seq.map((a,i,m)=>a<m[i+1]?1:0)
        seq.pop()
    return seq.reduce((a,e)=>a+e,0)==seq.length
    }
    