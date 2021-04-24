// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDAhVwNkhzxUqumnlzydpj8RXy-wVcsutw",
    authDomain: "clone-3bdae.firebaseapp.com",
    projectId: "clone-3bdae",
    storageBucket: "clone-3bdae.appspot.com",
    messagingSenderId: "552031949323",
    appId: "1:552031949323:web:0165da9d74456b8de76d0e",
    measurementId: "G-38NKTFZ66Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}