import React, { FC, Fragment, useState } from 'react';
import { ChartType } from '../../models/chart-type.type';
import { StripeGroup } from '../../models/stripe.interface';
import ChartTypeChoice from '../ChartTypeChoice/ChartTypeChoice/ChartTypeChoice';
import Categorized from '../RiverChart/Categorized/Categorized';
import RiverChart from '../RiverChart/RiverChart';
import Summary from '../RiverChart/Summary/Summary';
import './ChartLayout.css';

interface SummaryLayoutProps {
  emissions: { stripeGroup: StripeGroup; total: number };
  reductions: { stripeGroup: StripeGroup; total: number; percent: number };
  chartType: ChartType;
}

const SummaryLayout: FC<SummaryLayoutProps> = ({
  emissions,
  reductions,
  chartType,
}) => {
  return (
    <>
      <RiverChart>
        <Summary
          stripeGroup={emissions.stripeGroup}
          chartType={chartType}
          total={emissions.total}
        />
      </RiverChart>
      <RiverChart>
        <Summary
          stripeGroup={reductions.stripeGroup}
          chartType={chartType}
          total={reductions.total}
          percent={reductions.percent}
        />
      </RiverChart>
    </>
  );
};

const CategorizedLayout: FC = () => {
  return <Categorized />;
};

interface ChartLayoutProps {
  emissions: { stripeGroup: StripeGroup; total: number };
  reductions: { stripeGroup: StripeGroup; total: number; percent: number };
  info: string;
  chartType: ChartType;
}

const ChartLayout: FC<ChartLayoutProps> = ({
  emissions,
  reductions,
  info,
  chartType,
}) => {
  const [chartTypeState, setChartType] = useState<ChartType>('summary');

  const onSelect = (selectedChartType: ChartType): void => {
    setChartType(selectedChartType);
  };

  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs">
        <ChartTypeChoice onSelect={onSelect} />
      </div>
      <div className="main__chart-wrapper">
        {chartTypeState === 'summary' && (
          <SummaryLayout
            emissions={emissions}
            reductions={reductions}
            chartType={chartType}
          />
        )}

        {chartTypeState === 'categorized' && <CategorizedLayout />}
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
