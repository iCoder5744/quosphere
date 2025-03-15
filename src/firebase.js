// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhcxi5243J3cVkTz8MlT0eTumXdzrCcc0",
  authDomain: "quosphere-c9c7e.firebaseapp.com",
  projectId: "quosphere-c9c7e",
  storageBucket: "quosphere-c9c7e.firebasestorage.app",
  messagingSenderId: "174405914461",
  appId: "1:174405914461:web:328173afe4bb5bbff3a2b4",
  measurementId: "G-LWYG2G9ZNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

