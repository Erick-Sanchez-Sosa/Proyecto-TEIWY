import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6exQQeSoJTbnMf-gI-sy6Yry86P6Hiio",
  authDomain: "pruebadesession.firebaseapp.com",
  databaseURL: "https://pruebadesession-default-rtdb.firebaseio.com",
  projectId: "pruebadesession",
  storageBucket: "pruebadesession.appspot.com",
  messagingSenderId: "1072996644220",
  appId: "1:1072996644220:web:78a0ab0bd49202ce1aa0f9"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);