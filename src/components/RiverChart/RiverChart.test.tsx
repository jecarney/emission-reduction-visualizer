import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RiverChart from './RiverChart';

describe('<RiverChart />', () => {
  test('it should mount', () => {
    render(<RiverChart />);

    const RiverChart = screen.getByTestId('RiverChart');

    expect(RiverChart).toBeInTheDocument();
  });
});
