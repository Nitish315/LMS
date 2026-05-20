// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "XXXX",
//   appId: "XXXX",
// };

// // ✅ THIS LINE IS THE FIX
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnYLq49KCHtDvumfM7KS4g2J3ks7wpuyQ",
  authDomain: "lmsproject-8a57c.firebaseapp.com",
  projectId: "lmsproject-8a57c",
  storageBucket: "lmsproject-8a57c.appspot.com",
  messagingSenderId: "211042481273",
  appId: "1:211042481273:web:d03a82e54394fc76e150a8",
  measurementId: "G-S6G3WH9YJS"
};

const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();