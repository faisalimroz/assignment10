// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4zfzdYaQwQLUBtdbAZK5IRDLq2H4Wyz8",
  authDomain: "assignment10-35ccc.firebaseapp.com",
  projectId: "assignment10-35ccc",
  storageBucket: "assignment10-35ccc.appspot.com",
  messagingSenderId: "667916369925",
  appId: "1:667916369925:web:f29d07f43fbc00ebbb9c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;