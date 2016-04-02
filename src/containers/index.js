import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import InputArea from '../components/InputArea';
import TodoList from '../components/TodoList';

import * as todoActions from '../actions/todoActions'

class AwesomeTodoApp extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div className="my-app">
        <Logo />
        <Nav />
        <InputArea addTodo={actions.addTodo} />
        <TodoList todos={todos} actions={actions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AwesomeTodoApp);
