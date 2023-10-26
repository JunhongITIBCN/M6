function endevinament() {

    let a = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let numero;

    while (numero !== a) {

        numero = parseInt(prompt("Introduce el número que crees que es: "));

        if (numero >= 1 && numero <= 100) {

            if (numero > a) {
                console.log('El numero es menor.');
            } else if (numero < a) {
                console.log('El numero es mayor.');
            }
        } if (numero == 0) {
            console.log(`Game Over`);
            break;
        }
        else {
            console.log('Por favor, introduce un número válido entre 1 y 100.');
        }

        intentos++;
    }

    console.log(`¡Has adivinado en ${intentos} intentos! El número era ${a}.`);
}

function Dimecres() {
    let primerAny, segonAny;

    primerAny = parseInt(prompt("Introduce el primer año (entre 2000 y 2050): "));
    segonAny = parseInt(prompt("Introduce el segundo año (entre 2000 y 2050): "));

    while (primerAny < 2000 || primerAny > 2050 || segonAny < 2000 || segonAny > 2050) {
        console.log("Por favor, introduce años entre 2000 y 2050.");

        primerAny = parseInt(prompt("Introduce el primer año (entre 2000 y 2050): "));
        segonAny = parseInt(prompt("Introduce el segundo año (entre 2000 y 2050): "));
    }
    let condicio = false;
    for (let year = Math.min(primerAny, segonAny); year <= Math.max(primerAny, segonAny); year++) {

        const dayOfWeek = new Date(year, 0, 1).getDay();

        if (dayOfWeek === 3) {
            console.log(`El primer año que empezó en miércoles dentro del rango es: ${year}.`);
            condicio == true;
            return;
        }
    }
    if (!condicio) {
        console.log("No se encontró ningún año entre los proporcionados que empezara en miércoles.");
    }

}

function pentavocalica(){
    let paraula = prompt("Escriu un paraula");
    let vocals=  "aeiouáéíóúüàèìòùâêîôûäëïöüÁÉÍÓÚÜÀÈÌÒÙÂÊÎÔÛÄËÏÖÜ";
    let contador = 0;

    for(var i = 0 ; i < paraula.length ; i++){
        if(vocals.includes(paraula.charAt(i))){
            contador++;
        }
    }
    if(contador >= 5){
        console.log(`La paraula ${paraula} és pentavolica`);
    }else{
        console.log(`La paraula ${paraula} no és pentavolica`);
    }
}
