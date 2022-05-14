// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_messagingSenderId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCv_TFCxdjOI3so72JG3XaIWTFiUzFNGvc",
//   authDomain: "doctors-portal-c7f85.firebaseapp.com",
//   projectId: "doctors-portal-c7f85",
//   storageBucket: "doctors-portal-c7f85.appspot.com",
//   messagingSenderId: "456340456393",
//   appId: "1:456340456393:web:7038a599db7b9829e21e18",
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
