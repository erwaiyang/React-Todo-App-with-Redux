import React, { Component } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick(){
    console.log('on click!');
  }

  render() {
    return (
      <div className="my-todo-list">
        <table>
          <Todo
            handleStarTodo={this._handleClick}
            text="reading a book"
            active={false}
            starred={true} />
        </table>
      </div>
    );
  }
};
