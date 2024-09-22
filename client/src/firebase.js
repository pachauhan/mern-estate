// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ff27b.firebaseapp.com",
  projectId: "mern-estate-ff27b",
  storageBucket: "mern-estate-ff27b.appspot.com",
  messagingSenderId: "626867811567",
  appId: "1:626867811567:web:407c36ae7f99c2fcdb571a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
