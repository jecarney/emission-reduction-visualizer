import React from 'react';
import ReactDOM from 'react-dom';
import Stripe from './Stripe';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stripe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
