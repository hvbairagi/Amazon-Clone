import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN4lrcNn1vhDlzsazCtkucTqyDCAGEfmw",
  authDomain: "clone-927c8.firebaseapp.com",
  databaseURL: "https://clone-927c8.firebaseio.com",
  projectId: "clone-927c8",
  storageBucket: "clone-927c8.appspot.com",
  messagingSenderId: "911315011829",
  appId: "1:911315011829:web:1b2fee69081030e7ee9dbc",
  measurementId: "G-RKFMQ6K136",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // real-time db in firebase
const auth = firebase.auth(); // gives a variable we can use all the signing in, etc

export { db, auth };
