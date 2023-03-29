import React from 'react';
import ReactDOM from 'react-dom';
import ChartSankeyNodeWithIcon from './ChartSankeyNodeWithIcon';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChartSankeyNodeWithIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});