import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDB_y82j-XPV_BsnKUVzul3uh7wixCbFw4",
    authDomain: "project-77-fa01c.firebaseapp.com",
    projectId: "project-77-fa01c",
    storageBucket: "project-77-fa01c.appspot.com",
    messagingSenderId: "90169024807",
    appId: "1:90169024807:web:01f050dbaad4a4e1954902"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();