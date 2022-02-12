// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlBNyA0EDS9UqGz7kApuu36Q4nQ2L7CkU",
  authDomain: "e-commerce-34c23.firebaseapp.com",
  projectId: "e-commerce-34c23",
  storageBucket: "e-commerce-34c23.appspot.com",
  messagingSenderId: "457776059297",
  appId: "1:457776059297:web:052c899a1ce2aceb3231e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirebaseApp(params) {
    return app
}