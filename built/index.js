"use strict";
let results = false;
function BotonResultado(tecla) {
    let resultado = document.getElementById("resultado");
    if (tecla === "=") {
        resultado.value = eval(resultado.value);
        results = true;
    }
    else if (tecla === "ac") {
        resultado.value = "";
        results = false;
    }
    else if (tecla === "%") {
        let num = parseFloat(resultado.value);
        resultado.value = (num / 10).toString();
        results = true;
    }
    else if (tecla === "delete") {
        resultado.value = resultado.value.slice(0, -1);
        results = false;
    }
    else if (results) {
        resultado.value = tecla;
        results = false;
    }
    else {
        resultado.value += tecla;
    }
}
