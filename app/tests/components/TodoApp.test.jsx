//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
const TodoApp = require('TodoApp');
var configureStore = require('configureStore');
// var TodoList = require('TodoList');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('Should exist.', () => {
    expect(TodoApp).toExist();
  });

  it('Should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

  // it('Should add todo to the todos state on handleAddTodo.', () => {
  //   var todoText = 'Dummy test item 1';
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(todoText);
  //
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // });

  // it('Should toggle completed value when handleToggle called.', () => {
  //   var todoData = {
  //     id: 1,
  //     text: 'Dummy test item 1',
  //     completed: false,
  //     createdAt: 0,
  //     completedAt: undefined
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   todoApp.handleToggle(todoData.id);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  // });

  // it('Should remove completedAt value when handleToggle called.', () => {
  //   var todoData = {
  //     id: 1,
  //     text: 'Dummy test item 1',
  //     completed: true,
  //     createdAt: 0,
  //     completedAt: 123
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   todoApp.handleToggle(todoData.id);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   // expect(todoApp.state.todos[0].createdAt).toBeA('number');
  //   expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist;
  // });

});
