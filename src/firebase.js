import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxCdJVIk9xsd3yBGm0mE95YJZKuAWQf-o",
    authDomain: "reels-d7b72.firebaseapp.com",
    projectId: "reels-d7b72",
    storageBucket: "reels-d7b72.appspot.com",
    messagingSenderId: "16875188336",
    appId: "1:16875188336:web:b7acef5906c7f4b5e7c4b5"
};

firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;