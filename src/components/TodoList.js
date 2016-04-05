import React, { Component } from 'react';

import { SHOW_ALL, SHOW_STARRED, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/filterTypes';

import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  filterTodos(todos, visibleFilter){
    switch(visibleFilter){
      case SHOW_ALL:
        return todos;
      break;
      case SHOW_STARRED:
        return todos.filter((object) => {
          if(object.starred)
            return true;
          else
            return false;
        });
      case SHOW_ACTIVE:
        return todos.filter((object) => {
          if(object.active)
            return true;
          else
            return false;
        });
      case SHOW_COMPLETED:
        return todos.filter((object) => {
          if(!object.active)
            return true;
          else
            return false;
        });
      default:
        return todos;
    }
  }

  renderTodos(todos, actions, visibleFilter){
    return (
      this.filterTodos(todos, visibleFilter).map(todo =>
        <Todo key={todo.id} {...todo} {...actions} />
      )
    );
  }

  render() {
    const { actions, todos, visibleFilter } = this.props;
    return (
      <div className="my-todo-list">
        <table>
          {this.renderTodos(todos, actions, visibleFilter)}
        </table>
      </div>
    );
  }
};
