import React from 'react';
import * as Redux from 'react-redux';

// import uuid from 'node-uuid';
// import moment from 'moment';

//const TodoList = require('TodoList');
import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
// const TodoSearch = require('TodoSearch');
// var TodoAPI = require('TodoAPI');
import * as actions from 'actions';

//export var TodoApp = React.createClass({
export class TodoApp extends React.Component {
  // getInitialState: function () {
  //   return {
  //     showCompleted: false,
  //     searchText: '',
  //     todos: TodoAPI.getTodos()
  //     // todos: [
  //     //   {
  //     //     id: Uuid(),
  //     //     text: 'Wash car',
  //     //     completed: false
  //     //   }, {
  //     //     id: Uuid(),
  //     //     text: 'Mow grass',
  //     //     completed: true
  //     //   }, {
  //     //     id: Uuid(),
  //     //     text: 'Laundry',
  //     //     completed: false
  //     //   }, {
  //     //     id: Uuid(),
  //     //     text: 'Shopping',
  //     //     completed: true
  //     //   }
  //     // ]
  //   };
  // },
  // componentDidUpdate: function () {
  //   TodoAPI.setTodos(this.state.todos);
  // },
  // handleAddTodo: function (text) {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   });
  //   // alert('new todo: ' + text);
  // },
  // handleToggle: function (id) {
  //   var updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? Moment().unix() : undefined;
  //     }
  //     return todo;
  //   });
  //   this.setState({todos: updatedTodos});
  //   //alert('Toggle: ' + id);
  // },
  // handleSearch: function (showCompleted, searchText) {
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText.toLowerCase()
  //   });
  // },
    onLogout (e) {
      var {dispatch} = this.props;
      e.preventDefault();

      dispatch(actions.startLogout());
    }
    render () {
    // var {todos, showCompleted, searchText} = this.state;
    // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    //           <TodoSearch onSearch={this.handleSearch}/>
    // //<TodoList todos={filterTodos} onToggle={this.handleToggle}/>
    //               <AddTodo onAddTodo={this.handleAddTodo}/>
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
//});
};

export default Redux.connect()(TodoApp);
// module.exports = TodoApp;
