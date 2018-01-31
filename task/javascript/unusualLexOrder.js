function unusualLexOrder(w) {
    w=w.map(a=>a.split``.reverse().join``).sort()
    return w.map(a=>a.split``.reverse().join``)
    
    }