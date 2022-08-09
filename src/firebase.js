// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHQMtHEy_aC4UA7KLNra-rIoguN9gwYI",
  authDomain: "netflex-f358d.firebaseapp.com",
  projectId: "netflex-f358d",
  storageBucket: "netflex-f358d.appspot.com",
  messagingSenderId: "610697262540",
  appId: "1:610697262540:web:e4b4964aa6a55be12a9969"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);