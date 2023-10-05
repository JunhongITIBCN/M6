function proxim() {

    let a = parseInt(prompt("Escribe el primer numero"));
    let b = parseInt(prompt("Escribe el segundo numero"));
    let num = 100;
    let distancia_primer = Math.abs(a - num);
    let distancia_segon = Math.abs(b - num);
    if (distancia_primer < distancia_segon) {
        console.log(`El numero mes a prop de ${num} es ${a}`);
    } else if (distancia_primer == distancia_segon) {
        console.log(`Tant ${a} com ${b} son igual de pròxims a ${num} `);
    }
    else {
        console.log(`El numero mes a prop de ${num} es ${b}`);

    }
}

function temps() {
    let hora = parseInt(prompt("Escriu les hores"));
    let minut = parseInt(prompt("Escriu els minuts"));
    let segons = parseInt(prompt("Escriu els segons"));

    var data = new Date();
    data.setHours(hora);
    data.setMinutes(minut);
    data.setSeconds(segons + 1);
    var formatTime = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    console.log(`Hora : ${formatTime}`);

}

function dataValida() {
    let any = parseInt(prompt("Escriu el any"));
    let mes = parseInt(prompt("Escriu el mes"));
    let dia = parseInt(prompt("Escriu el dia "));

    var data = new Date(any, mes - 1, dia);
    if (any == data.getFullYear() && mes == data.getMonth() && dia == data.getDate()) {
        console.log(`La data es correcte`);

    } else {
        console.log(`La data es incorrecte`);

    }
}

function dias() {
    let dia = parseInt(prompt("Escriu la quantitat de dias que vols "));
    if (dia < 0 || isNaN(dia)) {
        return "Sius plau, introduix un número de días válid.";
    }

    const años = Math.floor(dia / 365);

    const meses = Math.floor((dia % 365) / 30);

    const diasRestantes = (dia % 365) % 30;

    var resultado = `Anys: ${años}, Mesos: ${meses}, Dies: ${diasRestantes}`;

    console.log(resultado);

}


