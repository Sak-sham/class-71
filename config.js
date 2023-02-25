import firebase from "firebase";
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAZqb1Fue8NClyiAayRgRq0JyfcsfB72rg",
  authDomain: "class-71-fc892.firebaseapp.com",
  projectId: "class-71-fc892",
  storageBucket: "class-71-fc892.appspot.com",
  messagingSenderId: "442361008724",
  appId: "1:442361008724:web:e63fd0653182f1e9d7d3c1"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()