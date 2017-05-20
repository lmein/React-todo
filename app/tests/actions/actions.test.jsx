import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

const actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('Should generate search text action.', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Dummy test data 1'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('Should generate add todo action.', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '1',
        text: 'Dummy test data 1',
        completed: false,
        createdAt: 123
      }
      // text: 'Dummy test data 1'
    };
    //var res = actions.addTodo(action.text);
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('Should create todo and dispatch ADD_TODO.', (done) => {
    const store = createMockStore({});
    const todoText = 'Dummy test data 1';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('Should generate add todos action object', () => {
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
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('Should generate toggle show completed.', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('Should generate toggle todo.', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '1'
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
