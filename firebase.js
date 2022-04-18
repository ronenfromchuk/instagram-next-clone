// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAUpMds3VconHrCn0ykl8P5PPuiToAK1M",
  authDomain: "insta-2-a9766.firebaseapp.com",
  projectId: "insta-2-a9766",
  storageBucket: "insta-2-a9766.appspot.com",
  messagingSenderId: "280114284841",
  appId: "1:280114284841:web:db3ef159249a63a8a24f38"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };