// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { firebase } from "@firebase/app";
// import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsv4mRjRBR2wV89JD0Tcv2KBZ3qguLhB4",
  authDomain: "az-clone-v2-160324.firebaseapp.com",
  projectId: "az-clone-v2-160324",
  storageBucket: "az-clone-v2-160324.appspot.com",
  messagingSenderId: "288842376014",
  appId: "1:288842376014:web:e454404c1f3be1e153341f",
  measurementId: "G-TE6KX350M1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const analytics = getAnalytics(app);

export { db, auth };
