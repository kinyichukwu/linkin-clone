import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC67Jv874r2K2ykXEtQluDbVGBRBNMSqfI",
    authDomain: "linkdin-clone-599a8.firebaseapp.com",
    projectId: "linkdin-clone-599a8",
    storageBucket: "linkdin-clone-599a8.appspot.com",
    messagingSenderId: "891696923245",
    appId: "1:891696923245:web:c7f34c61a12a4b43a87564",
    measurementId: "G-B8RBWHK7SX"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

