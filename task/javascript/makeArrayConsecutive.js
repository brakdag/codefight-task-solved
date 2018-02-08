function makeArrayConsecutive(s) {
    r=[]
        s=s.sort((a,b)=>a-b)
        for(i=s[0];i<s[s.length-1];i++)
            if( s.indexOf(i)==-1)r.push(i)
        
    return r
    }