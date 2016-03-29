jest.unmock('../../src/reducers/todoReducer');

import { todoReducer, initialState } from '../../src/reducers/todoReducer';
import * as types from '../../src/constants/actionTypes';

describe('todoReducer', () => {
    it('should return initial state', () => {
      expect(todoReducer( undefined, {} )).toEqual(
        initialState
      );
    });

    it('should handle ADD_TODO', () => {
      const text = 'Test Driven Development';
      const comingAction = {
        type: types.ADD_TODO,
        text
      };
      expect(todoReducer( [], comingAction )).toEqual([
        {
          text,
          active: true,
          starred: false,
          id: 0
        }
      ]);

      const myState = [
        {
          text: 'watching Pili series',
          active: true,
          starred: false,
          id: 0
        },
        {
          text: 'Sudo_ interview',
          active: true,
          starred: true,
          id: 3
        },
        {
          text: 'passing all test suites',
          active: false,
          starred: true,
          id: 8
        }
      ];
      expect(todoReducer( myState, comingAction )).toEqual([
        ...myState,
        {
          text,
          active: true,
          starred: false,
          id: 9
        }
      ]);
    });

    it('should handle DEL_TODO', () => {
      const myState = [
        {
          id: 0,
          active: true,
          starred: false,
          text: 'Hello World!'
        },
        {
          id: 5,
          active: false,
          starred: false,
          text: 'having dinner'
        }
      ];
      expect(todoReducer(myState, {
        type: types.DEL_TODO,
        id: 5
      })).toEqual([
        {
          id: 0,
          active: true,
          starred: false,
          text: 'Hello World!'
        }
      ]);
      expect(todoReducer([{
        id: 1,
        active: true,
        starred: false,
        text: 'playing Age of Empires II'
      }], {
        type: types.DEL_TODO,
        id: 1
      })).toEqual([]);
    });

  it('should handle EDIT_TODO', () => {
    expect(todoReducer([{
      id: 2,
      active: true,
      starred: false,
      text: 'drawing a waaaatercolour'
    }], {
      type: types.EDIT_TODO,
      id: 2,
      text: 'drawing a watercolour'
    })).toEqual([{
        id: 2,
        active: true,
        starred: false,
        text: 'drawing a watercolour'
      }]);
  });

  it('should handle COMPLETE_TODO', () => {
    expect(todoReducer([{
      id: 3,
      active: true,
      starred: true,
      text: 'buy a macbook'
    }], {
      type: types.COMPLETE_TODO,
      id: 3
    })).toEqual([{
      id: 3,
      active: false,
      starred: true,
      text: 'buy a macbook'
    }]);
  });

  it('should handle UNCOMPLETE_TODO', () => {
    expect(todoReducer([{
      id: 176,
      active: false,
      starred: false,
      text: 'read JavaScript the Good Parts'
    }], {
      type: types.UNCOMPLETE_TODO,
      id: 176
    })).toEqual([{
      id: 176,
      active: true,
      starred: false,
      text: 'read JavaScript the Good Parts'
    }]);
  });

  it('should handle STAR_TODO', () => {
    expect(todoReducer([{
      id: 168,
      active: true,
      starred: false,
      text: 'travel around Taiwan'
    }], {
      type: types.STAR_TODO,
      id: 168
    })).toEqual([{
      id: 168,
      active: true,
      starred: true,
      text: 'travel around Taiwan'
    }]);
  });

  it('should handle UNSTAR_TODO', () => {
    expect(todoReducer([{
      id: 888,
      active: false,
      starred: true,
      text: 'tidy my room'
    }], {
      type: types.UNSTAR_TODO,
      id: 888
    })).toEqual([{
      id: 888,
      active: false,
      starred: false,
      text: 'tidy my room'
    }]);
  });
});
