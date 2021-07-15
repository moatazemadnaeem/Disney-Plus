import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDwGpXgifNkHTBnmF8EGfLa5aK2Tn5rwAM",
    authDomain: "disney-clone-78386.firebaseapp.com",
    projectId: "disney-clone-78386",
    storageBucket: "disney-clone-78386.appspot.com",
    messagingSenderId: "647291424657",
    appId: "1:647291424657:web:805ffe5029188013b05430",
    measurementId: "G-RSZKQZSVEL"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)

export const auth =firebase.auth()

export const provider=new firebase.auth.GoogleAuthProvider();