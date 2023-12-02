import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNTcqjwJZ6a-4D2is6EeXsf4dnjpnpcjM",
  authDomain: "disneyplus-clone-27016.firebaseapp.com",
  projectId: "disneyplus-clone-27016",
  storageBucket: "disneyplus-clone-27016.appspot.com",
  messagingSenderId: "580537232993",
  appId: "1:580537232993:web:da5fc0f37ed476c0928420",
  measurementId: "G-H43DJBG5M4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;