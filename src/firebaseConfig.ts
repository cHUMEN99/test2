import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAUDKLT5oReCqMz6eHE43BOj762G0f48_w",
  authDomain: "my-product-215bd.firebaseapp.com",
  projectId: "my-product-215bd",
  storageBucket: "my-product-215bd.appspot.com",
  messagingSenderId: "389645993598",
  appId: "1:389645993598:web:df9907a125e7dc3eda3a2f",
  measurementId: "G-P00HVTNRKG"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth, firebase };
