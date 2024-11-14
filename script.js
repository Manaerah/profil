const { default: firebase } = require("firebase/compat/app");

// Simple message submission handler
function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // For now, just log the values (simulate sending message)
  console.log(`Message sent by ${name} (${email}): ${message}`);
  alert("Message sent successfully!");

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
const firebaseConfig = {
  apiKey: "AIzaSyByrhYEc7w0Bp1p2-bgyhOr_xTj4jzVhD0",
  authDomain: "my-profil-44cf2.firebaseapp.com",
  databaseURL:
    "https://my-profil-44cf2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-profil-44cf2",
  storageBucket: "my-profil-44cf2.firebasestorage.app",
  messagingSenderId: "174741649026",
  appId: "1:174741649026:web:3cf4a073ef967a0757269b",
  measurementId: "G-2TGY25SZ64",
};

//initialize firebase//
firebase.initializeApp(firebaseConfig);

//reference your database//
var myprofilDB = firebase.database().ref("my-profilForm");
