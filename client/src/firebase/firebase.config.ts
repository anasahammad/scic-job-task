// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsfxLskiWgrIvEmt4MTbUbncnBKAwGH50",
  authDomain: "exclusive-791af.firebaseapp.com",
  projectId: "exclusive-791af",
  storageBucket: "exclusive-791af.appspot.com",
  messagingSenderId: "87314360474",
  appId: "1:87314360474:web:c71e4cb5c928ef396fd723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;