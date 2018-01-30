function generar(inicio,fin,cantidad){
    var r= new Array(cantidad).fill(0)
    r=r.map((a)=>Math.trunc(Math.random()*(fin-inicio+.5)))
    return r
}




console.log(generar(1,2,5))
