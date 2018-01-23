function hammingDistance(string1, string2) {
    return string1.split``.map((a,i)=>a==string2[i]?0:1).reduce((a,e)=>a+e,0)
    }