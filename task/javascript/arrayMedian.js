function arrayMedian(sequence) {
    
      var compareNumbers = function(a, b) {
        return a - b;
      }
    
      var len = sequence.length;
      sequence.sort(compareNumbers);
    
      if (len % 2 === 0) {
        return  (sequence[len / 2]+sequence[len / 2-1])/2 ;
      }
      else {
        return sequence[(len - 1) / 2];
      }
    }
    