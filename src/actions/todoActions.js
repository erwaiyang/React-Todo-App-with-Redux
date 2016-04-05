import * as types from '../constants/actionTypes';

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
};

export function delTodo(id) {
  return { type: types.DEL_TODO, id }
};

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
};

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
};

export function uncompleteTodo(id) {
  return { type: types.UNCOMPLETE_TODO, id }
};

export function starTodo(id) {
  return { type: types.STAR_TODO, id }
};

export function unstarTodo(id) {
  return { type: types.UNSTAR_TODO, id }
};

export function dragTodo(draggedOrder, targetOrder) {
   return { type: types.DRAG_TODO, draggedOrder, targetOrder }
}
