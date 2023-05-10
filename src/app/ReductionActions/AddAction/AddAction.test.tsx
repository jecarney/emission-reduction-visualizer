import React from 'react';
import ReactDOM from 'react-dom';
import AddAction from './AddAction';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddAction />, div);
  ReactDOM.unmountComponentAtNode(div);
});