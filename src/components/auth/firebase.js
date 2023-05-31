

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    FacebookAuthProvider,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxEvTWgFyy5Uze5rJdX_WQaoWWUfnTxt8",
    authDomain: "quora-frontend.firebaseapp.com",
    projectId: "quora-frontend",
    storageBucket: "quora-frontend.appspot.com",
    messagingSenderId: "556087347072",
    appId: "1:556087347072:web:ee59fb4530d6b2c8872365",
    measurementId: "G-Q8NDMN5DPV"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export {
    auth,
    db,
    googleProvider,
    facebookProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
};


