function trucada(){

    let horas = parseInt(prompt("Escribe las horas"));
    let minuts = parseInt(prompt("Escribe los minutos"));
    let segons = parseInt(prompt("Escribe los segundos"));
    let trucada = 10;

    const duracioTotalEnSegons = horas * 3600 + minuts * 60  + segons ;
   
    const costPerSegon = (duracioTotalEnSegons / 60) * 5;

    let costTotal = trucada + costPerSegon;

    costTotal = costTotal / 100 ;

    costTotal = costTotal.toFixed(2);


    console.log(`Cost total ${costTotal} € `)

}
function color(){
    let red = parseInt(prompt("Escribe el color"));
    let green = parseInt(prompt("Escribe el color"));
    let blue = parseInt(prompt("Escribe el color"));
    let hexadecimal = "";

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        console.log("Los valores de color deben estar en el rango de 0 a 255.");
        return;
    }
    
    let tempNum = red.toString(16) + green.toString(16) + blue.toString(16);
    hexadecimal = tempNum;

    while (hexadecimal.length < 6) {
        hexadecimal = "0" + hexadecimal;
    }
    hexadecimal = hexadecimal.toUpperCase();

    console.log(`(r,g,b) = #${hexadecimal}`)
}

function canvi() {
    let preu = parseFloat(prompt("Escriu el preu")) * 100;
    let diners = parseFloat(prompt("Escriu els diners")) * 100;

    let canvi = diners - preu;
    let canviTotal = 0;

    const valores = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
   
    let cantidadDevuelta = {};

    for (let valor of valores) {
        let cantidad = Math.floor(canvi / valor);
        if (cantidad > 0) {
            cantidadDevuelta[valor] = cantidad;
            canvi -= cantidad * valor;
            canviTotal += cantidad * valor;
        }
    }   
    console.log(`preu = ${(preu / 100).toFixed(2)}€   calers = ${(diners / 100).toFixed(2)}€`);
    for (let valor in cantidadDevuelta) {
        console.log(`${cantidadDevuelta[valor]} de ${valor} €`);
    }
    console.log(`Total canvi ${canviTotal}€`)

}

