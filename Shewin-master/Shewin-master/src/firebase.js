// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAxsOdJV6Rmey04wp75KOgssfBlTZzwcgU",
	authDomain: "shewin-aef8c.firebaseapp.com",
	projectId: "shewin-aef8c",
	storageBucket: "shewin-aef8c.appspot.com",
	messagingSenderId: "629925901244",
	appId: "1:629925901244:web:8ea240718c38cd63f531b9",
	measurementId: "G-J2M7ZSYNP7"
  };

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
