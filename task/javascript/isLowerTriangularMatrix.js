function isLowerTriangularMatrix(m) {
    
        for(i=0;i<m.length;i++)
            for(j=i+1;j<m.length;j++)
                if(m[i][j]!=0) return false
        
        return true
        
    }