function isCaseInsensitivePalindrome(s) {
    s=s.toLowerCase()
    s2=s.split``.reverse().join``
    return s2===s       
}