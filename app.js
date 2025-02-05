let amigos = [];

function agregarAmigo() {
    let nombreAgregado = document.getElementById("amigo").value;

    if (!validarEntrada(nombreAgregado, "nombre")) {
        return;
    }
    
    amigos.push(nombreAgregado);
    document.getElementById("amigo").value = "";
}

function validarEntrada(dato, tipoDato) {
    if (dato.trim() === '') {
        alert(`Por favor, inserte un ${tipoDato}.`);
        return false;
    }
    return true;
}
//TODO Functions:
// Add names: Type a friend's name in the text field and click "Add" to add it to the visible list and validate the input;
//If the text field is empty, an alert will appear asking for a valid name. The entered names will appear in a list below 
//the input field.

// Random draw: Click the "Draw a Friend" button to randomly select a name from the list and display it on the page. 