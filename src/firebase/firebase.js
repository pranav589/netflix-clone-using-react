import firebase from "firebase";

export const firebaseConfig = firebase.initializeApp({
  //firebase config here
});

export const auth = firebase.auth();
export const db = firebaseConfig.firestore();
export const storage = firebase.storage();
