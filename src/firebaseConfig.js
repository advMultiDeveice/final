// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqbx1mAgnUGSnAxt2ENnooM2Kf3v3m1Lc",
  authDomain: "finalproj-da393.firebaseapp.com",
  projectId: "finalproj-da393",
  storageBucket: "finalproj-da393.firebasestorage.app",
  messagingSenderId: "338193542521",
  appId: "1:338193542521:web:4099ca89c26ba007ff53a8",
  measurementId: "G-5L968YFZYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);