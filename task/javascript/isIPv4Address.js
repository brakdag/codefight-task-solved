function isIPv4Address(s) {
    if(s.split(".").length!=4)return false
    
    for(a of s.split("."))
        {
            if(a=="") return false
            if(a>255 || a<0) return false
            if(a.match(/[^\d\.]/)!=null) return false
        }
    return true
    }

    function isIPv4Address(s) {
        if (s.split(".").length!=4 )return false
        for(j of s.split("."))
            if(0>j || j>255 || j=="" || j.toString().match(/[^\d]/)!=null ) return false
        return true
        }