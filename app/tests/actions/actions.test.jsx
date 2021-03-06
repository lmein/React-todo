import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

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

  it('Should generate update todo action.', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '1',
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('Should generate login action object', () => {
    const action = {
      type: 'LOGIN',
      uid: '123'
    };
    const res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('Should generate logout action object', () => {
    const action = {
      type: 'LOGOUT'
    };
    const res = actions.logout();

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos.', () => {
    var testTodoRef;
    var uid;
    var todosRef;

    //console.log(firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN));

    beforeEach((done) => {
      //var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);

      //firebase.auth().signInWithCredential(credential).then((user) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        //console.log('1', todosRef);
        return todosRef.remove();
      }).then(() => {
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: 'Dummy test data 1',
          completed: false,
          createdAt: 123
        })
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it('Should toggle todo and dispatch UPDATE_TODO action.', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key});
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done());
    });

    it('Should populate todos and dispatch ADD_TODOS.', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Dummy test data 1');

        done();
      }, done());
    });

    it('Should create todo and dispatch ADD_TODO.', (done) => {
      const store = createMockStore({auth: {uid}});
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
  });
});
