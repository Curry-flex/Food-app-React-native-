import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0nDxnlLLiOdNyljfdABl_CngoKHhnYxA",
  authDomain: "food-app-b638a.firebaseapp.com",
  projectId: "food-app-b638a",
  storageBucket: "food-app-b638a.appspot.com",
  messagingSenderId: "1091346806361",
  appId: "1:1091346806361:web:f8fffdc833494a37b8a348"
};


firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ experimentalForceLongPolling: true });
const db =firebase.firestore()


export default db;



