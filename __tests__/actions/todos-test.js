jest.unmock('../../src/actions/todoActions');

import * as actions from '../../src/actions/todoActions';
import * as types from '../../src/constants/actionTypes';

describe('actions', () => {

  describe('addTodo', () => {
    it('should create an action to add a Todo', () => {
      const text = 'TDD React App with Redux';
      const expected = {
        type: types.ADD_TODO,
        text
      };
      expect(actions.addTodo(text)).toEqual(expected);
    });
  });

  describe('delTodo', () => {
    it('should create an action to delete a Todo', () => {
      const deletedId = 1245;
      const expected = {
        type: types.DEL_TODO,
        id: deletedId
      };
      expect(actions.delTodo(deletedId)).toEqual(expected);
    });
  });

  describe('editTodo', () => {
    it('should create an action to edit a Todo', () => {
      const editedId = 1244;
      const text = 'write a book review';
      const expected = {
        type: types.EDIT_TODO,
        id: editedId,
        text
      };
      expect(actions.editTodo(editedId, text)).toEqual(expected);
    });
  });

  describe('completeTodo', () => {
    it('should create an action to mark a Todo as completed', () => {
      const markedId = 8;
      const expected = {
        type: types.COMPLETE_TODO,
        id: markedId
      };
      expect(actions.completeTodo(markedId)).toEqual(expected);
    });
  });

  describe('uncompleteTodo', () => {
    it('should create an action to mark a Todo as uncompleted (active)', () => {
      const markedId = 24;
      const expected = {
        type: types.UNCOMPLETE_TODO,
        id: markedId
      };
      expect(actions.uncompleteTodo(markedId)).toEqual(expected);
    });
  });

  describe('starTodo', () => {
    it('should create an action to mark a Todo as starred', () => {
      const markedId = 81;
      const expected = {
        type: types.STAR_TODO,
        id: markedId
      };
      expect(actions.starTodo(markedId)).toEqual(expected);
    });
  });

  describe('unstarTodo', () => {
    it('should create an action to unstar a Todo', () => {
      const markedId = 20;
      const expected = {
        type: types.UNSTAR_TODO,
        id: markedId
      };
      expect(actions.unstarTodo(markedId)).toEqual(expected);
    });
  });

  describe('dragTodo', () => {
    it('should create an action to change the order of a Todo', () => {
      const draggedOrder = 2;
      const targetOrder = 4;
      const expected = {
        type: types.DRAG_TODO,
        draggedOrder: draggedOrder,
        targetOrder: targetOrder
      };
      expect(actions.dragTodo(draggedOrder, targetOrder)).toEqual(expected);
    });
  });

});
