import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDihLRbuC6pycANfocwTTo2elCqJuYSdn8",
    authDomain: "crwn-clothing-69b95.firebaseapp.com",
    projectId: "crwn-clothing-69b95",
    storageBucket: "crwn-clothing-69b95.appspot.com",
    messagingSenderId: "127726994049",
    appId: "1:127726994049:web:b51e895ad49b1102ad8380",
    measurementId: "G-5MEWCHBG75"
}

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
