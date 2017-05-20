import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAozyoiQXMuPRngEmaTifKAkDYR-mcBMxI",
    authDomain: "fir-todo-c2fdc.firebaseapp.com",
    databaseURL: "https://fir-todo-c2fdc.firebaseio.com",
    projectId: "fir-todo-c2fdc",
    storageBucket: "fir-todo-c2fdc.appspot.com",
    messagingSenderId: "378335138164"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
