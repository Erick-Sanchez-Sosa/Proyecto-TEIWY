import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Initialize Firebase
import {app} from "./firebase.js" 
import {auth} from "./firebase.js" 

document.getElementById('Cancel-button').addEventListener('click', () => {
    location.href = 'Login.html';
    });

// Evento de clic en un botón para enviar el correo de restablecimiento de contraseña
document.getElementById('reset-password-button').addEventListener('click', () => {
    const email = document.getElementById('correoPasswordReset').value;

    // Envía el correo de restablecimiento de contraseña
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Correo de restablecimiento de contraseña enviado con éxito
            console.log('Correo de restablecimiento de contraseña enviado con éxito');

            //Modal Acierto
            document.getElementById("modalAcierto").style.display = "block";


            // Cerrar el cuadro modal al hacer clic en la "X"
            document.getElementById("cerrarModalAcierto").addEventListener("click", function() {
                document.getElementById("modalAcierto").style.display = "none";})    
            
        })
        .catch((error) => {
            // Hubo un error al enviar el correo de restablecimiento de contraseña
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al enviar el correo de restablecimiento de contraseña:', errorCode, errorMessage);

            // Mostrar el cuadro modal 
            document.getElementById("modalError").style.display = "block";


            // Cerrar el cuadro modal al hacer clic en la "X"
            document.getElementById("cerrarModal").addEventListener("click", function() {
                document.getElementById("modalError").style.display = "none";})

        });
});
