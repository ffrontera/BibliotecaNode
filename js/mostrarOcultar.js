const iniciarSesion = document.getElementById("toggleIniciosesion");
const registro = document.getElementById("toggleRegistro");
const contenedorRegistro = document.getElementById("contenedorRegistro");
const contenedorInicio = document.getElementById("contenedorInicioSesion");

iniciarSesion.addEventListener("click", () => {
    contenedorInicio.style.display = "flex";
    contenedorRegistro.style.display = "none";
});
registro.addEventListener("click", () => {
    contenedorInicio.style.display = "none";
    contenedorRegistro.style.display = "flex";
});