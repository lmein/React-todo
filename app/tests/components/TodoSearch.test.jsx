//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
// const TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('Should exist.', () => {
    expect(TodoSearch).toExist();
  });

  it('Should dispatch SET_SEARCH_TEXT on input change.', () => {
    var searchText = 'Dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked.', () => {
    var showCompleted = true;
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
