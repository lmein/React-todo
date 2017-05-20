import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
// const Route = require('react-router').Route;
// const Router = require('react-router').Router;
// const IndexRoute = require('react-router').IndexRoute;
// const hashHistory = require('react-router').hashHistory;
// weather api key: df7e3c98ca0017fe242189315a17b64e
// const Main = require('Main');
// import TodoApp from 'TodoApp';
// import Login from 'Login';
// import './../playground/firebase/index.js';

var actions = require('actions');
var store = require('configureStore').configure();
// var TodoAPI = require('TodoAPI');
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state: ', store.getState());
//   TodoAPI.setTodos(state.todos);
// });

//gets any todos in local storage
  // var initialTodos = TodoAPI.getTodos();
  // store.dispatch(actions.addTodos(initialTodos));
store.dispatch(actions.startAddTodos());

// store.dispatch(actions.addTodo('Get the mail.'));
// store.dispatch(actions.setSearchText('mail'));
// store.dispatch(actions.toggleShowCompleted());

//Load foundations
//css! is from the css-loader that was installed.
//style! is from the style-loader that was installed and tells how to install a css file.
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');
//starts up foundation
$(document).foundation();

// var requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/');
//   }
//   next();
// };
//
// var redirectIfLoggedIn = (nextState, replace, next) => {
//   if (firebase.auth().currentUser) {
//     replace('/todos');
//   }
//   next();
// };
// <Router history={hashHistory}>
//   <Route exact path="/">
//     <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
//     <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
//   </Route>
// </Router>
ReactDOM.render(
  <Provider store={store}>
    {router}

  </Provider>,
  //

  //     // <Route path="countdown" component={Countdown}/>
  //     // <IndexRoute component={Timer}/>
  //   </Route>
  // </Router>,
  document.getElementById('app')
);
// <Route path="about" component={About}/>
// <Route path="examples" component={Examples}/>
// <IndexRoute component={Weather}/>
