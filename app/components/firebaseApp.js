import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBKQMJwcNRlodeEYP_lCMUQY91Q-ER7Vp0",
    authDomain: "t13-database.firebaseapp.com",
    databaseURL: "https://t13-database.firebaseio.com",
    projectId: "t13-database",
    storageBucket: "t13-database.appspot.com",
    messagingSenderId: "634747026122"
};

export default firebaseApp = firebase.initializeApp(config);