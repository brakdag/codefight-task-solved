function caseUnification(inputString) {
    d="abcdefghijklmnopqrstuvwxyz"
    l=inputString.length
    m=inputString.split``.map(a=>d.includes(a)?1:0)
        
    n= m.reduce((a,e)=>a+e*1,0)
    return n>(l-n) ? inputString.toLowerCase():inputString.toUpperCase()
    }