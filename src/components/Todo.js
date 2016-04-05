import React, { Component, PropTypes } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      tempText: props.text || ''
    };
  }

  renderText(){
    const { id, active } = this.props;
    if(this.state.showEdit){
      return (
        <td className="text" rowSpan="2">
          <input type="text"
            value={this.state.tempText}
            onChange={this.handleTextOnChange.bind(this)}
            onBlur={this.handleTextOnBlur.bind(this, id)}
            onKeyDown={e => this.handleOnKeyDown(e, id)}
            autoFocus={true}
          />
        </td>
      );
    } else{
      return (
        <td className="text" rowSpan="2" onClick={this.handleTextOnClick.bind(this)}>
          {(active)? <span>{this.state.tempText}</span>: <span className="completed">{this.state.tempText}</span>}
        </td>
      );
    }
  }

  handleCompleteTodo(id){
    this.props.completeTodo(id);
  }

  handleTextOnClick(){
    this.setState({ showEdit: true});
  }
  handleTextOnChange(e){
    this.setState({ tempText: e.target.value });
  }
  handleTextOnBlur(id){
    this.submitEdit(id);
  }
  handleOnKeyDown(e, id){
    if( e.which === 13 && this.state.tempText) {
      this.submitEdit(id);
    }
  }
  submitEdit(id){
    this.setState({ showEdit: false});
    this.props.editTodo(id, this.state.tempText);
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
          {this.renderText()}
          <td className="star">
            {(starred)? <i className="fa fa-star" onClick={this.handleStarTodo.bind(this, id)}></i> : <i className="fa fa-star-o" onClick={this.handleStarTodo.bind(this, id)}></i>}
          </td>
        </tr>
        <tr>
          <td className="trash">
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
