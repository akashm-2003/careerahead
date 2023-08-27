
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvmgsRPorveDMge4GyzduoDs6UzXquq8k",
  authDomain: "mastersway-41dfe.firebaseapp.com",
  projectId: "mastersway-41dfe",
  storageBucket: "mastersway-41dfe.appspot.com",
  messagingSenderId: "37068102437",
  appId: "1:37068102437:web:f423bc3dc21f13290818cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
