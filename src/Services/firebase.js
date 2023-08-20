// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCVn5qAqGZ_6K1xG1o3RFuvgIP1JkrIUcw',
  authDomain: 'phonebook-74983.firebaseapp.com',
  projectId: 'phonebook-74983',
  storageBucket: 'phonebook-74983.appspot.com',
  messagingSenderId: '62310416438',
  appId: '1:62310416438:web:9d5acdeadb662209eb1897',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth,firestore};