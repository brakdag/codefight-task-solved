/* Suponiendo que hay dos puertas, una puerta es izquierda
la otra es derecha. Si se puede pasar a través de una profundidad
de k puertas, cuales serían los recorridos posibles.
*/

function viaje(k,n) {
if(k==0) {return n} 
if(k==1) return [viaje(k-1,n)+1,viaje(k-1,n)*1]
if(k>1) return viaje(k-1,n).map(a=>[a.map(b=>b+1),a.map(b=>b*2)])
}

    console.log(viaje(3,10))    
