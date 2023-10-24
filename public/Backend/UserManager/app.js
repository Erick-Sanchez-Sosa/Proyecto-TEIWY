import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Initialize Firebase
import {app} from "./firebase.js" 
import {auth} from "./firebase.js" 
const database = getDatabase(app);

document.getElementById('Cancel-button').addEventListener('click', () => {
    location.href = 'Login.html';
    });

//funcion de Registrar
document.getElementById('signup-button').addEventListener('click', () => {
    const name = document.getElementById('nombreRegistro').value;
    const email = document.getElementById('correoRegistro').value;
    const password = document.getElementById('contrasenaRegistro').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
            username: name,
            email: email,
            password: password
          });


        console.log('Usuario registrado:', user);

        //Modal Acierto
        document.getElementById("modalAcierto").style.display = "block";


        // Cerrar el cuadro modal al hacer clic en la "X"
        document.getElementById("cerrarModalAcierto").addEventListener("click", function() {
        document.getElementById("modalAcierto").style.display = "none";})  

        })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al registrar:', errorCode, errorMessage);

         // Mostrar el cuadro modal 
        document.getElementById("modalError").style.display = "block";


        // Cerrar el cuadro modal al hacer clic en la "X"
        document.getElementById("cerrarModal").addEventListener("click", function() {
        document.getElementById("modalError").style.display = "none";})
        });
        
    });


