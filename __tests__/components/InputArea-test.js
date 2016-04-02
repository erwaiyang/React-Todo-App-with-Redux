jest.unmock('../../src/components/InputArea');

import InputArea from '../../src/components/InputArea';
import * as actions from '../../src/actions/todoActions';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('components', () => {
  describe('InputArea', () => {
    it('triggers ADD_TODO when the button is clicked or the enter key is pressed', () => {
      const myInput = TestUtils.renderIntoDocument(
        <InputArea addTodo={actions.addTodo} />
      );
      const myInputNode = ReactDOM.findDOMNode(myInput);
      const input = myInputNode.querySelectorAll("input");

      input.value = 'Testing all components';
      TestUtils.Simulate.change(input);
      TestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
      myInput.props.addTodo('Testing all components');

      //expect(myInput.props.addTodo).toBe(1);

    });
    it('is not going to trigger ADD_TODO if the input is empty', () => {

    });
  });
});
