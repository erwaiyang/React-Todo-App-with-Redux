import React, { Component } from 'react';

import { SHOW_ALL, SHOW_STARRED, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/filterTypes';

import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'filter': this.setFilter(location.hash)
    };
    window.onhashchange = () => {
      this.setState({ filter: this.setFilter(location.hash) });
    };
  }

  setFilter(hash){
    switch (hash) {
      case '#all':
        return SHOW_ALL;
      case '#starred':
        return SHOW_STARRED;
      case '#active':
        return SHOW_ACTIVE;
      case '#completed':
        return SHOW_COMPLETED;
      default:
        return SHOW_ALL;
    }
  }

  filterTodos(todos){
    switch(this.state.filter){
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

  renderTodos(todos, actions){
    return (
      this.filterTodos(todos).map(todo =>
        <Todo key={todo.id} {...todo} {...actions} />
      )
    );
  }

  render() {
    const { actions, todos } = this.props;
    return (
      <div className="my-todo-list">
        <table>
          {this.renderTodos(todos, actions)}
        </table>
      </div>
    );
  }
};
