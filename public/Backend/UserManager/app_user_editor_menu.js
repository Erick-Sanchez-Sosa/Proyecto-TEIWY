import {  updatePassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

//import {app} from "./firebase.js" 
import {auth} from "./firebase.js" 
import { toggleAuthUI } from './app_user_observer.js';


onAuthStateChanged(auth, (user) => {
    if (user) {
      //const uid = user.uid;
      document.getElementById('editarPerfil').addEventListener('click', () => {
   
      const newPassword = document.getElementById('newContrasenaRegistro').value; //aqui debe ir antes una funcion que compruebe que las constraseñas este verificada
        
        updatePassword(user, newPassword).then(() => {
            console.log("Contraseña actualizada con exito") //aqui tiene que ir un aviso o pop up

          //Modal Acierto
          document.getElementById("modalAcierto").style.display = "block";


          // Cerrar el cuadro modal al hacer clic en la "X"
          document.getElementById("cerrarModalAcierto").addEventListener("click", function() {
          document.getElementById("modalAcierto").style.display = "none";})

          }).catch((error) => {
            // An error ocurred
            // ...
            console.log("Error al actualizar la contraseña: "+ error) //aqui tiene que ir un aviso o pop up
            
            // Mostrar el cuadro modal 
            document.getElementById("modalError").style.display = "block";


            // Cerrar el cuadro modal al hacer clic en la "X"
            document.getElementById("cerrarModal").addEventListener("click", function() {
              document.getElementById("modalError").style.display = "none";})
          }); 
    });   

    } else {
        console.log("La sesion del usuario no se encontro"+ error)
    }
  });

document.getElementById('editarPerfilMenuButton').addEventListener('click', () => {
    location.href = 'menu_temporal.html';
}); 


