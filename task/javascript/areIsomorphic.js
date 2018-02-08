function areIsomorphic(array1, array2) {
    if(array1.length==array2.length)
        for(i in array1)
            {
                if(array1[i].length!=array2[i].length)return false
            }
        else{
            return false
        }
    return true
    }