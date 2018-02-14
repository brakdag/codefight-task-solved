function reflectString(inputString) {
    d="abcdefghijklmnopqrstuvwxyz"
    b="zyxwvutsrqponmlkjihgfedcba"
    return inputString.split``.map(a=>b[d.indexOf(a)]).join``
        
    }