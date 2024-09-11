// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD-Ify08aD0mZCeUPY_JTBLUR1xOXqiVk",
  authDomain: "slump-studioz.firebaseapp.com",
  projectId: "slump-studioz",
  storageBucket: "slump-studioz.appspot.com",
  messagingSenderId: "742452137615",
  appId: "1:742452137615:web:2672b1c85bb7cad19daafa",
  measurementId: "G-N595109D14",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
