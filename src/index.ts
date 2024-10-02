function addList() {
    let list: HTMLElement = document.getElementById("list")!;
    let labellist: HTMLInputElement = document.getElementById("labellist")! as HTMLInputElement;

    let newElement = document.createElement("li");
    newElement.innerHTML = labellist.value;
    list.append(newElement);

    labellist.value="";

}

function RemoveList() {
    let list: HTMLElement = document.getElementById("list")!;
    let removelabellist: HTMLInputElement = document.getElementById("removelabellist")! as HTMLInputElement;
    let indexNum: number = parseInt(removelabellist.value);

    if (list.children.length <= indexNum || indexNum == 0) {
        alert("numero invalido");
        return;
    } 
    
    list.children[indexNum-1].remove();


}

function AddtoDiv() {
    let div: HTMLElement = document.getElementById("divP")!;
    let inPText: HTMLInputElement = document.getElementById("inPText")! as HTMLInputElement;
    let radioNormal1: HTMLInputElement = document.getElementById("radioelim")! as HTMLInputElement;
    let radioBold: HTMLInputElement = document.getElementById("radiobold")! as HTMLInputElement;
    let radioItalic: HTMLInputElement = document.getElementById("radStyleItalic")! as HTMLInputElement;
    let checkBlue: HTMLInputElement = document.getElementById("checkBlue")! as HTMLInputElement;
    let checkBorder: HTMLInputElement = document.getElementById("checkBorder")! as HTMLInputElement;

    let nuevoElemento2: HTMLParagraphElement = document.createElement("p");

    div.append(nuevoElemento2);

    nuevoElemento2.innerHTML = inPText.value;
    if (radioBold.checked) nuevoElemento2.style.fontWeight = "bold";

}





function BotonResultado(tecla: string) {
    let resultado: HTMLInputElement = document.getElementById("resultado")! as HTMLInputElement;
    let borrar = "";
    let primerNumero: number | null = null;  // Guardar el primer número

    resultado.value += tecla;


    if (tecla === "+") {
        primerNumero = parseFloat(resultado.value);
        borrar = tecla;
        //resultado.value = ""; 
    } else if (tecla === "=") {
        
    }


}


