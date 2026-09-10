// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKg5s42Xbp1Ko7Bo_X2S9bVykOGKsCKnk",
  authDomain: "sri-balaji-fertilizers-b521a.firebaseapp.com",
  projectId: "sri-balaji-fertilizers-b521a",
  storageBucket: "sri-balaji-fertilizers-b521a.firebasestorage.app",
  messagingSenderId: "297136164797",
  appId: "1:297136164797:web:daef686857518b711b4cd4",
  measurementId: "G-39V819BG3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export services for use in other modules
export { app, analytics, database, auth, firestore };
