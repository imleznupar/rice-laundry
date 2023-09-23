// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaYhzMWQIFnM8ap1ryeIHOnyiz0ZU1whU",
  authDomain: "ricelaundry-3564a.firebaseapp.com",
  projectId: "ricelaundry-3564a",
  storageBucket: "ricelaundry-3564a.appspot.com",
  messagingSenderId: "762006907516",
  appId: "1:762006907516:web:d412a48133f69b8e7e37f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
