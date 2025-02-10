let amigos = [];
limpiarCampo("amigo");

function agregarAmigo() {
    let nombreAgregado = document.getElementById("amigo").value;

    if (nombreAgregado.trim() === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAgregado);
    limpiarCampo("amigo");
    document.getElementById("listaAmigos").innerHTML += `<li>${amigos[amigos.length - 1]}</li>`;
}

function sortearAmigo() {
    let tamañoArray = amigos.length;
    
    if(tamañoArray == 0) {
        alert("La lista de amigos  está vacía.")
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * tamañoArray);
    document.getElementById("resultado").innerHTML = `<li>${amigos[indiceAleatorio]}</li>`; 
}

function limpiarCampo(IdCampo){
    document.getElementById(IdCampo).value = "";
}