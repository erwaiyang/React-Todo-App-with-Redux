import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Logo from '../components/Logo';
import Nav from '../components/Nav';

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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AwesomeTodoApp);
