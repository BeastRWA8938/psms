import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyQV9pv70C6bZjeBNZapEn7CMPPq9Klyc",
  authDomain: "parkingspacems-105bf.firebaseapp.com",
  databaseURL: "https://parkingspacems-105bf-default-rtdb.firebaseio.com",
  projectId: "parkingspacems-105bf",
  storageBucket: "parkingspacems-105bf.appspot.com",
  messagingSenderId: "828481037651",
  appId: "1:828481037651:web:a187c639dee96012262da6",
  measurementId: "G-6YWQQE6CT5"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };