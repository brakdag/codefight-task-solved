function rangeArray(l, r, step) {
    
      var result = [];
      while (l < r) {
        result.push(l);
        r += step;
      }
      return result;
    }