import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvgjQ7xDRRYvJXfA-ybHd91NoG8EZUIxY",
  authDomain: "coderhouse-react-ab62a.firebaseapp.com",
  projectId: "coderhouse-react-ab62a",
  storageBucket: "coderhouse-react-ab62a.appspot.com",
  messagingSenderId: "795957463127",
  appId: "1:795957463127:web:9aa37e9c20898ac069fb12"
};

// Initialize Firebase
initializeApp(firebaseConfig); */

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App/>);
