var firebase = require('firebase') 
var firebaseui = require('firebaseui')

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

  var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};


  // Initialize the FirebaseUI Widget using Firebase.
  const ui = new firebaseui.auth.AuthUI(firebase.auth());