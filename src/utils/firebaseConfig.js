// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARui58bujDoAwu5kML2oBcxjkTgbprRPY",
  authDomain: "fitness-shop-e61d4.firebaseapp.com",
  projectId: "fitness-shop-e61d4",
  storageBucket: "fitness-shop-e61d4.appspot.com",
  messagingSenderId: "864920187833",
  appId: "1:864920187833:web:2853e20cb0b109d065fc68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);