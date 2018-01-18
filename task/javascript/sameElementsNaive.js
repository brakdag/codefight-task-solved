function sameElementsNaive(a, b) {
    st = new Set(a)
    c=0
    for (e of b)
        {
           c= st.has(e) ? c+1:c;
        }
        
       return c 
    }