// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxmcTSRgN3hVUQN94L-pY_dR4eT61_Oj0",
  authDomain: "react-auth-aa0b9.firebaseapp.com",
  projectId: "react-auth-aa0b9",
  storageBucket: "react-auth-aa0b9.firebasestorage.app",
  messagingSenderId: "684484670581",
  appId: "1:684484670581:web:cc2c16aef68209517a343c",
  measurementId: "G-GZV7NMNRXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);