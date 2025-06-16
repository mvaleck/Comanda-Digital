// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCjTBJRknO8iCOaZPBN1Nysax7hTh267zk",
  authDomain: "comanda-digital-54132.firebaseapp.com",
  projectId: "comanda-digital-54132",
  storageBucket: "comanda-digital-54132.firebasestorage.app",
  messagingSenderId: "197858642508",
  appId: "1:197858642508:web:0a58a563f7de26bd5bc2e9",
  measurementId: "G-LXB0SFY885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // 👈 adicione esta linha
const analytics = getAnalytics(app);

export { app, auth }; // 👈 e esta também!