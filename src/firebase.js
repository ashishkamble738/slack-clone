import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSGmivFRFc9TamR2q9qoi0lS9snw-jBPQ",
    authDomain: "slack-clone-843fc.firebaseapp.com",
    databaseURL: "https://slack-clone-843fc-default-rtdb.firebaseio.com",
    projectId: "slack-clone-843fc",
    storageBucket: "slack-clone-843fc.appspot.com",
    messagingSenderId: "723284227716",
    appId: "1:723284227716:web:fb22aaed4d5ded8212f4d1",
    measurementId: "G-XTFT8NX9XJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db