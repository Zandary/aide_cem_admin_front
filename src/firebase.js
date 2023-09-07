// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBafme0xHR863BjdWzMVedWTSIRJlU7pZM",
  authDomain: "aide-9593e.firebaseapp.com",
  projectId: "aide-9593e",
  storageBucket: "aide-9593e.appspot.com",
  messagingSenderId: "721197785405",
  appId: "1:721197785405:web:723ffaf8ca1d9a72e9e554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}