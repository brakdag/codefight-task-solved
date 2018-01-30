function validTime(time) {
    
      var charToInt = function(symbol) {
        return symbol.charCodeAt() - '0'.charCodeAt();
      }
    
      var hours = charToInt(time[0]) * 10 + charToInt(time[1]),
          minutes =  charToInt(time[2]) * 10 + charToInt(time[]) ;
    
      if (hours < 24 && minutes < 60) {
        return true;
      }
      return false;
    }
    