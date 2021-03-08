import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDu_SCleq02mUYPW3cLbWvkOmrMVevFwPY",
  authDomain: "slack-clone-a5467.firebaseapp.com",
  projectId: "slack-clone-a5467",
  storageBucket: "slack-clone-a5467.appspot.com",
  messagingSenderId: "212268689634",
  appId: "1:212268689634:web:438281520ad05d9dec16bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth , provider, db };