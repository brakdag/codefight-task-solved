function unrandom(r) {
  j=[]
  rngstate_0=rngstate_1=rngstate_2=rngstate_3=1
  while((MathRandom()+"")!=r[0]){
    
  }
MathRandom()
  MathRandom()
  MathRandom()
    
return  MathRandom()
}
function MathRandom() {
  var r0 = (MathImul(18030, rngstate_0) + rngstate_1) | 0;
  var r1 = (MathImul(36969, rngstate_2) + rngstate_3) | 0;
  rngstate_0 = r0 & 0xFFFF;
  rngstate_1 = r0 >>> 16;
  rngstate_2 = r1 & 0xFFFF;
  rngstate_3 = r1 >>> 16;
  // Construct a double number 1.<32-bits of randomness> and subtract 1.
  return _ConstructDouble(0x3FF00000 | (r0 & 0x000FFFFF), r1 & 0xFFF00000) - 1;
}
function MathImul(a,b){
  return Math.imul(a,b)
}
function _ConstructDouble(high, low)
{
    var buf = new ArrayBuffer(8);
    // This following is for a little-endian machine.  For a
    // big-endian machine reverse the indices.
    (new Uint32Array(buf))[1] = high;
    (new Uint32Array(buf))[0] = low;
    return new Float64Array(buf)[0];
}

x=unrandom(["0.013992608059197664", "0.2918244160246104", "0.09671404818072915", "0.8902827829588205"])
console.log(x)