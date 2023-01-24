import React, { PropsWithChildren } from 'react';
import './RiverChart.css';

interface RiverChartProps {}

const RiverChart: React.FC<PropsWithChildren<RiverChartProps>> = function ({
  children,
}) {
  return (
    <div className="riverchart-wrapper">
      <div className="riverchart__river">{children}</div>
    </div>
  );
};

export default RiverChart;
