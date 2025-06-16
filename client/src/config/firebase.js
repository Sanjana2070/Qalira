import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<api-key>",
  authDomain: "qalira.firebaseapp.com",
  projectId: "qalira",
  storageBucket: "qalira.firebasestorage.app",
  messagingSenderId: "<sender-id>",
  appId: "<app-id>",
  measurementId: "<measurement-id>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
