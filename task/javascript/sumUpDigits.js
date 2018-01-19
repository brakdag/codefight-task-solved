function sumUpDigits(s) {
    x=0
    for (e of s.match(/\d/g)) x+=parseInt(e);
    return x
}
