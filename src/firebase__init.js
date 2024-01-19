

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUIhkAdpaC0obZDhBEK3pOux5MzA8Rg3U",
  authDomain: "citizenassist-3e7de.firebaseapp.com",
  projectId: "citizenassist-3e7de",
  storageBucket: "citizenassist-3e7de.appspot.com",
  messagingSenderId: "39169308266",
  appId: "1:39169308266:web:35ae819de44b6f68e43c13",
  measurementId: "G-2HCHEDVDCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);

const analytics = getAnalytics(app);
