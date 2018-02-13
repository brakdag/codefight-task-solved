function removeDuplicateCharacters(str) {
    m=[]
        for(s of str)
            m[s]=m[s]==undefined ? 1:m[s]+1
        
       return str.split``.filter(a=>m[a]==1).join``
    }