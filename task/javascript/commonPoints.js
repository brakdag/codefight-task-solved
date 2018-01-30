function commonPoints(l1, r1, l2, r2) {
    a=[]
    b=[]
    for(i=l1+1;i<r1;i++)
    a.push(i);
    for(i=l2+1;i<r2;i++)
    b.push(i);
    c=0
    for(e of b)    
    if(a.includes(e)) c++;
        return c
    }
    