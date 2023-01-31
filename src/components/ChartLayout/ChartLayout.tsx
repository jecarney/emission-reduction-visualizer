import { FC, useState } from 'react';
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
}

const SummaryLayout: FC<SummaryLayoutProps> = ({ emissions, reductions }) => {
  return (
    <>
      <RiverChart>
        <Summary stripeGroup={emissions.stripeGroup} total={emissions.total} />
      </RiverChart>
      <RiverChart>
        <Summary
          stripeGroup={reductions.stripeGroup}
          total={reductions.total}
          percent={reductions.percent}
        />
      </RiverChart>
    </>
  );
};

interface CategorizedLayoutProps {
  emissions: StripeGroup;
  reductions: StripeGroup;
}

const CategorizedLayout: FC<CategorizedLayoutProps> = ({
  emissions,
  reductions,
}) => {
  return (
    <RiverChart>
      <Categorized emissions={emissions} reductions={reductions} />
    </RiverChart>
  );
};

interface ChartLayoutProps {
  emissions: { stripeGroup: StripeGroup; total: number };
  reductions: { stripeGroup: StripeGroup; total: number; percent: number };
  info: string;
}

const ChartLayout: FC<ChartLayoutProps> = ({ emissions, reductions, info }) => {
  const [chartType, setChartType] = useState<ChartType>('categorized');

  const onSelect = (selectedChartType: ChartType): void => {
    setChartType(selectedChartType);
  };

  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs">
        <ChartTypeChoice onSelect={onSelect} chartType={chartType} />
      </div>
      <div className="main__chart-wrapper">
        {chartType === 'summary' && (
          <SummaryLayout emissions={emissions} reductions={reductions} />
        )}

        {chartType === 'categorized' && (
          <CategorizedLayout
            emissions={emissions.stripeGroup}
            reductions={reductions.stripeGroup}
          />
        )}
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
