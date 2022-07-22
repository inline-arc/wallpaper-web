// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Vs_cEOGtcxH5h1JAGBIGbsiMuaeml_0",
  authDomain: "doom-c560e.firebaseapp.com",
  projectId: "doom-c560e",
  storageBucket: "doom-c560e.appspot.com",
  messagingSenderId: "518300927765",
  appId: "1:518300927765:web:ac32d87f25897d2a284b1c",
  measurementId: "G-GSLE3RCW8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
