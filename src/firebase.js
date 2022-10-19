// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkpk51wLx3kcCF2qZZnYLXDsK0LDK2eKU",
  authDomain: "lillies-app.firebaseapp.com",
  projectId: "lillies-app",
  storageBucket: "lillies-app.appspot.com",
  messagingSenderId: "950801089264",
  appId: "1:950801089264:web:0b67c08a7691df3ce7f835",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
