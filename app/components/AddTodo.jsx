const React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      // this.props.onAddTodo(todoText);
      dispatch(actions.addTodo(todoText));
    } else {
      //this puts cursor back into the inbox automatically.
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Enter todo here."/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

// module.exports = AddTodo;
export default connect()(AddTodo);
