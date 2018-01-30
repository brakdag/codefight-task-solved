function isIncreasingDigitsSequence(n) {
    n= n.toString().split``
    for(i=0;i<n.length-1;i++)
       if(n[i]>=n[i+1]) return false
       return true;
 }