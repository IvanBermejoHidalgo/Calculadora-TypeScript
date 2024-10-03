"use strict";
function BotonResultado(tecla) {
    let resultado = document.getElementById("resultado");
    //let borrar = "";
    /*resultado.value += tecla;


    if (tecla === "+") {
        primerNumero = parseFloat(resultado.value);
        borrar = tecla;
        //resultado.value = "";
    } else if (tecla === "=") {
        
    }*/
    //let primerNumero: number = 0;
    //let segundoNumero: number = 0;
    //let display: string = "";
    //let res = 0;
    //let lastElement = resultado.value.slice(-1);
    if (tecla === "=") {
        resultado.value = eval(resultado.value);
    }
    else if (tecla === "ac") {
        resultado.value = "";
    }
    else if (tecla === "%") {
        let num = parseFloat(resultado.value);
        resultado.value = (num / 10).toString();
    }
    else if (tecla === "delete") {
        //lastElement;
        //resultado.splice()
        resultado.value = resultado.value.slice(0, -1);
        ;
    }
    else {
        resultado.value += tecla;
    }
}
