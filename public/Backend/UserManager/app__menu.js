import {app} from "./firebase.js" 
import {auth} from "./firebase.js" 


document.getElementById('closeSession').addEventListener('click', () => {
    // Cierra la sesión del usuario
    auth.signOut().then(() => {
        // La sesión se cerró con éxito
        console.log('Sesión cerrada');
        setSessionStatus(false);
        location.href = 'Login.html';
    }).catch((error) => {
        // Hubo un error al cerrar la sesión
        console.error('Error al cerrar sesión:', error);
    });
});

document.getElementById('editarPerfilMenuButton').addEventListener('click', () => {
    location.href = 'menu_editarPerfil.html';
}); 
