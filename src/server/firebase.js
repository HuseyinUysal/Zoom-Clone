import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBQQOrsTLc-6nrtQA2zokSLMhfK8aWuRTM",
  authDomain: "bitirme-594ec.firebaseapp.com",
  databaseURL: "https://bitirme-594ec-default-rtdb.firebaseio.com",
  projectId: "bitirme-594ec",
  storageBucket: "bitirme-594ec.appspot.com",
  messagingSenderId: "15290306947",
  appId: "1:15290306947:web:1cbe2e68c67f1a7cb826b6"
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
