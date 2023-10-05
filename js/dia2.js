function multiplicar(){
    let tabla = prompt("Escribe un numero del 1 al 10");
    if(tabla >= 0 && tabla < 11){
        for(let i = 0; i <= 10; i++){
            console.log(`${tabla} x ${i} = ${tabla * i}`);
        }
    }
    else{
        console.log(`Numero fora de rang `);
    }
}
function fibo(){
    let a = 1 , b = 1 , suma = 0 , llargada;
        llargada = prompt("Quantes operacions vols");
        for(let i = 1 ; i <= llargada; i++){
            console.log(`fibo[${i}] = ${b}`)
            suma = a;
            a = suma + b ;
            b = suma ;
        }

}