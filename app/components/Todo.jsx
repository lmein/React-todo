const React = require('react');
const {connect} = require('react-redux');
const Moment = require('moment');
const Actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      };

      return message + Moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    //var {id} = this.props;
    return (
      <div className= {todoClassName} onClick={() => {
          // this.props.onToggle(id);
          dispatch(Actions.toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
// module.exports = Todo;
// module.exports = connect()(Todo);
