// Mostrar el cuadro modal de error al hacer clic en el botón
document.getElementById("mostrarError").addEventListener("click", function() {
    document.getElementById("modalError").style.display = "block";
});

// Cerrar el cuadro modal al hacer clic en la "X"
document.getElementById("cerrarModal").addEventListener("click", function() {
    document.getElementById("modalError").style.display = "none";
});