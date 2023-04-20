

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
    apiKey: "AIzaSyBvmqKhK6pLqS1swiVu7wialNdbP7E3F34",
    authDomain: "quora-2-fd8ad.firebaseapp.com",
    projectId: "quora-2-fd8ad",
    storageBucket: "quora-2-fd8ad.appspot.com",
    messagingSenderId: "905615334898",
    appId: "1:905615334898:web:020b2f140f921377291f6b",
    measurementId: "G-87N1EQ3PNV"
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


