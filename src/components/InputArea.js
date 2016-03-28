import React, { Component } from 'react';

export default class InputArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-input-area">
        <input type="text" placeholder="Type something..." />
        <button><i className="fa fa-plus"></i></button>
      </div>
    );
  }
};
