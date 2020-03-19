import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDq6_xL-5vYthZly5Cd5tUmRF0GriGv1yc",
  authDomain: "crwn-db-d48ec.firebaseapp.com",
  databaseURL: "https://crwn-db-d48ec.firebaseio.com",
  projectId: "crwn-db-d48ec",
  storageBucket: "crwn-db-d48ec.appspot.com",
  messagingSenderId: "462004513073",
  appId: "1:462004513073:web:f50b934c9536f5e0f86810",
  measurementId: "G-3HC0MWZFMQ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;