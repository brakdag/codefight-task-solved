function isCorrectSentence(s) {
    return s.match(/^[A-Z]/)!=null && s.match(/[\.]$/)!=null
    }