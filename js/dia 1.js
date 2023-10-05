function holaMundo() {
    alert("Hola Mundo!");
}

function adios() {
    alert("Adios");
}

function alerta() {
    alert("alerta!");
}

function cambiarAlert() {
    let text = document.getElementById("i1").value;
    alert("Se ha cambiado: " + text);
}

function taulaMultiplicar() {
    let x = document.getElementById("i2").value;
    for (let i=1; i<=10; i++) {
        let y = x * i;
        let text = (x + "*" + i + "= " + y);
        console.log(text)
    }
}