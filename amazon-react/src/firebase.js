import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZX7gO4_TvyLDsmIgxM77VI0B_sZZftLM",
    authDomain: "clone-568b3.firebaseapp.com",
    databaseURL: "https://clone-568b3.firebaseio.com",
    projectId: "clone-568b3",
    storageBucket: "clone-568b3.appspot.com",
    messagingSenderId: "648169532866",
    appId: "1:648169532866:web:bbff47e0fa78064067ba5b",
    measurementId: "G-F77MVFK930"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };