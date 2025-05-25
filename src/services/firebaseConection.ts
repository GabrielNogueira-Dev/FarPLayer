 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwTz0c4tZOhyZoXpW-BDbscBSJrLoM9WU",
  authDomain: "farplayer-8acd1.firebaseapp.com",
  projectId: "farplayer-8acd1",
  storageBucket: "farplayer-8acd1.firebasestorage.app",
  messagingSenderId: "878515124242",
  appId: "1:878515124242:web:f271a1401c3dfcf12540cb",
  measurementId: "G-WXKJ78144P"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth,db};