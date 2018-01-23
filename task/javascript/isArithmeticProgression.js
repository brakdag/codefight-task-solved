function isArithmeticProgression(sequence) {
    d= sequence[0]-sequence[1]
    l=sequence.map((a,i,m)=>a-m[i+1])
    l.pop()
    console.log(l)  
    return l.reduce((a,e)=>a+e,0)/l.length == l[0]
    }