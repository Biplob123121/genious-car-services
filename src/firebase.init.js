// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQzcgCC7IkG97pfh5x8-qRID6524o2uNk",
  authDomain: "genious-car-services-74002.firebaseapp.com",
  projectId: "genious-car-services-74002",
  storageBucket: "genious-car-services-74002.appspot.com",
  messagingSenderId: "842140856441",
  appId: "1:842140856441:web:f7345d5f6bec7f566be4a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;