import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGf42_XoaGJXeobmuHAo9QYqPgqFzb0sk",
    authDomain: "twitter-clone-500c2.firebaseapp.com",
    projectId: "twitter-clone-500c2",
    storageBucket: "twitter-clone-500c2.appspot.com",
    messagingSenderId: "349404868612",
    appId: "1:349404868612:web:2c7d8652aca20f1e880551",
    measurementId: "G-BT4T2G2MPS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;