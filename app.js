let amigos = [];

function agregarAmigo() {
    
    let nombreAgregado = document.getElementById("amigo").value;

    if (!validarEntrada(nombreAgregado, "nombre")) {
        return;
    }

    amigos.push(nombreAgregado);
    limpiarCajaPorId("amigo");
    agregarEnLista(amigos[amigos.length - 1]);
}

function validarEntrada(dato, tipoDato) {
    if (dato.trim() === '') {
        alert(`Por favor, inserte un ${tipoDato}.`);
        return false;
    }
    return true;
}

function limpiarCajaPorId(Id) {
    document.getElementById(Id).value = "";
}


function agregarEnLista(elementoEnArray) {
    let lista = document.getElementById("listaAmigos");
    let elemento = document.createElement("li");
    
    elemento.textContent = elementoEnArray;
    lista.appendChild(elemento);
}


//TODO Functions:
// Add names: Type a friend's name in the text field and click "Add" to add it to the visible list and validate the input;
//If the text field is empty, an alert will appear asking for a valid name. The entered names will appear in a list below 
//the input field.

// Random draw: Click the "Draw a Friend" button to randomly select a name from the list and display it on the page. 