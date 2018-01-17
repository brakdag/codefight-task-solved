function myFilter(inputArray, extraElement) {
    
      var result = [];
      for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] === extraElement) {
          continue;
        }
        result.push(inputArray[i]);
      }
    
      return result;
    }