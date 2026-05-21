const titulo = document.getElementById('miTitulo');
const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
    titulo.textContent = "¡Texto Cambiado, DOM Manipulado!";

    titulo.style.color = "#ffdd59";

    titulo.style.fontSize = "56px";

    titulo.style.textShadow = "0px 4px 15px rgba(255, 221, 89, 0.4)";
});
