import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCbVRv8DcMBjrfP_dYUwDBczk9qDCYwXK8",
  authDomain: "crud-udemy-firestore-de9d8.firebaseapp.com",
  projectId: "crud-udemy-firestore-de9d8",
  storageBucket: "crud-udemy-firestore-de9d8.appspot.com",
  messagingSenderId: "145089109790",
  appId: "1:145089109790:web:aa475e2657b3afb3cf330f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const firebase = initializeApp(firebaseConfig);

export {firebase}