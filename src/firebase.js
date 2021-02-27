import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDP-PHKbY2nb7crWmmEKNqIK8XCl63yT88",
    authDomain: "crud-1f5bb.firebaseapp.com",
    projectId: "crud-1f5bb",
    storageBucket: "crud-1f5bb.appspot.com",
    messagingSenderId: "606119248749",
    appId: "1:606119248749:web:3e252a9687c219fbe71064"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)