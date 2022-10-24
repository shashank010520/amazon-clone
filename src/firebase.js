import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBaaygVumgrGetSwJLQoAN1jGrbBqKe7XA",
    authDomain: "amzon-challenge-94272.firebaseapp.com",
    projectId: "amzon-challenge-94272",
    storageBucket: "amzon-challenge-94272.appspot.com",
    messagingSenderId: "737678511308",
    appId: "1:737678511308:web:f0b534b14b1fa56e520669",
    measurementId: "G-RNRFF05PNS",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };