// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAytSieAB8tWTD4s9K1A2PbK8GQLIo0Jho",
  authDomain: "recruiter-f006f.firebaseapp.com",
  databaseURL: "https://recruiter-f006f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recruiter-f006f",
  storageBucket: "recruiter-f006f.appspot.com",
  messagingSenderId: "374711283593",
  appId: "1:374711283593:web:9b954c3449087483857b58"
};


const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);
export const firebaseAuth = getAuth(app);
