//the following are the libraries needed for testing.
import expect from 'expect';
import $ from 'jQuery';
//const TestUtils = require('react-addons-test-utils');
import TestUtils from 'react-dom/test-utils';

//the following is the component we want to test.
//const TodoAPI = require('TodoAPI');
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  //the following cleans out localStorage prior to each test.
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist.', () => {
    expect(TodoAPI).toExist();
  });

  // describe('setTodos', () => {
  //   it('Should set valid todos array.', () => {
  //     var todos = [{
  //       id: 1,
  //       text: 'Dummy test item 1',
  //       completed: false
  //     }];
  //     TodoAPI.setTodos(todos);
  //
  //     var actualTodos = JSON.parse(localStorage.getItem('todos'));
  //
  //     //use toEqual with objects and arrays and toBe for others
  //     expect(actualTodos).toEqual(todos);
  //   });
  //
  //   it('Should not set invalid todos array.', () => {
  //     var badTodos = {a: 'b'};
  //     TodoAPI.setTodos(badTodos);
  //
  //     expect(localStorage.getItem('todos')).toBe(null);
  //   });
  // });
  //
  // describe('getTodos', () => {
  //   it('Should return an empty array for bad localStorage data.', () => {
  //     var actualTodos = TodoAPI.getTodos();
  //     expect(actualTodos).toEqual([]);
  //   });
  //
  //   it('Should return todo if a valid array is in localStorage.', () => {
  //     var todos = [{
  //       id: 1,
  //       text: 'Dummy test item 1',
  //       completed: false
  //     }];
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //
  //     var actualTodos = TodoAPI.getTodos();
  //
  //     expect(actualTodos).toEqual(todos);
  //   });
  // });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Dummy test item 1',
      completed: true
    }, {
      id: 2,
      text: 'Just test item 2',
      completed: false
    }, {
      id: 3,
      text: 'Dummy test item 3',
      completed: true
    }];

    it('Should return all items if showCompleted is true.', () => {
        var filterTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filterTodos.length).toBe(3);
    });

    it('Should return non-completed items if showCompleted is false.', () => {
        var filterTodos = TodoAPI.filterTodos(todos, false, '');
        expect(filterTodos.length).toBe(1);
    });

    it('Should sort by completed status.', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('Should filter todos by searchText.', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'just');
      expect(filteredTodos.length).toBe(1);
    });

    it('Should return all todos if searchText is empty.', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
