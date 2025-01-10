
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNBAD7oMwXtdgfUJDHXjGIM9zjJxDKJKI",
  authDomain: "app-chat-de39c.firebaseapp.com",
  projectId: "app-chat-de39c",
  storageBucket: "app-chat-de39c.firebasestorage.app",
  messagingSenderId: "1088529170312",
  appId: "1:1088529170312:web:6e7c4638d25dfa16dc043d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider};