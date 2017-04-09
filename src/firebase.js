import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBakrXFX9i0i_faD_tH6YmeRIhaMMYHKh4",
  authDomain: "react-firebase-app-5b605.firebaseapp.com",
  databaseURL: "https://react-firebase-app-5b605.firebaseio.com",
  projectId: "react-firebase-app-5b605",
  storageBucket: "react-firebase-app-5b605.appspot.com",
  messagingSenderId: "1009165258728"
}

firebase.initializeApp(config)

export default config

export const database = firebase.database()