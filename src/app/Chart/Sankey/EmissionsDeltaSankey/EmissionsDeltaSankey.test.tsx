import React from 'react';
import ReactDOM from 'react-dom';
import EmissionsDeltaSankey from './EmissionsDeltaSankey';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmissionsDeltaSankey />, div);
  ReactDOM.unmountComponentAtNode(div);
});