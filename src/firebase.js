// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC67Jv874r2K2ykXEtQluDbVGBRBNMSqfI",
    authDomain: "linkdin-clone-599a8.firebaseapp.com",
    projectId: "linkdin-clone-599a8",
    storageBucket: "linkdin-clone-599a8.appspot.com",
    messagingSenderId: "891696923245",
    appId: "1:891696923245:web:c7f34c61a12a4b43a87564",
    measurementId: "G-B8RBWHK7SX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}