import React from 'react';
import ReactDOM from 'react-dom';
import ReductionActions from './ReductionActions';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReductionActions />, div);
  ReactDOM.unmountComponentAtNode(div);
});