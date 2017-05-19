//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

import {configure} from 'configureStore';
//the following is the component we want to test.
// const TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
//const Todo = require('Todo');
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('Should exist.', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item.', () => {
    var todos = [{
      id: 1,
      text: 'Dummy test item 1',
      completed: false,
      completedAt: undefined,
      createdAt: 666
    }, {
      id: 2,
      text: 'Dummy test item 2',
      completed: false,
      completedAt: undefined,
      createdAt: 666
    }, {
      id: 3,
      text: 'Dummy test item 3',
      completed: false,
      completedAt: undefined,
      createdAt: 666
    }];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    //the following will pass the test data into the component.
    // var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    //the following checks to see how many components were rendered (todo items)
    //the scry.. checks to see how many components are rendered under a component.
    //the first arguement is what you want to check, the second is the class to check for.
    // var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    //console.log('TComponents: ',todosComponents);
    expect(todosComponents.length).toBe(todos.length);
  });

  it('Should render empty message if no todos.', () =>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
