import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleCompleteTodo, handleEditTodo, handleStarTodo, handleDelTodo, active, starred, text } = this.props;
    return (
      <tbody>
        <tr>
          <td className="check" rowSpan="2" onClick={handleCompleteTodo}>
            {(active)? <i className="fa fa-circle-thin"></i> : <i className="fa fa-check-circle"></i>}
          </td>
          <td className="text" rowSpan="2" onClick={handleEditTodo}>
            {(active)? <span>{text}</span>: <span><del>{text}</del></span>}
          </td>
          <td>
            {(starred)? <i className="fa fa-star" onClick={handleStarTodo}></i> : <i className="fa fa-star-o" onClick={handleStarTodo}></i>}
          </td>
        </tr>
        <tr>
          <td>
            <i className="fa fa-trash-o" onClick={handleDelTodo}></i>
          </td>
        </tr>
      </tbody>
    );
  }

};

Todo.PropTypes = {
  handleCompleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleStarTodo: PropTypes.func.isRequired,
  handleDelTodo: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  starred: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
