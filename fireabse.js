// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLxt0ZkruDctarsyzT4GnM_6z2b3kfdO8",
  authDomain: "todoapp-reactnative-72970.firebaseapp.com",
  projectId: "todoapp-reactnative-72970",
  storageBucket: "todoapp-reactnative-72970.appspot.com",
  messagingSenderId: "187179689150",
  appId: "1:187179689150:web:360a4dd6bf9fe33e2aeaef",
  measurementId: "G-WJNJYPXYFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;