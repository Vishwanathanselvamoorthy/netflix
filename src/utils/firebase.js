// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeMW93-jQuCjyC2GH-gqru-LhHSqv17u0",
  authDomain: "netflix-gpt24.firebaseapp.com",
  projectId: "netflix-gpt24",
  storageBucket: "netflix-gpt24.appspot.com",
  messagingSenderId: "967383379030",
  appId: "1:967383379030:web:0b4330882426b35bde5ff7",
  measurementId: "G-TVFQ3LQV6Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
