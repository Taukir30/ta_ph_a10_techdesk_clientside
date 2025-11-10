// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSI21YxhpMYaXDG4uHCluK0r65EpQ0190",
  authDomain: "tech-desk-5c2fd.firebaseapp.com",
  projectId: "tech-desk-5c2fd",
  storageBucket: "tech-desk-5c2fd.firebasestorage.app",
  messagingSenderId: "849225204281",
  appId: "1:849225204281:web:13c85e25b67d98598583e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);