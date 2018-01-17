function create2DArray(l) {
    l=l.map(a=>new Array(a).fill(0))
    l=l.map(a=>a.map((e,i)=>i))
    return l
}