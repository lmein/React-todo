import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

var actions = require('actions');

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
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    //var {id} = this.props;
              // this.props.onToggle(id);
                                  // dispatch(actions.toggleTodo(id));
              return (
                <div className={todoClassName} onClick={() => {
                    dispatch(actions.startToggleTodo(id, !completed));
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
