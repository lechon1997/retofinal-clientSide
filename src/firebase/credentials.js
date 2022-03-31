// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOOIYmbjsYknZ_TxxrWSFfF3flCn7vQ8M",
  authDomain: "sofka-facturacion.firebaseapp.com",
  projectId: "sofka-facturacion",
  storageBucket: "sofka-facturacion.appspot.com",
  messagingSenderId: "206001385484",
  appId: "1:206001385484:web:cb1f82688d2f24228ebe29",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
