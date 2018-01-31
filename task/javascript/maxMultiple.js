function maxMultiple(divisor, bound) {
    r=[]
    for(i=0;i<bound;i++)
        if(i*divisor<=bound)
            r.push(i)
        return r.sort((a,b)=>b-a)[0]*divisor
    }