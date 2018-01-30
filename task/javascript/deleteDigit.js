function deleteDigit(n) {
    s=[]
    x=n.toString()
    l=x.length
        for(i=0;i<l;i++)
    {
       s.push(x.split``.filter((a,j)=>j!=i).join``*1)
    }      
        return s.sort((a,b)=>b-a)[0]
    }
    