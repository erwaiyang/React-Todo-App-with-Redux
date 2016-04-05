import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          hash: "#all",
          text: "All"
        },
        {
          hash: "#starred",
          text: "Starred"
        },
        {
          hash: "#active",
          text: "Active"
        },
        {
          hash: "#completed",
          text: "Completed"
        }
      ]
    };
  }

  renderMenu(hash) {
    return (
      this.state.menus.map( ( menu, index ) => {
          if(menu.hash === hash) {
             return <li key={index}><a className="active" href={menu.hash}>{menu.text}</a></li>
          } else {
             return <li key={index}><a href={menu.hash}>{menu.text}</a></li>
          }
        }
      )
    );
  }

  render() {
    return (
      <div className="my-nav">
        <ul>
          {this.renderMenu(this.props.hash)}
        </ul>
      </div>
    );
  }
};
