// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-schedule-22188.firebaseapp.com",
  projectId: "meeting-schedule-22188",
  storageBucket: "meeting-schedule-22188.appspot.com",
  messagingSenderId: "106500828540",
  appId: "1:106500828540:web:88b51175fff106b75c88f9",
  measurementId: "G-GTG8SXBSE8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
