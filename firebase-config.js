// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5iem_RuGnreeSyCpEkbIKn34BTE3iino",
  authDomain: "rgbiryani-new.firebaseapp.com",
  projectId: "rgbiryani-new",
  storageBucket: "rgbiryani-new.appspot.com",
  messagingSenderId: "298311507206",
  appId: "1:298311507206:web:4233c984842ca9be441287",
  measurementId: "G-R2ZBMHFM3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);