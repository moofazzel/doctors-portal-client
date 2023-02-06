// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCnpdu_eVyvyO7QY3Q6N_G3mpDp-ECjxMU",
  authDomain: "second-hand-products.firebaseapp.com",
  projectId: "second-hand-products",
  storageBucket: "second-hand-products.appspot.com",
  messagingSenderId: "451102376597",
  appId: "1:451102376597:web:85755d0c90781f08e2d19c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
