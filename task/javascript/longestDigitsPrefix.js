function longestDigitsPrefix(inputString) {
    return inputString.match(/^\d+/)!=null ? inputString.match(/^\d+/)[0]:"" 
    }
    