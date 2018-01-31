function fractionDivision(a, b) {
    x=a[0]*b[1]
    y=a[1]*b[0]
    g=gcd(x,y)
    return [x/g,y/g]
    }
    var gcd = function(a, b) {
        if ( ! b) {
            return a;
        }
    
        return gcd(b, a % b);
    };