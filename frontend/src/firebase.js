// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnYLq49KCHtDvumfM7KS4g2J3ks7wpuyQ",
  authDomain: "lmsproject-8a57c.firebaseapp.com",
  projectId: "lmsproject-8a57c",
  storageBucket: "lmsproject-8a57c.firebasestorage.app",
  messagingSenderId: "211042481273",
  appId: "1:211042481273:web:d03a82e54394fc76e150a8",
  measurementId: "G-S6G3WH9YJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);