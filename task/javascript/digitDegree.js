function digitDegree(n) {
    c=0
    
    while(n.toString().length>1)
    {
        c++; 
        n=parseInt(n.toString().split``.reduce((a,e)=>a+e*1,0))
        console.log(n)
    }
        
    return c;
    }