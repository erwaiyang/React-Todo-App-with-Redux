import React, { Component, PropTypes } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text || ''
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    if( (e.type === 'click' || e.which === 13) && this.state.text) {
      this.props.addTodo(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div className="my-input-area">
        <input
          ref="todoTextInput"
          type="text"
          placeholder="Type something..."
          autoFocus="true"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}><i className="fa fa-plus"></i></button>
      </div>
    );
  }
};

InputArea.propTypes = {
  text: PropTypes.string
};

export default InputArea;
