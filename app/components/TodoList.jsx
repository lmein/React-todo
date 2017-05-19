const React = require('react');
const {connect} = require('react-redux');
// const Todo = require('Todo');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do.</p>
        );
      }
      return todos.map((todo) => {
        //key= is needed for react to render multiple todos so it can uniquely id each one.
        //... = spread opeator.  ...todo makes each property in todo into an individual prop.
          //<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

//module.exports = TodoList;
//this says we want to connect to TodoList.
export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
