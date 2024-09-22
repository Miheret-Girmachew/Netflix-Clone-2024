// src/utility/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJNDHasBbHAgLA4o0YoL9Tq4PJebORmGY",
  authDomain: "netflix-d1586.firebaseapp.com",
  projectId: "netflix-d1586",
  storageBucket: "netflix-d1586.appspot.com",
  messagingSenderId: "970203851661",
  appId: "1:970203851661:web:6c92e88c2de603252e2bc4",
  measurementId: "G-JKP5S33GTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
