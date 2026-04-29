// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVtDuLtwR5amZu1vQeLM5I4WBMQsDyAEU",
  authDomain: "tasks-3da5e.firebaseapp.com",
  projectId: "tasks-3da5e",
  storageBucket: "tasks-3da5e.firebasestorage.app",
  messagingSenderId: "1038984067848",
  appId: "1:1038984067848:web:8ff8b7ebc05e0b3afb4abd"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export{ db };