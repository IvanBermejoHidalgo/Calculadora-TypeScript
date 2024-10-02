"use strict";
function addList() {
    let list = document.getElementById("list");
    let labellist = document.getElementById("labellist");
    let newElement = document.createElement("li");
    newElement.innerHTML = labellist.value;
    list.append(newElement);
    labellist.value = "";
}
function RemoveList() {
    let list = document.getElementById("list");
    let removelabellist = document.getElementById("removelabellist");
    let indexNum = parseInt(removelabellist.value);
    if (list.children.length <= indexNum || indexNum == 0) {
        alert("numero invalido");
        return;
    }
    list.children[indexNum - 1].remove();
}
function AddtoDiv() {
    let div = document.getElementById("divP");
    let inPText = document.getElementById("inPText");
    let radioNormal1 = document.getElementById("radioelim");
    let radioBold = document.getElementById("radiobold");
    let radioItalic = document.getElementById("radStyleItalic");
    let checkBlue = document.getElementById("checkBlue");
    let checkBorder = document.getElementById("checkBorder");
    let nuevoElemento2 = document.createElement("p");
    div.append(nuevoElemento2);
    nuevoElemento2.innerHTML = inPText.value;
    if (radioBold.checked)
        nuevoElemento2.style.fontWeight = "bold";
}
function BotonResultado(tecla) {
    let resultado = document.getElementById("resultado");
    let borrar = "";
    let primerNumero = null; // Guardar el primer número
    resultado.value += tecla;
    if (tecla === "+") {
        primerNumero = parseFloat(resultado.value);
        borrar = tecla;
        //resultado.value = ""; 
    }
    else if (tecla === "=") {
    }
}
