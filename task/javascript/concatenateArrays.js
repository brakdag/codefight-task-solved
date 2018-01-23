function concatenateArrays(a, b) {
    for (var i = 0; i < b.length; i++) {
      a.push( b[i] );
    }
    return a;
  }