// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6uKYQU3W1MJAEo1HyA7fPYKjh55va1_k",
    authDomain: "fitness-web-7aafe.firebaseapp.com",
    projectId: "fitness-web-7aafe",
    storageBucket: "fitness-web-7aafe.appspot.com",
    messagingSenderId: "488048743822",
    appId: "1:488048743822:web:52aa852291efb876b980df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth;