import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyB9f2bdIL_aQTFyRBFYriv_9jqbFR3RPnk",
    authDomain: "otp-verification-7fd75.firebaseapp.com",
    databaseURL: "https://otp-verification-7fd75-default-rtdb.firebaseio.com",
    projectId: "otp-verification-7fd75",
    projectId: "otp-verification-7fd75",
    storageBucket: "otp-verification-7fd75.appspot.com",
    messagingSenderId: "194332058612",
    appId: "1:194332058612:web:889c8dace9217d418c8fa1",
    measurementId: "G-R3C1VD678Y"
};


firebase.initializeApp(firebaseConfig);
export default firebase;