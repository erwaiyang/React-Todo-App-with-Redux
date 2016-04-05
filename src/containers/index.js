import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import InputArea from '../components/InputArea';
import TodoList from '../components/TodoList';

import * as todoActions from '../actions/todoActions';
import { SHOW_ALL, SHOW_STARRED, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/filterTypes';

class AwesomeTodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hash: location.hash || '#all',
      visibleFilter: this.setFilter(location.hash)
    };
    window.onhashchange = () => {
      this.setState({
        hash: location.hash,
        visibleFilter: this.setFilter(location.hash)
      });
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setFilter (hash){
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
          <Nav hash={this.state.hash} />
          <InputArea ref="input_area" addTodo={actions.addTodo} />
        </div>
        <div id="sticky-helper" />
        <TodoList visibleFilter={this.state.visibleFilter} todos={todos} actions={actions} />
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
