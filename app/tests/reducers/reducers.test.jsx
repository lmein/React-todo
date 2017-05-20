import expect from 'expect';
//deep freeze checks to see if the values passed into the reducers change.  If so, test fails.
import df from 'deep-freeze-strict';

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText.', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dummy test data 1.'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('Should toggle show completed.', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    it('Should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '1',
          text: 'Dummy test data 1.',
          completed: false,
          completedAt: 105
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('Should update todo.', () => {
      var todos = [{
        id: '1',
        text: 'Dummy test data 1.',
        completed: true,
        createdAt: 100,
        completedAt: 105
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
    it('Should add existing todos.', () => {
      var todos = [{
        id: '1',
        text: 'Dummy test data 1',
        completed: false,
        completedAt: undefined,
        createdAt: 666
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

  describe('authReducer', () => {
    it('Should store uid on LOGIN.', () => {
      const action = {
        type: 'LOGIN',
        uid: '123'
      };
      const res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });
    it('Should wipe auth on LOGOUT.', () => {
      const authData = {
        uid: '123'
      };
      const action = {
        type: 'LOGOUT'
      };
      const res = reducers.authReducer(df(authData), df(action));
      expect(res).toEqual({});
    });
  });
});
