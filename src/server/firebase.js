import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB3eVGyqPMDCjqX8FNG4Z35E73Yp2XsCos",
  authDomain: "meet-clonee.firebaseapp.com",
  databaseURL: "https://meet-clonee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "meet-clonee",
  storageBucket: "meet-clonee.appspot.com",
  messagingSenderId: "510717745367",
  appId: "1:510717745367:web:41d8cc3b39498ed2e6f892",
  measurementId: "G-PW24Y210L7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
