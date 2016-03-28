import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <i className="fa fa-circle-thin"></i>
        <i className="fa fa-check-circle"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-trash-o"></i>
      </div>
    );
  }
};
