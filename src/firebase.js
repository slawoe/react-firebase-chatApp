import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-chatapp-5b9e0.firebaseapp.com",
  projectId: "react-firebase-chatapp-5b9e0",
  storageBucket: "react-firebase-chatapp-5b9e0.appspot.com",
  messagingSenderId: "544072095891",
  appId: "1:544072095891:web:38bdc866fa75a86b4b9566",
  measurementId: "G-F4MS32RJ0S",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
