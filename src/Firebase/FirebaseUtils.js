import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAK1Lnw5FK-YZC8EcZzE8nl0s94batOs0U",
  authDomain: "crwn-db-c4684.firebaseapp.com",
  projectId: "crwn-db-c4684",
  storageBucket: "crwn-db-c4684.appspot.com",
  messagingSenderId: "142594697094",
  appId: "1:142594697094:web:b5485e5fa62a2c7c98ae07",
  measurementId: "G-0ERM75MD59",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = db.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("Error creating user", e);
    }
  }
  return userRef;
};

export const auth = firebase.auth();

export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export const signInWithEmail = (email,password) => firebase.auth().signInWithEmailAndPassword(email,password)

provider.setCustomParameters({ prompt: "select_account" });

export default firebase;