let amigos = [];
limpiarCampo("amigo");

function agregarAmigo() {
    
    let nombreAgregado = document.getElementById("amigo").value;

    if (!validarEntrada(nombreAgregado, "nombre")) {
        return;
    }

    amigos.push(nombreAgregado);
    limpiarCampo("amigo");
    agregarEnLista(amigos[amigos.length - 1], "listaAmigos");
}

function agregarEnLista(elementoEnArray, lista) {
    let elemento = document.createElement("li");
    
    elemento.textContent = elementoEnArray;
    document.getElementById(lista).appendChild(elemento);
}

function sortearAmigo() {
    tamañoArray = amigos.length;
    
    if(tamañoArray == 0) {
        alert("La lista de amigos  está vacía.")
        return;
    }
    limpiarCampo(listaGanadores);
    let indiceAleatorio = Math.floor(Math.random() * tamañoArray);
    let listaGanadores = document.getElementById("resultado");
    let ganador = document.createElement("li");
    
    ganador.textContent = amigos[indiceAleatorio];
    listaGanadores.appendChild(ganador);
}

function validarEntrada(dato, tipoDato) {
    if (dato.trim() === '') {
        alert(`Por favor, inserte un ${tipoDato}.`);
        return false;
    }
    return true;
}

function limpiarCampo(IdCampo){
    document.getElementById(IdCampo).value = "";
}
