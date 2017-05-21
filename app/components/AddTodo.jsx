import React from 'react';
import {connect} from 'react-redux';
var actions = require('actions');

//export var AddTodo = React.createClass({
export class AddTodo extends React.Component {
  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      // this.props.onAddTodo(todoText);
      dispatch(actions.startAddTodo(todoText));
    } else {
      //this puts cursor back into the inbox automatically.
      this.refs.todoText.focus();
    }
  }
  //<form onSubmit={this.handleSubmit}>
  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
//});
};

// module.exports = AddTodo;
export default connect()(AddTodo);
