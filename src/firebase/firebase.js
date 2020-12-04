import firebase from "firebase";

export const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBs_oWt5ogF6ef_Th-5Z1PYeMQrnUZESZ4",
  authDomain: "netflix-ab41b.firebaseapp.com",
  projectId: "netflix-ab41b",
  storageBucket: "netflix-ab41b.appspot.com",
  messagingSenderId: "128553354461",
  appId: "1:128553354461:web:fb3a535669d7da16e98734",
  measurementId: "G-59YZJBKXDY",
});

export const auth = firebase.auth();
export const db = firebaseConfig.firestore();
export const storage = firebase.storage();
