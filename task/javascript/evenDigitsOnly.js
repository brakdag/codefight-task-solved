function evenDigitsOnly(n) {
    return n.toString().split``.every(a=>a%2==0)
    }