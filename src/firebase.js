import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnCibXGKdnF36VFMFxXnpNGxks7KQ3fj8",
  authDomain: "clone-7b9ce.firebaseapp.com",
  projectId: "clone-7b9ce",
  storageBucket: "clone-7b9ce.appspot.com",
  messagingSenderId: "233067396349",
  appId: "1:233067396349:web:4d339735a3a5959120d294",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };