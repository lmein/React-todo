var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    //this uses jquery to check to see if todos is an array
    if ($.isArray(todos)) {
      //JSON.stringify will take object and convert as localstorage can only store strings.
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos;
    }
  },
  getTodos: function () {
     var stringTodos = localStorage.getItem('todos');
     var todos = [];

     try {
       todos = JSON.parse(stringTodos);
     } catch (e) {

     }
    //ternary version of the following if/else
    return $.isArray(todos) ? todos : [];

    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      //if nothing is in search box, return everything OR text contains the text search phrase
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    //Sort Todos with non-completed first
    filteredTodos.sort((a, b) => {
      // //telling sort a should be before b
      // return -1
      // //telling sort b should be before a
      // return 1
      // //no change in sort
      // return 0
      if (!a.completed && b.completed) {
      //if (a.completed === false && b.completed === true) {
        return -1;
      } else if (a.completed && !b.completed) {
      // } else if (a.completed === true && b.completed === false) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
// ReferenceError: todoText is not defined
