import {  onAuthStateChanged   } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Initialize Firebase
import {app} from "./firebase.js" 
import {auth} from "./firebase.js" 

const database = getDatabase(app);
//const user = auth.currentUser;

// Elementos del DOM para mostrar el estado de autenticación
const loggedInDiv = document.getElementById('logged-in');
const loggedOutDiv = document.getElementById('logged-out');

// Función para establecer una variable de sesión en sessionStorage
function setSessionStatus(isAuthenticated) {
    if (isAuthenticated) {
        sessionStorage.setItem('userAuthenticated', 'true');
    } else {
        sessionStorage.removeItem('userAuthenticated');
    }
}



// Función para mostrar u ocultar elementos según el estado de autenticación
function toggleAuthUI(user) {
    if (user && user !== null) {
        // El usuario está autenticado
        //loggedInDiv.style.display = 'block';
        //loggedOutDiv.style.display = 'none';
        console.log('Usuario autenticado:', user.uid);

                //const userId = auth.currentUser.uid;
                return onValue(ref(database, '/users/' + user.uid), (snapshot) => {
                const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
                const email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
                    document.getElementById("UserMenu").textContent=username;
                    document.getElementById("emailMenu").textContent=email;
                }, {
                onlyOnce: true
                });
       
            // The user object has basic properties such as display name, email, etc.
            //const displayName = user.displayName;
            //const email = user.email;
            //const photoURL = user.photoURL;
            //const emailVerified = user.emailVerified;
          
            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            //const uid = user.uid;
            //document.getElementById('UserMenu').value = displayName;
    } else {
        // El usuario no está autenticado
        //loggedInDiv.style.display = 'none';
        //loggedOutDiv.style.display = 'block';
        console.log('Usuario no autenticado');
        location.href = 'Login.html';
    }
}

export {toggleAuthUI};

// Observador de cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
    // Cuando se llama a esta función, Firebase notificará automáticamente los cambios en la autenticación.
    toggleAuthUI(user);
});

// Evento de clic en un botón para cerrar sesión
/*
document.getElementById('closeSession').addEventListener('click', () => {
    // Cierra la sesión del usuario
    auth.signOut().then(() => {
        // La sesión se cerró con éxito
        console.log('Sesión cerrada');
        setSessionStatus(false);
        location.href = 'index.html';
    }).catch((error) => {
        // Hubo un error al cerrar la sesión
        console.error('Error al cerrar sesión:', error);
    });
});
*/







