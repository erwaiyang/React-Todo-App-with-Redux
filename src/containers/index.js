import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Counter from '../components/Counter';
import * as counterActions from '../actions/counterActions';

class AwesomeTodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <Logo />
        <Nav />
        <Counter
          counter={state.count}
          {...actions}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AwesomeTodoApp);
