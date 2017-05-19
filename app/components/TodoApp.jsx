var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//const TodoList = require('TodoList');
import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
// const TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
      // todos: [
      //   {
      //     id: Uuid(),
      //     text: 'Wash car',
      //     completed: false
      //   }, {
      //     id: Uuid(),
      //     text: 'Mow grass',
      //     completed: true
      //   }, {
      //     id: Uuid(),
      //     text: 'Laundry',
      //     completed: false
      //   }, {
      //     id: Uuid(),
      //     text: 'Shopping',
      //     completed: true
      //   }
      // ]
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
    // alert('new todo: ' + text);
  },
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
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    //<TodoList todos={filterTodos} onToggle={this.handleToggle}/>
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
