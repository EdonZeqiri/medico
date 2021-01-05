import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClVZGEYCmI1xTIc88w4fPNIp5kjla-MH8",
  authDomain: "medicodb-2a3fc.firebaseapp.com",
  projectId: "medicodb-2a3fc",
  storageBucket: "medicodb-2a3fc.appspot.com",
  messagingSenderId: "841073294584",
  appId: "1:841073294584:web:880f0112da8e6325e8cf0d",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
