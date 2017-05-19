//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
// const Todo = require('Todo');
const {Todo} = require('Todo');

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
    var spy = expect.createSpy();
    //var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    //Todo.refs.todoText.value = todoText;
    TestUtils.Simulate.click($el[0]);

    //expect(spy).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });

  });
});
