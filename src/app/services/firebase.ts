// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvWbMwnzMpz5TDyYIYCXfUsJgXOddiHjE",
  authDomain: "blindleiakajakk.firebaseapp.com",
  projectId: "blindleiakajakk",
  storageBucket: "blindleiakajakk.appspot.com",
  messagingSenderId: "257744935021",
  appId: "1:257744935021:web:2c71e8818d14b1ab378764",
  measurementId: "G-QXPJ5B1S3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
