// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visible
    actualizarLista();
}

// Función para actualizar la lista en HTML
function actualizarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li"); // Crear un nuevo <li>
        elemento.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(elemento); // Agregarlo a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Obtener el elemento donde se mostrará el resultado
    const resultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista. Agrega al menos uno.";
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}
