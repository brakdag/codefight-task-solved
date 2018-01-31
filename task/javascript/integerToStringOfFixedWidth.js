function integerToStringOfFixedWidth(number, width) {
    l=number.toString().length
    if(width<l){
        return number.toString().split``.reverse().join``.substr(0,width).split``.reverse().join``
    }else{
    if(width-l>0){
      return "0".repeat(width-l)+number.toString()}
    else if(l==width)
        return number+""   
    }
    }
    