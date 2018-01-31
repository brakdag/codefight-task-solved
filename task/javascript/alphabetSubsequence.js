l="abcdefghijklmnopqrstuvwxyz"
function alphabetSubsequence(s) {
s=s.split``.map(a=>l.indexOf(a))

    for(i=0;i<s.length-1;i++){
        if (s[i]>=s[i+1])
            return false
    }

return true
}