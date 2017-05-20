//the following are the libraries needed for testing.
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
//const TestUtils = require('react-addons-test-utils');
import TestUtils from 'react-dom/test-utils';

import * as actions from 'actions';
//the following is the component we want to test.
// const Todo = require('Todo');
import {Todo} from 'Todo';

describe('Todo', () => {
  it('Should exist.', () => {
    expect(Todo).toExist();
  });

  it('Should dispatch TOGGLE_TODO action on click.', () => {
    var todoData = {
      id: 1,
      text: 'Dummy test item 1',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    //var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    //Todo.refs.todoText.value = todoText;
    TestUtils.Simulate.click($el[0]);

    //expect(spy).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith(action);

  });
});
