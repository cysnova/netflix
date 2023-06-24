import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCCqhJB2rBPkreHCU4lLDlWGSPdBfp7X6g",
    authDomain: "netflix-e94dd.firebaseapp.com",
    projectId: "netflix-e94dd",
    storageBucket: "netflix-e94dd.appspot.com",
    messagingSenderId: "924198084580",
    appId: "1:924198084580:web:227bcf56e3a365d856f1f1",
    measurementId: "G-7N5YV30SEB"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;