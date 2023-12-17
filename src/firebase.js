// Import the functions you need from the SDKs you need
// import 'firebase/firestore'
// import firebase from 'firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp, firestore } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoq0ur1ykT5oZsHc8u-5Oe3Vn9_rVbwKg",
  authDomain: "wedding-widjajaa.firebaseapp.com",
  projectId: "wedding-widjajaa",
  storageBucket: "wedding-widjajaa.appspot.com",
  messagingSenderId: "1045111699023",
  appId: "1:1045111699023:web:7070e02f259bb0ff04dc3a",
  measurementId: "G-GW1V34SH0R"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestoreApp = firebase.firestore(firebaseApp)

const analytics = getAnalytics(firebaseApp);

export default firebase;