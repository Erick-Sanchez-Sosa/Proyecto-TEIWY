import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import {app} from "./firebase.js" 
import {auth} from "./firebase.js" 

document.getElementById('buttonRegistrarLogin').addEventListener('click', () => {
    location.href = 'registro.html';
}); 

//funcion ingresar
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('correoIngreso').value;
    const password = document.getElementById('contrasenaIngreso').value;

    // Inicia sesión con correo electrónico y contraseña
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);
            location.href = 'menu_temporal.html';
        })
        .catch((error) => {
            // Error durante el inicio de sesión
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al iniciar sesión:', errorCode, errorMessage);

            // Mostrar el cuadro modal de error al hacer clic en el botón
            document.getElementById("modalError").style.display = "block";


            // Cerrar el cuadro modal al hacer clic en la "X"
            document.getElementById("cerrarModal").addEventListener("click", function() {
                document.getElementById("modalError").style.display = "none";
            });
        });
});    