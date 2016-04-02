import * as C from '../constants/actionTypes';

const initialState = [];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case C.ADD_TODO:
      let theBiggestId = -1;
      for(var i = 0; i<state.length; i++){
        if(state[i].id>theBiggestId)
          theBiggestId = state[i].id;
      }
      return [
        ...state,
        {
          id: Math.max( state.length, (theBiggestId + 1) ),
          active: true,
          starred: false,
          text: action.text
        }
      ];

    case C.DEL_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case C.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      );

    case C.COMPLETE_TODO:
    case C.UNCOMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { active: !todo.active }) :
          todo
      );

    case C.STAR_TODO:
    case C.UNSTAR_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { starred: !todo.starred }) :
          todo
      );

    default:
      return state;
  }
};
