import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-nav">
        <ul>
          <li><a href="#all">All</a></li>
          <li><a href="#starred">Starred</a></li>
          <li><a href="#active">Active</a></li>
          <li><a href="#completed">Completed</a></li>
        </ul>
      </div>
    );
  }
};
