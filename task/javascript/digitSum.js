function digitSum(n) {
    return n.toString().split``.reduce((a,e)=>a+e*1,0)
    }