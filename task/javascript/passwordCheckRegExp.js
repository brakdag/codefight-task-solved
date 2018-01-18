function passwordCheckRegExp(s) {
    if(s.length <5) return false
    if(s==s.toUpperCase()) return false
    if(s==s.toLowerCase()) return false
    if(s.match(/\d/)==null) return false
    return true
    }