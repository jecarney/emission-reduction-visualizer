import React from 'react';
import ReactDOM from 'react-dom';
import ChartTypeChoice from './RadioGroupFormPart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChartTypeChoice />, div);
  ReactDOM.unmountComponentAtNode(div);
});
