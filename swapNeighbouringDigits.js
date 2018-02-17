function swapNeighbouringDigits(n) {
    n=n.toString().split``
        for(i=0;i<n.length;i+=2){
        temp = n[i]
        n[i]=n[i+1]
        n[i+1]=temp
    }
        return n.join``*1
    
    }