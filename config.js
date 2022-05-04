import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB8hAXbuKUvw1Ge1QDeLqFYmg_ZLgv9hzU",
  authDomain: "project-71-4eb88.firebaseapp.com",
  projectId: "project-71-4eb88",
  storageBucket: "project-71-4eb88.appspot.com",
  messagingSenderId: "819464056694",
  appId: "1:819464056694:web:254914ce2bd530f9d55457"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
