function sistema() {
    const fecha = new Date();
    const [dia, mes, año] = [fecha.getDate(), fecha.getMonth() + 1, fecha.getFullYear()];
    const [hora, minut, segon] = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()];

    let segonsSetmana = 1000 * 60 * 60 * 24 * 7;
    let dataEnMilliseconds = fecha.getTime();
    let AnyComençament = new Date(fecha.getFullYear(), 0, 1).getTime();
    let setmana = Math.ceil((dataEnMilliseconds - AnyComençament) / segonsSetmana);


    let segonsDies = 1000 * 60 * 60 * 24;
    let diasPassats = dataEnMilliseconds - AnyComençament;
    let diasEnUnAny = Math.ceil(new Date(fecha.getFullYear() + 1, 0, 1).getTime() - AnyComençament);
    let percentagediasPassats = (diasPassats / diasEnUnAny) * 100;

    // 1
    console.log(`Avui és ${dia} del mes ${mes} de l'any ${año}`);

    // 2
    console.log(`El nombre de setmana actual es ${setmana}`);

    //3
    console.log(`% de dies actual es ${percentagediasPassats.toFixed(2)}`);

    //4
    console.log(`% de dies que falten es ${100 - percentagediasPassats.toFixed(2)}`);

    //5
    console.log(`Ara son les ${hora}:${minut}:${segon}`);

    //6
    let segonsDia = (hora * 60 * 60) + (minut * 60) + 24;
    let percentagedia = (segonsDia * 100) / 86400;

    console.log(`% del dia transcorregut  ${percentagedia.toFixed(2)}`);

    //7
    console.log(`% de dia que falta ${100 - percentagedia.toFixed(2)}`);



}


function CodiBarres() {
    let codi = prompt("Escriu el teu codi de barres");


    if (codi.length < 8) {
        codi = "00000000" + codi; 
        codi = codi.slice(-8);   
    } else if ( codi.length > 8 && codi.length < 13) {
        codi = "0000000000000" + codi; 
        codi = codi.slice(-13);        
    }

    if (codi.length === 8) {
        // Calcular el dígito de control para EAN-8
        let sumaPares = 0;
        let sumaImpares = 0;

        for (let i = 0; i < 7; i++) {
            if (i % 2 === 0) {
                sumaImpares += parseInt(codi[i]);
            } else {
                sumaPares += parseInt(codi[i]);
            }
        }

        let sumaTotal = sumaImpares * 3 + sumaPares;
        let digitoControlCalculado = (10 - (sumaTotal % 10)) % 10;

        // Verificar si el dígito de control calculado coincide
        console.log(`${codi} -->`,"EAN-8 Validation:", digitoControlCalculado === parseInt(codi[7]));
    }else if (codi.length === 13) {

        // Calcular el dígito de control para EAN-13
        let sumaPares = 0;
        let sumaImpares = 0;

        for (let i = 0; i < 12; i++) {
            if (i % 2 === 0) {
                sumaPares += parseInt(codi[i]);
            } else {
                sumaImpares += parseInt(codi[i]);
            }
        }

        let sumaTotal = sumaImpares * 3 + sumaPares;
        let digitoControlCalculado = (10 - (sumaTotal % 10)) % 10;

        // Verificar si el dígito de control calculado coincide
        console.log(`${codi} -->`,"EAN-13 Validation:", digitoControlCalculado === parseInt(codi[12]));

    }
}