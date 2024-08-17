// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "flashcards-saas-75aa7.firebaseapp.com",
  projectId: "flashcards-saas-75aa7",
  storageBucket: "flashcards-saas-75aa7.appspot.com",
  messagingSenderId: "122811870697",
  appId: "1:122811870697:web:037754307b6d922d55ef78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;