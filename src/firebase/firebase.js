// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//Добавлено
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3a5M2k4ZVlP8UErJg0tO7X93RJOJid_o",
    authDomain: "myapp-2d9db.firebaseapp.com",
    projectId: "myapp-2d9db",
    storageBucket: "myapp-2d9db.appspot.com",
    messagingSenderId: "4526875794",
    appId: "1:4526875794:web:2a70dff2ffc97ad12df24b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Модули используемые в проекте(аутентификация и firestore)
export const firestore = getFirestore(app)
export const auth = getAuth(app)