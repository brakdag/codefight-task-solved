function knapsackLight2(w1, w2, maxW) {
    maxW++
if ((w1+w2)<maxW) return "both"
if(w1<maxW && w2<maxW) return "either"

if(w1<maxW) return "first"
if(w2<maxW) return "second"
return "none"
    
}
