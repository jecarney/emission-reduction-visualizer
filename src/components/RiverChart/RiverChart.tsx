import React from 'react';
import { Breakdown } from '../../models/breakdown.type';
import { StripeGroup } from '../../models/stripe.interface';
import './RiverChart.css';
import Summary from './Summary/Summary';

interface RiverChartProps {
  stripeGroup: StripeGroup;
  breakdown: Breakdown;
  total?: number;
  percent?: number;
}

const RiverChart: React.FC<RiverChartProps> = function ({
  stripeGroup,
  breakdown,
  percent = 0,
  total = 0,
}) {
  return (
    <div className="riverchart-wrapper">
      <div className="riverchart__river">
        <Summary
          stripeGroup={stripeGroup}
          breakdown={breakdown}
          percent={percent}
          total={total}
        />
      </div>
    </div>
  );
};

export default RiverChart;
