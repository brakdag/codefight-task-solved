function replaceMiddle(arr) {
    if (arr.length % 2 !=0) return arr
    x=(arr[arr.length/2-1]+arr[arr.length/2])/2
    arr[arr.length/2-1]=x*2
    delete arr[arr.length/2]
    return arr.filter(a=>a!=null)
}