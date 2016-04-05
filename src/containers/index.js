import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import InputArea from '../components/InputArea';
import TodoList from '../components/TodoList';

import * as todoActions from '../actions/todoActions'

class AwesomeTodoApp extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    let scrollTop = event.srcElement.body.scrollTop;
    const stickyInstance = document.getElementById('sticky');
    const stickyHelperInstance = document.getElementById('sticky-helper');
    if(stickyInstance.getClientRects()[0].top<0){
      stickyInstance.className += ' sticky';
      stickyHelperInstance.style.height = stickyInstance.offsetHeight+'px';
    }
    if(scrollTop<(stickyInstance.offsetHeight+stickyInstance.offsetTop)){
      stickyInstance.className = '';
      stickyHelperInstance.style.height = 0;
    }
  }

  render() {
    const { todos, actions } = this.props;
    return (
      <div className="my-app">
        <Logo />
        <div id="sticky">
          <Nav />
          <InputArea ref="input_area" addTodo={actions.addTodo} />
        </div>
        <div id="sticky-helper" />
        <TodoList todos={todos} actions={actions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer
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
