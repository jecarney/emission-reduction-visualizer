import React, { FC, Fragment } from 'react';
import { Breakdown } from '../../models/breakdown.type';
import { StripeGroup } from '../../models/stripe.interface';
import RiverChart from '../RiverChart/RiverChart';
import Summary from '../RiverChart/Summary/Summary';
import './ChartLayout.css';

interface SummaryLayoutProps {
  emissions: { stripeGroup: StripeGroup; total: number };
  reductions: { stripeGroup: StripeGroup; total: number; percent: number };
  breakdown: Breakdown;
}

const SummaryLayout: FC<SummaryLayoutProps> = ({
  emissions,
  reductions,
  breakdown,
}) => {
  return (
    <>
      <RiverChart>
        <Summary
          stripeGroup={emissions.stripeGroup}
          breakdown={breakdown}
          total={emissions.total}
        />
      </RiverChart>
      <RiverChart>
        <Summary
          stripeGroup={reductions.stripeGroup}
          breakdown={breakdown}
          total={reductions.total}
          percent={reductions.percent}
        />
      </RiverChart>
    </>
  );
};

interface ChartLayoutProps {
  emissions: { stripeGroup: StripeGroup; total: number };
  reductions: { stripeGroup: StripeGroup; total: number; percent: number };
  info: string;
  breakdown: Breakdown;
}

const ChartLayout: FC<ChartLayoutProps> = ({
  emissions,
  reductions,
  info,
  breakdown,
}) => {
  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs">main inputs</div>
      <div className="main__chart-wrapper">
        <SummaryLayout
          emissions={emissions}
          reductions={reductions}
          breakdown={breakdown}
        />
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
