// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDmD-7k10ro6pO2z3kZE9XVCXCJZ4gGV3I",
  authDomain: "mpractiseapp.firebaseapp.com",
  projectId: "mpractiseapp",
  storageBucket: "mpractiseapp.appspot.com",
  messagingSenderId: "543982309164",
  appId: "1:543982309164:web:625b696b4328721f266689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)