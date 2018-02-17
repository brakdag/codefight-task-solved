function dotProduct(v1, v2) {
    return v1.map((a,i)=>a*v2[i]).reduce((a,e)=>a+e*1,0)
    }
    