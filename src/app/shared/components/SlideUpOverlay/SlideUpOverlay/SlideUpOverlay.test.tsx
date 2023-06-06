import React from 'react';
import ReactDOM from 'react-dom';
import SlideUpOverlay from './SlideUpOverlay';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlideUpOverlay />, div);
  ReactDOM.unmountComponentAtNode(div);
});