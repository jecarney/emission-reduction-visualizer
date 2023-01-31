import { FC, PropsWithChildren } from 'react';
import './RiverChart.css';

const RiverChart: FC<PropsWithChildren> = function ({ children }) {
  return (
    <div className="riverchart-wrapper">
      <div className="riverchart__river">{children}</div>
    </div>
  );
};

export default RiverChart;
