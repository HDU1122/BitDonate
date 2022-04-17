import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAMqqsPb6tZShqWRdCowS2sbZ6XUvCjy_Y",
    authDomain: "bitfund-44efa.firebaseapp.com",
    projectId: "bitfund-44efa",
    storageBucket: "bitfund-44efa.appspot.com",
    messagingSenderId: "173548271651",
    appId: "1:173548271651:web:077999f9667b9a4f3ad996",
    measurementId: "G-VT4JTBPZVJ"
};

const app = firebase.initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage