function regularBracketSequence2(sequence) {
    for(i=0;i<10;i++){
    sequence = sequence.replace(/\(\)/g,"")
    sequence = sequence.replace(/\[\]/g,"")   
        console.log(sequence)}
    try {eval(sequence)}
    catch(e){ 
        console.log(e)
        return false}
    return true
    
    }