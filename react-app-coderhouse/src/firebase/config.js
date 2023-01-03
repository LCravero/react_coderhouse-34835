// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCklP9rSi3Aj7z1EI3tbTua7uOw1tGKjO4",
  authDomain: "fir-test-react-45f9e.firebaseapp.com",
  projectId: "fir-test-react-45f9e",
  storageBucket: "fir-test-react-45f9e.appspot.com",
  messagingSenderId: "232576670255",
  appId: "1:232576670255:web:ac3ac1c53ca5e0786784da"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb);

export {db};