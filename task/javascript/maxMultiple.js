function maxMultiple(divisor, bound) {
    r=[]
    for(i=0;i<bound;i++)
        if(i*divisor<=bound)
            r.push(i)
        return r.sort((a,b)=>b-a)[0]*divisor
    }

    
    function maxMultiple(divisor, bound) {
        for(i=bound ;i>0;i--){
            if( i%divisor==0) return i 
        }
        }
