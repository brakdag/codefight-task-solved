function isDiagonalMatrix(m) {
    if(m.length!=m[0].length) return false
        
    for (i in m)
        for (j in m[i])
            if(i!=j & m[i][j]!=0)
                return false;
    
    
        return true;
    }