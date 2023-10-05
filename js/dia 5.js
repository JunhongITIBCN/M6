function temperatura() {
    let a = prompt("Escriu una C (celsius) o un F (fahrenheit)");
    let b = parseInt(prompt("Escriu la temperatura"));
    let resultado = b;
    if (a === "c" || a === "C") {

        resultado = (b * 9 / 5) + 32;
        console.log(`la temperatura en celsius es ${resultado}`)

    } else if (a === "f" || a === "F") {

        resultado = (b - 32) * 5 / 9;
        console.log(`la temperatura en fahrenheit es ${resultado}`)
    } else {
        return console.log(`Error`);
    }
}

function convertirNumero() {
    let num = parseInt(prompt("Escriu un numero "));
    let binari = "";
    let octal = "";
    let hexadecimal = "";
    
    let tempNum = num;   

    while (tempNum > 0) {
        binari = (tempNum % 2) + binari;
        tempNum = parseInt(tempNum / 2);
    }   

    tempNum = num;  

    while (tempNum > 0) {
        octal = (tempNum % 8) + octal;
        tempNum = parseInt(tempNum / 8);
    }

    tempNum = num;  

    while (tempNum > 0) {
        hexadecimal = (tempNum % 16).toString(16) + hexadecimal;
        tempNum = parseInt(tempNum / 16);
    }

    console.log(`El numero en binari es ${binari}`);
    console.log(`El numero en octal es ${octal}`);
    console.log(`El numero en hexadecimal es ${hexadecimal}`);
}
