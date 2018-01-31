function countNeighbouringPairs(inputString) {
    return inputString.split``.reduce((a,e,i,m)=>m[i]==m[i+1]?a+1:a,0)
    }