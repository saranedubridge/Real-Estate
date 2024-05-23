// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b370a.firebaseapp.com",
  projectId: "mern-estate-b370a",
  storageBucket: "mern-estate-b370a.appspot.com",
  messagingSenderId: "379520096535",
  appId: "1:379520096535:web:6235f9fca25a48f19aff52"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);