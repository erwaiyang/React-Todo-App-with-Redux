import React, { Component, PropTypes } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleCompleteTodo(id){
    this.props.completeTodo(id);
  }
  handleEditTodo(){

  }
  handleStarTodo(id){
    this.props.starTodo(id);
  }
  handleDelTodo(id){
    this.props.delTodo(id);
  }

  render() {
    const { id, active, starred, text } = this.props;
    return (
      <tbody>
        <tr>
          <td className="check" rowSpan="2" onClick={this.handleCompleteTodo.bind(this, id)}>
            {(active)? <i className="fa fa-circle-thin"></i> : <i className="fa fa-check-circle"></i>}
          </td>
          <td className="text" rowSpan="2" onClick={this.handleEditTodo}>
            {(active)? <span>{text}</span>: <span><del>{text}</del></span>}
          </td>
          <td>
            {(starred)? <i className="fa fa-star" onClick={this.handleStarTodo.bind(this, id)}></i> : <i className="fa fa-star-o" onClick={this.handleStarTodo.bind(this, id)}></i>}
          </td>
        </tr>
        <tr>
          <td>
            <i className="fa fa-trash-o" onClick={this.handleDelTodo.bind(this, id)}></i>
          </td>
        </tr>
      </tbody>
    );
  }

};

Todo.propTypes = {
  active: PropTypes.bool.isRequired,
  starred: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
