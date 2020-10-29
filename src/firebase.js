import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD25AaBF-9yA-y-AluHmGTtr98SIXLZTaQ",
  authDomain: "clone-e8235.firebaseapp.com",
  databaseURL: "https://clone-e8235.firebaseio.com",
  projectId: "clone-e8235",
  storageBucket: "clone-e8235.appspot.com",
  messagingSenderId: "992997505715",
  appId: "1:992997505715:web:68d8a1bfc4e022a3200ec6",
  measurementId: "G-D25S1GBB0C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();  // real-time db in firebase
const auth = firebase.auth(); // gives a variable we can use all the signing in, etc

export { db, auth };