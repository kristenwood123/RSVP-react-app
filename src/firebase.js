let firebase = require('firebase') 
let firebaseui = require('firebaseui')

  let firebaseConfig = {
    apiKey: "AIzaSyBUueKqJJCaRuMYZjQV_JeEk_2Too7j89c",
    authDomain: "rsvp-react-app.firebaseapp.com",
    projectId: "rsvp-react-app",
    storageBucket: "rsvp-react-app.appspot.com",
    messagingSenderId: "643867441344",
    appId: "1:643867441344:web:17eddfac99a506cfa45525",
    measurementId: "G-C24CZT0KGS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
