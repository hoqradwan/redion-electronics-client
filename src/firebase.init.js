// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2XHgmBiJYUBvkhvj3pA3Q8Qh6g-C00As",
  authDomain: "redion-electronics.firebaseapp.com",
  projectId: "redion-electronics",
  storageBucket: "redion-electronics.appspot.com",
  messagingSenderId: "120418386475",
  appId: "1:120418386475:web:e9a9139b444ee49c1fe06e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;