import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDmQL5T146slXVOi2kXPAKEvi8uT3b-FQM",
    authDomain: "persist-8439e.firebaseapp.com",
    databaseURL: "https://persist-8439e.firebaseio.com",
    projectId: "persist-8439e",
    storageBucket: "persist-8439e.appspot.com",
    messagingSenderId: "95219926032",
    appId: "1:95219926032:web:dba76ca51846b7f1a27695",
    measurementId: "G-FD5ZCBRR6S"
};

let app = Firebase.initializeApp(config);

export const db = app.database();
