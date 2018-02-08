function checkSameElementExistence(arr1, arr2) {
    st =new Set(arr2)
    return arr1.reduce((a,e,i)=>st.has(e)? a|1:a,0)
    }