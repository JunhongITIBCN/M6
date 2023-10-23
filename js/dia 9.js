function comparacio(){
    let a =  prompt("Escriu la primera frase: ");
    let b =  prompt("Escriu la segona frase: ");
    if(a.length == b.length){
        console.log("Son iguals");

    }else{
        console.log("No son iguals");
    }   
}

function ContadorLletra(){
    let a =  prompt("Escriu la primera frase : ");
    let lletra =  prompt("Escriu el caracter : ");
    var contador = 0;
    for(var i = 0 ; i <= a.length ; i++){
        if(a.charAt(i) == lletra.charAt(0)){
            contador++;
        }
     
    }
    if(contador>=2 && contador<=4){
        console.log("El caracter surt 2 i 4 vegades al text ");
    }else{
        console.log("No surt de 2 i 4 vevagdes al text");

    }

}

function TreureLletra(){
    let a =  prompt("Escriu la primera frase : ");
    let numero = parseInt(prompt("Escriu el caracter : "));
    let vacio = "";
    for (var i = 0; i < a.length; i++) {
        if (i !== numero) {
            vacio = vacio + a[i];
        }
    }
    document.write(vacio);
}

function Variedad() {
    let a = prompt("Escriu la primera frase: ");
    let contador = 1;
    let vocales = 'aeiouáéíóúüàèìòùâêîôûäëïöüÁÉÍÓÚÜÀÈÌÒÙÂÊÎÔÛÄËÏÖÜ';
    let contadorVocales = 0;
    let vocals = "";
    let b = a;

    document.write("Text en majuscules " + a.toUpperCase());
    document.write("<br>");
    document.write("Text en minuscules " + a.toLowerCase());
    document.write("<br>");
    document.write("Llargada del text " + a.length);
    document.write("<br>");

    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) == " ") {
            contador++;
        }
    }

    if (a.length > 0) {
        document.write("Nombre de paraules: " + contador);
    }

    for (var z = 0; z < a.length; z++) {
        for (var y = 0; y < vocales.length; y++) {
            if (a.charAt(z) == vocales.charAt(y)) {
                vocals = vocals + a.charAt(z);
                contadorVocales++;
            }
        }
    }

    document.write("<br>");
    document.write("Les vocals son: " + vocals);
    document.write("<br>");
    document.write("El nombre de vocals que hi ha: " + contadorVocales);
    document.write("<br>");
    document.write("El text reduit és: ");

    for (var f = 0; f < a.length; f++) {
        b = a.substring(f);
        document.write("<br>");
        document.write(b);
    }
    
}
