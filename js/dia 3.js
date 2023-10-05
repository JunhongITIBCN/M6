function quadrat() {
    let a = prompt("Escribe la base a multiplicar");
    let b = prompt("Escribe el numero elevado a multiplicar");
    let suma = a ;
    console.time("Math timer");
    let resultado = Math.pow(a, b);
    console.timeEnd("Math timer");
    console.log(`El resultado de ${a} elevado a la ${b} es: ${resultado}`);
    console.time("Bucle timer");
    for(let i = 1 ; i < b ; i++ ){
        suma = suma * a ;
    }
    console.timeEnd("Bucle timer");
    console.log(`El resultado de ${a} elevado a la ${b} es: ${suma}`);

}

function operacions(){
    let a = prompt("Escriu el primer numero");
    let b = prompt("Escriu el segon numero");
    let c = prompt("Escriu el tercer numero");
    let suma = parseFloat(a) + parseFloat(b) + parseFloat(c); 
    const lista = [a,b,c];
    console.log(`La ordenacio de petit a gran ${lista.sort()}`);
    console.log(`La mitja es:  ${lista[1]}`);
    suma = suma / 3 ;
    console.log(`La mitjana es:  ${suma}`);

}
