import React from 'react';
import ReactDOM from 'react-dom';
import ActionsPicker from './Actions';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionsPicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
