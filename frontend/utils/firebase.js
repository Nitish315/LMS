import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFr-3a-Ri6rNu5aA9487EDTtPBfZ26pxk",
  authDomain: "loginonlinems.firebaseapp.com",
  projectId: "loginonlinems",
  storageBucket: "loginonlinems.firebasestorage.app",
  messagingSenderId: "194248124287",
  appId: "1:194248124287:web:dca1ad0d148d7e747c5c4a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };