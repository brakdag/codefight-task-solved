function firstMultiple2(divisors, start) {
    l=divisors.length
for(i=start;;i++){
    if(divisors.reduce((a,e)=>i%e==0?a+1:a,0)>=1) return i
}
}