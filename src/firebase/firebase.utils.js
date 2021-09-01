
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDihLRbuC6pycANfocwTTo2elCqJuYSdn8",
    authDomain: "crwn-clothing-69b95.firebaseapp.com",
    projectId: "crwn-clothing-69b95",
    storageBucket: "crwn-clothing-69b95.appspot.com",
    messagingSenderId: "127726994049",
    appId: "1:127726994049:web:b51e895ad49b1102ad8380",
    measurementId: "G-5MEWCHBG75"
}

const fireBaseApp = initializeApp(config);

export const auth = getAuth();
export const db = getFirestore(fireBaseApp);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = doc(db, 'users', userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });           
        }
        catch (err) {
            console.log('error creating user', err.message);
        }
    }  
    return userRef;
}


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
