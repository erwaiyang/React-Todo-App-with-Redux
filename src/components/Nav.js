import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-nav">
        <ul>
          <li>All</li>
          <li>Starred</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>
    );
  }
};
