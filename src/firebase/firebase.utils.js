import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import SignIn from '../components/sign-in/sign-in.component';

const config = {
    apiKey: "AIzaSyDl-NvFjC9YRhEwVpFQpwzdyp1CCQT0EGA",
    authDomain: "crwn-clothes-db-cb99c.firebaseapp.com",
    projectId: "crwn-clothes-db-cb99c",
    storageBucket: "crwn-clothes-db-cb99c.appspot.com",
    messagingSenderId: "450742110358",
    appId: "1:450742110358:web:87449c5964f3c7e7205ab7",
    measurementId: "G-25VBET5CQ7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;