import React, { Component } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions, todos } = this.props;
    return (
      <div className="my-todo-list">
        <table>
          {todos.map(todo =>
            <Todo key={todo.id} {...todo} {...actions} />
          )}
        </table>
      </div>
    );
  }
};
