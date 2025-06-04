import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxzg7wNkESD8awoiN8djOMznjQR8nVSzk",
  authDomain: "qalira.firebaseapp.com",
  projectId: "qalira",
  storageBucket: "qalira.firebasestorage.app",
  messagingSenderId: "1063790029960",
  appId: "1:1063790029960:web:c7cdf68641f3c45ee3433d",
  measurementId: "G-59F7K5H7BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);