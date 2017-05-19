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

});
