import React, { Component } from 'react';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-logo">
        <h1>TODO <small>beta</small></h1>
      </div>
    );
  }
};
