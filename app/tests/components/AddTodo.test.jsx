//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

import * as actions from 'actions';
//the following is the component we want to test.
const {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist.', () => {
    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid todo text.', () => {
    var todoText = 'Check mail.';
    // var action = {
    //   type: 'ADD_TODO',
    //   text: todoText
    // }
    var action = actions.startAddTodo(todoText);
    var spy = expect.createSpy();
    // var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    // expect(spy).toHaveBeenCalledWith(todoText);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should not dispatch ADD_TODO when invalid todo text.', () => {
    var todoText = ''
    var spy = expect.createSpy();
    // var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    //expect(spy).toNotHaveBeenCalled(todoText);
    expect(spy).toNotHaveBeenCalled();
  });

});
