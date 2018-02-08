function appleBoxes(k) {
    y=0
    r=0
    for(i=1;i<=k;i++){
        y+= i%2==0 ? Math.pow(i,2):0
        r+= i%2!=0 ? Math.pow(i,2):0
    }
        return y-r
    }