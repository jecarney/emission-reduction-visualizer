import React from 'react';
import ReactDOM from 'react-dom';
import Canada from './Canada';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Canada />, div);
  ReactDOM.unmountComponentAtNode(div);
});