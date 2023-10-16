function crearTaula() {
    let files = parseInt(prompt("Escriu les files"));
    let columnes = parseInt(prompt("Escriu les columnes"));

    var table = document.createElement('table');

    for (var i = 1; i <= files; i++) {
        var fila = document.createElement('tr');
        for (var j = 1; j <= columnes; j++) {
            var column = document.createElement('td');
            var Text = document.createTextNode(i + '-' + j);
            column.appendChild(Text);
            column.style.border = '1px solid black';
            fila.appendChild(column);
        }
        table.appendChild(fila);

    }
    document.body.appendChild(table);

}

function crearTaulaDinamica() {
    let files = parseInt(prompt("Escriu les files"));
    let columnes = parseInt(prompt("Escriu les columnes"));

    var table = document.createElement('table');

    for (var i = 1; i <= files; i++) {
        var fila = document.createElement('tr');
        for (var j = 1; j <= columnes; j++) {
            var column = document.createElement('td');
            column.textContent = i * j;
            column.style.border = '1px solid black';
            fila.appendChild(column);
        }
        table.appendChild(fila);

    }
    document.body.appendChild(table);


}

function piramide() {
    let columnes = parseInt(prompt("Escriu les columnes"));
    let files = (columnes / 2) + 1;

    var table = document.createElement('table');

    for (var i = 1; i <= files; i++) {
        var fila = document.createElement('tr');

        for (var k = 0; k < files - i; k++) {
            var vacio = document.createElement('td');
            vacio.style.width = "20px";
            vacio.style.height = "20px";
            vacio.style.backgroundColor = "green"; 
            fila.appendChild(vacio);
        }

        for (var j = 1; j <= 2 * i - 1; j++) {
            var column = document.createElement('td');
            column.style.width = "20px";
            column.style.height = "20px";
            column.style.backgroundColor = "red";
            fila.appendChild(column);
        }

        table.appendChild(fila);
    }
  
    document.body.appendChild(table);
}


