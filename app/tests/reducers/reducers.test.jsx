const expect = require('expect');
//deep freeze checks to see if the values passed into the reducers change.  If so, test fails.
const df = require('deep-freeze-strict');
const reducers = require('reducers');

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
        text: 'Dummy test data 1.'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('Should toggle todo.', () => {
      var todos = [{
        id: '1',
        text: 'Dummy test data 1.',
        completed: true,
        createdAt: 100,
        completedAt: 105
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });

});
