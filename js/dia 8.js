function romb() {
    let diagonals = parseInt(prompt("Escriu la longitud de les diagonals"));
    let files = (diagonals / 2) + 1;

    var table = document.createElement('table');

    for (var i = 1; i <= files; i++) {
        var fila = document.createElement('tr');

        for (var k = 0; k < files - i; k++) {
            var vacio = document.createElement('td');
            vacio.style.width = "20px";
            vacio.style.height = "20px";
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

    for (var i = files - 2; i > 0; i--) {
        var fila = document.createElement('tr');

        for (var k = 0; k < files - i; k++) {
            var vacio = document.createElement('td');
            vacio.style.width = "20px";
            vacio.style.height = "20px";
            fila.appendChild(vacio);
        }

        for (var z = 0; z <= 2 * i - 1; z++) {
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
function extensio() {
    let a = prompt("Escriu el teu arxiu ");
    var extensio = a.split(".");
    var novaExtensio = extensio[extensio.length - 1];
    document.body.appendChild(novaExtensio);

}
