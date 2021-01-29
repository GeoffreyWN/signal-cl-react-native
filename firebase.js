import * as firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyB3PP50iF6ol0ki0xccFwYvnlQSFuG4a8g",
    authDomain: "signal-cl-5b93b.firebaseapp.com",
    projectId: "signal-cl-5b93b",
    storageBucket: "signal-cl-5b93b.appspot.com",
    messagingSenderId: "242809718977",
    appId: "1:242809718977:web:491a74e7af2a76e4ceec40"
  };
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth()

export { db, auth }