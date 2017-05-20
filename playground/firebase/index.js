import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    appName: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Joe',
    age: 24
  }
});
//firebase does not store arrays, but converts them to objects to give each array value an unique id.

// }).then (() => {
//   console.log('Set worked.');
// }, (e) => {
//   console.log('Set failed.');
// });

// firebaseRef.set({
//   appName: 'Todo App 2',
// });

// firebaseRef.child('app').set({
//   appName: 'Todo App 2'
// });
//**********************************************
// firebaseRef.update({
//   isRunning: false,
//   'app/appName': 'Todo App 2'
// });

// firebaseRef.child('app').update({
//   appName: 'Todo App 2'
// });
//can tack on a .then for a promise to an update.
// firebaseRef.update({
//   'app/appName': 'Todo App 2',
//   'user/name': 'Jane'
// });
//**********************************************
//the following removes entire database:
//firebaseRef.remove();
// firebaseRef.child('app/appName').remove();
//setting to null removes value from database:
// firebaseRef.child('app').update({
//   version: '2.0',
//   appName: null
// });
// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();
//**********************************************
// get data from db.
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('DB: ', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value from database.', e);
// });
//listener
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
// //the following turns off all listeners
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});
//
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
// //the following turns on just the logData listener
// firebaseRef.on('value', logData);
// //the following turns off just the logData listener
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});

// var logUserData = (snapshot) => {
//   console.log('User change data: ', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logUserData);
//
// firebaseRef.update({'user/name': 'Jane'});
//
// firebaseRef.update({'app/appName': 'Todo App 2'});

//handling arrays:
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child added: ', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child changed: ', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child removed: ', snapshot.key, snapshot.val());
// });
//
// // var newNoteRef = notesRef.push();
// //
// // newNoteRef.set({
// //   text: 'Walk the dog.'
// // });
// //the following is the same as the above two lines
// var newNoteRef = notesRef.push({
//   text: 'Get the mail.'
// });
// console.log('todo id: ', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
