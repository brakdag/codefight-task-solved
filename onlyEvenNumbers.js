function onlyEvenNumbers(left, right) {
    n=[]
        for(i=left;i<=right;i++){
        if(i%2==0)n.push(i)
    }
        return n
}