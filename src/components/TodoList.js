import React, { Component } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-todo-list">
        <Todo />
      </div>
    );
  }
};
