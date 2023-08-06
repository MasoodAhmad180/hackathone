// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ-lww_5lfB-4qf_MThHHIwdwLu07m7VY",
  authDomain: "mynewproject-850be.firebaseapp.com",
  projectId: "mynewproject-850be",
  storageBucket: "mynewproject-850be.appspot.com",
  messagingSenderId: "16564242346",
  appId: "1:16564242346:web:40d02c69ea7918a5bccdd3",
  measurementId: "G-XWPR03KNZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export{db, storage}