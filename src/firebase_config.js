// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBglU6sCftrhKRH9AK47PusH8wB55o98eE",
  authDomain: "fir-blog-31f70.firebaseapp.com",
  projectId: "fir-blog-31f70",
  storageBucket: "fir-blog-31f70.appspot.com",
  messagingSenderId: "338180473165",
  appId: "1:338180473165:web:d815160dc39ed473163704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();