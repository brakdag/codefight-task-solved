function lastDigitRegExp(inputString) {
    l=inputString.match(/\d/g)
    return l[l.length-1]
    }